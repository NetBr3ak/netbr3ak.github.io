# netbr3ak.github.io

The personal profile page of Szymon Jędryczko, in English (`docs/index.html`) and Polish (`docs/pl/index.html`).
Static HTML with one shared stylesheet: no build step, no JavaScript, no font files and no requests to other sites.

Status: published at https://netbr3ak.github.io/ (English) and https://netbr3ak.github.io/pl/ (Polish).
GitHub Pages publishes branch `main`, folder `/docs`; only the files in `docs/` become pages, and the folder name is not part of any URL.

## Files

| File | Purpose |
|---|---|
| `docs/index.html`, `docs/pl/index.html` | The two pages, with head tags and JSON-LD (ProfilePage with a Person) |
| `docs/style.css` | Layout, type and the light and dark colour schemes |
| `docs/og.png`, `docs/pl/og.png` | Share cards, 1200 x 630 px: screenshots of `checks/og.html` and `checks/og-pl.html` |
| `docs/404.html`, `docs/robots.txt`, `docs/sitemap.xml`, `docs/favicon.svg`, `docs/.nojekyll` | GitHub Pages files |
| `docs/google6fb784815f11aa0c.html`, `docs/BingSiteAuth.xml`, `docs/3d53a8cc08d3abffad6d6ceef8a53419.txt` | Ownership files for Google Search Console, Bing Webmaster Tools and IndexNow; deleting one ends that verification |
| `checks/text/en.md`, `checks/text/pl.md` | The accepted page text; the visible text of each page must equal it word for word, apart from the language switch label |

## Checks

Static checks, any machine with Python 3, from the repository root:

```sh
python3 -I checks/check.py
```

It prints one line per problem and exits 1, or prints `ok` and exits 0. It covers the headings, title and description lengths, canonical and hreflang links, JSON-LD (every block must parse), the page text word by word, the links in `main` in order with their targets, `http://` links, resources from other sites, em dashes, `llms.txt` and the size of both share cards.

Browser checks need a Linux machine with three tools: Playwright and `@axe-core/playwright` on `NODE_PATH`, and `html-validate` on `PATH`. From the repository root:

```sh
NODE_PATH=<node_modules folder> PATH=<node_modules folder>/.bin:$PATH sh checks/browser.sh
```

`checks/browser.sh` serves `docs/` on a local port assigned to that run and runs html-validate on the three pages, then `checks/browser.cjs`: axe in the light and dark schemes at 1280 and 375 px, console errors, requests to other sites, sideways scrolling at 320 and 375 px and at a 200% default font size at 1280 and 375 px, the fonts used for the name and the intro, and a Tab order equal to the DOM order of the links in both schemes. It writes screenshots to `test-results/frames/` and the share cards to `test-results/og/og.png` and `test-results/og/og-pl.png`. Copy them over `docs/og.png` and `docs/pl/og.png` after a change to `checks/og.html`, `checks/og-pl.html` or to the name and role styles.
