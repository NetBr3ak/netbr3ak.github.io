// Browser checks, against a server on 127.0.0.1:4480 for docs/ that checks/browser.sh starts:
// axe and console in both colour schemes, sideways scroll, keyboard path, fonts used, measure, frames, og.png.
const fs = require('node:fs');
const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright');

const BASE = 'http://127.0.0.1:4480';
const OUT = 'test-results/frames';
const PAGES = { en: '/', pl: '/pl/' };
const problems = [];
const notes = [];

async function open(browser, path, { width, height, scheme = 'light' }) {
  const context = await browser.newContext({ viewport: { width, height }, colorScheme: scheme });
  const page = await context.newPage();
  const label = `${path} ${width} ${scheme}`;
  page.on('console', (m) => m.type() === 'error' && problems.push(`${label}: console error ${m.text()}`));
  page.on('pageerror', (e) => problems.push(`${label}: page error ${e.message}`));
  page.on('request', (r) => r.url().startsWith(BASE) || problems.push(`${label}: request to ${r.url()}`));
  page.on('response', (r) => r.status() >= 400 && problems.push(`${label}: HTTP ${r.status()} ${r.url()}`));
  await page.goto(BASE + path);
  return { context, page };
}

// Top of the page plus at least two scroll stops, evenly spread down to the bottom.
async function frames(page, name) {
  const { inner, total } = await page.evaluate(() => ({ inner: innerHeight, total: document.documentElement.scrollHeight }));
  const max = Math.max(0, total - inner);
  const stops = Math.max(3, Math.ceil(max / (inner * 0.8)) + 1);
  for (let i = 0; i < stops; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), Math.round((max * i) / (stops - 1)));
    await page.screenshot({ path: `${OUT}/${name}-${i}.png` });
  }
}

async function checkOverflow(page, label) {
  const extra = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  if (extra > 0) problems.push(`${label}: scrolls sideways by ${extra} px`);
}

async function getFonts(context, page, selector) {
  const cdp = await context.newCDPSession(page);
  await cdp.send('DOM.enable');
  await cdp.send('CSS.enable');
  const { root } = await cdp.send('DOM.getDocument');
  const { nodeId } = await cdp.send('DOM.querySelector', { nodeId: root.nodeId, selector });
  const { fonts } = await cdp.send('CSS.getPlatformFontsForNode', { nodeId });
  return fonts.map((f) => f.familyName);
}

