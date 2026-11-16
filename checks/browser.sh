#!/bin/sh
# Browser checks on a Linux machine, from the repository root: sh checks/browser.sh
# The caller puts html-validate on PATH and Playwright and @axe-core/playwright on NODE_PATH; nothing is installed.
# Results land in test-results/ (frames/ and og/).
html-validate docs/index.html docs/pl/index.html docs/404.html
validate=$?
python3 -m http.server 4480 --bind 127.0.0.1 --directory docs >/dev/null 2>&1 &
server=$!
# The server needs a moment to bind the port before the first page load.
for _ in $(seq 50); do
  python3 -c 'import urllib.request; urllib.request.urlopen("http://127.0.0.1:4480/")' 2>/dev/null && break
  sleep 0.1
done
node checks/browser.cjs
browser=$?
kill "$server"
echo "html-validate exit $validate, browser checks exit $browser"
[ "$validate" -eq 0 ] && [ "$browser" -eq 0 ]
