#!/usr/bin/env python3
"""Save the Resume page as assets/dil-bahadur-bk-resume.pdf, using Microsoft Edge.

    python _src/build.py
    python _src/make_resume_pdf.py
    python _src/build.py          # again, so the Download links get the new file's hash

The page's print styles (end of site.css) lay it out as an A4 resume. A
short-lived local web server serves the built site while Edge prints it.
Re-run whenever _src/resume.json or the resume styles change.
"""
import http.server
import pathlib
import subprocess
import sys
import tempfile
import threading
import time

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "dil-bahadur-bk-resume.pdf"
EDGE = [p for p in (
    pathlib.Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"),
    pathlib.Path(r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"),
) if p.exists()]


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, *args):
        pass


def main() -> None:
    if not EDGE:
        sys.exit("Microsoft Edge was not found.")
    if not (ROOT / "resume" / "index.html").exists():
        sys.exit("Build the site first: python _src/build.py")
    OUT.unlink(missing_ok=True)
    with http.server.ThreadingHTTPServer(("127.0.0.1", 0), Handler) as httpd:
        port = httpd.server_address[1]
        threading.Thread(target=httpd.serve_forever, daemon=True).start()
        with tempfile.TemporaryDirectory(ignore_cleanup_errors=True) as profile:
            subprocess.run([
                str(EDGE[0]), "--headless=new", "--disable-gpu", "--hide-scrollbars",
                "--no-pdf-header-footer", "--print-to-pdf-no-header",
                f"--user-data-dir={profile}", "--virtual-time-budget=10000",
                f"--print-to-pdf={OUT}", f"http://127.0.0.1:{port}/resume/",
            ], check=True, timeout=180)
            # msedge.exe can hand the job to a child process and return early, so
            # keep the server up until the PDF exists and has stopped growing.
            size, deadline = -1, time.time() + 120
            while time.time() < deadline:
                now = OUT.stat().st_size if OUT.exists() else -1
                if now > 0 and now == size:
                    break
                size = now
                time.sleep(1.5)
        httpd.shutdown()
    if not OUT.exists():
        sys.exit("Edge did not write the PDF.")
    print(f"wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
