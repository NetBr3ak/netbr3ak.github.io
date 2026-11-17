"""Static checks for the profile pages. Run from the repository root: python3 -I checks/check.py"""
import difflib
import json
import re
import sys
from datetime import datetime
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

SITE = "https://netbr3ak.github.io/"
PAGES = {"en": ("docs/index.html", SITE), "pl": ("docs/pl/index.html", SITE + "pl/")}
ALTERNATES = {"en": SITE, "pl": SITE + "pl/", "x-default": SITE}
# Visible text that the accepted text does not hold: the language switch label (there is no skip link).
ALLOWED = {"Polski", "English"}
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}
problems = []

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.stack, self.tags, self.text, self.jsonld = path, [], [], [], []
        self.links, self.headings = [], []
        self.feed(Path(path).read_text(encoding="utf-8"))
        self.close()

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))
        if tag == "a" and "main" in self.stack:
            self.links.append([dict(attrs).get("href"), ""])
        if tag == "h2":
            self.headings.append("")
        if tag not in VOID:
            self.stack.append(tag)

    def handle_endtag(self, tag):
        if not self.stack or self.stack.pop() != tag:
            problems.append(f"{self.path}: unexpected </{tag}>")

    def handle_data(self, data):
        if "script" in self.stack and self.tags[-1][1].get("type") == "application/ld+json":
            self.jsonld.append(data)
        elif "body" in self.stack and not {"script", "style"} & set(self.stack):
            if not ("nav" in self.stack and data.strip() in ALLOWED):
                self.text.append(data)
            if "a" in self.stack and "main" in self.stack:
                self.links[-1][1] += data
            if "h2" in self.stack:
                self.headings[-1] += data

    def find(self, tag, **attrs):
        return [a for t, a in self.tags if t == tag and all(a.get(k) == v for k, v in attrs.items())]

def plain(md):
    """Markdown as the reader sees it: no heading or list marks, no backticks, link text without targets."""
    md = re.sub(r"^(#+|-)\s+", "", md, flags=re.M).replace("`", "")
    return re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", md)

def words(text):
    return " ".join(text.split())

def has_utc_offset(value):
    """Google reads the two dates of a ProfilePage as DateTime: a bare date is reported as an invalid value."""
    try:
        return datetime.fromisoformat(value).tzinfo is not None
    except (TypeError, ValueError):
        return False

def compare(path, what, page_items, text_items, show):
    """One problem line per added, removed or changed run of items, page against accepted text."""
    matcher = difflib.SequenceMatcher(None, text_items, page_items, autojunk=False)
    for op, i1, i2, j1, j2 in matcher.get_opcodes():
        if op != "equal":
            change = {"replace": "changed", "delete": "missing", "insert": "added"}[op]
            problems.append(f"{path}: {what} {change}: text has {show(text_items[i1:i2])!r}, page has {show(page_items[j1:j2])!r}")

def check_page(lang, path, url):
    page, html = Page(path), Path(path).read_text(encoding="utf-8")
    md = Path(f"checks/text/{lang}.md").read_text(encoding="utf-8")
    title = re.search(r"<title>(.*?)</title>", html).group(1).replace("&amp;", "&")
    description = page.find("meta", name="description")[0]["content"]
    alternates = {a["hreflang"]: a["href"] for a in page.find("link", rel="alternate")}
    checks = {
        "exactly one h1": len(page.find("h1")) == 1,
        f"title of {len(title)} characters (max 60)": len(title) <= 60,
        f"description of {len(description)} characters (70 to 160)": 70 <= len(description) <= 160,
        "canonical is not this page": [a["href"] for a in page.find("link", rel="canonical")] == [url],
        f"hreflang alternates {alternates}": alternates == ALTERNATES,
        "section order differs from the text": [words(h) for h in page.headings] == re.findall(r"^## (.*)$", md, re.M),
    }
    problems.extend(f"{path}: {name}" for name, ok in checks.items() if not ok)
    compare(path, "words", "".join(page.text).split(), plain(md).split(), " ".join)
    md_links = [(words(t), u) for t, u in re.findall(r"\[([^\]]*)\]\(([^)]+)\)", md.replace("`", ""))]
    page_links = [(words(t), u) for u, t in page.links]
    compare(path, "links", page_links, md_links, lambda pairs: [f"{t} -> {u}" for t, u in pairs])
    blocks = []
    for number, block in enumerate(page.jsonld, 1):
        try:
            blocks.append(json.loads(block))
        except json.JSONDecodeError as error:
            problems.append(f"{path}: JSON-LD block {number} does not parse: {error}")
    people = [b.get("mainEntity", {}) for b in blocks if isinstance(b, dict) and b.get("@type") == "ProfilePage"]
    if len(people) != 1 or people[0].get("@type") != "Person" or not people[0].get("name"):
        problems.append(f"{path}: needs one ProfilePage with mainEntity Person and a name")
    for profile in (b for b in blocks if isinstance(b, dict) and b.get("@type") == "ProfilePage"):
        dates = ("dateCreated", "dateModified")
        problems.extend(f"{path}: {key} needs a date, a time and a UTC offset" for key in dates if not has_utc_offset(profile.get(key)))
    return [p.get("@id") for p in people]

def check_file(path):
    text = path.read_text(encoding="utf-8")
    if chr(0x2014) in text:  # a code point, so this file holds no em dash itself
        problems.append(f"{path}: em dash (U+2014)")
    if path.suffix in {".html", ".css", ".xml", ".txt", ".svg"} and "http://" in re.sub(r'xmlns(:\w+)?="[^"]*"', "", text):
        problems.append(f"{path}: http:// link")
    if path.suffix == ".css" and re.search(r"@import|url\(\s*['\"]?(https?:)?//", text):
        problems.append(f"{path}: loads a resource from another file or origin")
    if path.suffix != ".html":
        return
    if "DATE_" in text:
        problems.append(f"{path}: DATE_ placeholder left")
    for tag, attrs in Page(path).tags:
        loaded = attrs.get("href") if tag == "link" and attrs.get("rel") not in {"canonical", "alternate"} else attrs.get("src")
        if urlparse(loaded or "").netloc not in {"", "netbr3ak.github.io"}:
            problems.append(f"{path}: loads {loaded}")

ids = [i for lang, (path, url) in PAGES.items() for i in check_page(lang, path, url)]
if len(ids) != 2 or len(set(ids)) != 1:
    problems.append(f"Person @id differs between pages: {ids}")
files = [p for p in Path(".").rglob("*") if p.is_file() and not {".git", "test-results", "playwright-report"} & set(p.parts)]
for path in files:
    if path.name.lower() == "llms.txt":
        problems.append(f"{path}: llms.txt must not exist")
    if path.suffix != ".png":
        check_file(path)
for card in (Path("docs/og.png"), Path("docs/pl/og.png")):
    png = card.read_bytes()[:24] if card.exists() else b""
    if png[:8] != b"\x89PNG\r\n\x1a\n" or (int.from_bytes(png[16:20]), int.from_bytes(png[20:24])) != (1200, 630):
        problems.append(f"{card}: missing or not 1200 x 630 px")
print("\n".join(problems) or "ok: both pages pass every static check")
sys.exit(1 if problems else 0)