// Characters per rendered line of one block, last line left out.
function getLineLengths(page, selector) {
  return page.evaluate((sel) => {
    const el = document.querySelector(sel);
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const top = el.getBoundingClientRect().top;
    const counts = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      for (let i = 0; i < node.length; i++) {
        const range = document.createRange();
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        const rect = range.getClientRects()[0];
        if (!rect) continue;
        const line = Math.floor((rect.top + rect.height / 2 - top) / lineHeight);
        counts[line] = (counts[line] || 0) + 1;
      }
    }
    return counts.slice(0, -1);
  }, selector);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  fs.mkdirSync('test-results/og', { recursive: true });
  const browser = await chromium.launch();
  for (const scheme of ['light', 'dark']) {
    for (const [width, height] of [[1280, 800], [375, 812]]) {
      for (const [lang, path] of Object.entries(PAGES)) {
        const label = `${lang}-${width}-${scheme}`;
        const { context, page } = await open(browser, path, { width, height, scheme });
        const { violations } = await new AxeBuilder({ page }).analyze();
        violations.forEach((v) => problems.push(`${label}: axe ${v.id} on ${v.nodes.length} nodes`));
        await checkOverflow(page, label);
        if (width === 1280 && scheme === 'light') {
          const families = [...(await getFonts(context, page, 'h1')), ...(await getFonts(context, page, '.intro p + p'))];
          notes.push(`${lang} fonts in h1 and intro: ${[...new Set(families)].join(', ')}`);
          if (new Set(families).size !== 1) problems.push(`${label}: h1 and intro use more than one font`);
          for (const sel of ['.intro p + p', 'section:nth-of-type(3) p']) {
            const lengths = await getLineLengths(page, sel);
            notes.push(`${lang} ${sel}: ${Math.min(...lengths)} to ${Math.max(...lengths)} characters per line`);
          }
        }
        await frames(page, label);
        await context.close();
      }
    }
  }

  for (const [lang, path] of Object.entries(PAGES)) {
    const { context, page } = await open(browser, path, { width: 320, height: 640 });
    await checkOverflow(page, `${lang}-320`);
    if (lang === 'en') await page.screenshot({ path: `${OUT}/en-320-light-0.png` });
    await context.close();
  }

  // Browser default font size at 200% (32 px), as a reader would set it.
  for (const [width, height] of [[1280, 800], [375, 812], [320, 640]]) {
    for (const [lang, path] of Object.entries(PAGES)) {
      const label = `${lang}-${width}-light-font200`;
      const { context, page } = await open(browser, path, { width, height });
      const heading = page.locator('h1');
      const getHeadingSize = () => heading.evaluate(el => parseFloat(getComputedStyle(el).fontSize));
      const normal = await getHeadingSize();
      const cdp = await context.newCDPSession(page);
      await cdp.send('Page.setFontSizes', { fontSizes: { standard: 32, fixed: 26 } });
      await page.reload();
      const enlarged = await getHeadingSize();
      if (Math.abs(enlarged - 2 * normal) > 0.1) problems.push(`${label}: heading grew from ${normal} to ${enlarged}px, expected double`);
      const surnameLines = await heading.evaluate(el => {
        const text = el.firstChild;
        const range = document.createRange();
        range.setStart(text, text.textContent.lastIndexOf(' ') + 1);
        range.setEnd(text, text.length);
        return range.getClientRects().length;
      });
      if (surnameLines !== 1) problems.push(`${label}: surname split across ${surnameLines} lines`);
      await checkOverflow(page, label);
      if (lang === 'en') await page.screenshot({ path: `${OUT}/${label}-0.png` });
      await context.close();
    }
  }

  // Keyboard path: Tab must visit every link in DOM order; one focus frame per scheme on an inline link.
  for (const scheme of ['light', 'dark']) {
    for (const [lang, path] of Object.entries(PAGES)) {
      const { context, page } = await open(browser, path, { width: 1280, height: 800, scheme });
      const links = await page.locator('a').count();
      const order = [];
      for (let i = 0; i < links; i++) {
        await page.keyboard.press('Tab');
        order.push(await page.evaluate(() => [...document.querySelectorAll('a')].indexOf(document.activeElement)));
        if (i === 1 && lang === 'en') await page.screenshot({ path: `${OUT}/en-1280-${scheme}-focus.png` });
      }
      const expected = [...Array(links).keys()];
      if (order.join() !== expected.join()) problems.push(`${lang}-${scheme}: tab order ${order.join(',')} differs from DOM order ${expected.join(',')}`);
      else if (scheme === 'light') notes.push(`${lang} tab order equals DOM order of ${links} links`);
      await context.close();
    }
  }

  // The card sources are not served: they load from the file system, with docs/style.css.
  for (const [source, card] of [['og.html', 'og.png'], ['og-pl.html', 'og-pl.png']]) {
    const context = await browser.newContext({ viewport: { width: 1200, height: 630 }, colorScheme: 'light' });
    const page = await context.newPage();
    await page.goto(`file://${process.cwd()}/checks/${source}`);
    await page.screenshot({ path: `test-results/og/${card}` });
    await context.close();
  }

  await browser.close();
  console.log([...notes, ...problems].join('\n'));
  console.log(problems.length ? `fail: ${problems.length} problems` : 'ok: axe, console, overflow, fonts and tab order clean');
  process.exit(problems.length ? 1 : 0);
})();
