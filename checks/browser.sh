#!/bin/sh
# Browser checks on a Linux machine, from the repository root: sh checks/browser.sh
# The caller puts html-validate on PATH and Playwright and @axe-core/playwright on NODE_PATH; nothing is installed.
# Results land in test-results/ (frames/ and og/).
html-validate docs/index.html docs/pl/index.html docs/404.html
validate=$?
python3 - <<'PY'
import subprocess
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from threading import Thread

handler = partial(SimpleHTTPRequestHandler, directory="docs")
with ThreadingHTTPServer(("127.0.0.1", 0), handler) as server:
    Thread(target=server.serve_forever, daemon=True).start()
    try:
        origin = f"http://127.0.0.1:{server.server_port}"
        raise SystemExit(subprocess.call(["node", "checks/browser.cjs", origin]))
    finally:
        server.shutdown()
PY
browser=$?
echo "html-validate exit $validate, browser checks exit $browser"
[ "$validate" -eq 0 ] && [ "$browser" -eq 0 ]
