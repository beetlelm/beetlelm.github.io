#!/usr/bin/env python3
"""Threaded, HTTP/1.1 keep-alive static file server.

python3 -m http.server on this system's Python 3.6 is single-threaded and
HTTP/1.0-only, which drops/serializes concurrent requests when proxied
(e.g. through Open OnDemand) -- causing intermittent "couldn't load" errors
in the data explorer as it fetches data.json + images concurrently. This
wraps the same SimpleHTTPRequestHandler with ThreadingMixIn and HTTP/1.1.
"""
import sys
import socketserver
from http.server import HTTPServer, SimpleHTTPRequestHandler

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8931


class ThreadingHTTPServer(socketserver.ThreadingMixIn, HTTPServer):
    daemon_threads = True
    allow_reuse_address = True
    request_queue_size = 128


class Handler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def end_headers(self):
        # Without an explicit Cache-Control, browsers apply heuristic caching
        # off Last-Modified and can silently keep serving a stale file (e.g.
        # an old logo.png) for hours after it's been overwritten on disk.
        # This is a local dev server, so just disable caching outright.
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()


if __name__ == "__main__":
    server = ThreadingHTTPServer(("", port), Handler)
    print(f"Serving on http://localhost:{port} (threaded, HTTP/1.1)")
    server.serve_forever()
