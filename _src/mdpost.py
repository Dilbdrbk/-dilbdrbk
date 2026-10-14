"""Markdown blog posts for build.py, with no external libraries.

A post file starts with a JSON header inside an HTML comment, then Markdown:

    <!--
    {"date": "2026-10-13", "image": "what-is-entity-seo"}
    -->
    # Post title                     (becomes the page title)

    Meta Title: ...                  (optional; ignored on the page)
    Meta Description: ...            (becomes the meta description)

    [[answer]]                       (shows the next paragraph as the short answer)
    A paragraph of text.

    [[toc]]                          (table of contents built from the h2 headings)
    ## A heading

Supported: ## and ### headings, paragraphs, **bold**, *italic*, `code`,
[links](url), "- " and "1. " list items (one per line) and pipe tables.
A line of the form [[name]] or [[name:arg|arg]] inserts a block; build.py
decides what each block becomes.

    python _src/mdpost.py clean post.md > clean.md

writes a copy without the JSON header and the block lines, for the content
linter and the .docx export.
"""
from __future__ import annotations

import html
import json
import re
import sys

HEADER = re.compile(r"\A\s*<!--(.*?)-->\s*", re.S)
BLOCK = re.compile(r"^\[\[([\w-]+)(?::(.*))?\]\]\s*$")
HEADING = re.compile(r"^(#{1,3})\s+(.*)$")
META_LINE = re.compile(r"^(Meta Title|Meta Description|URL Slug)\s*:\s*(.*)$")
BULLET = re.compile(r"^-\s+(.*)$")
NUMBERED = re.compile(r"^\d+\.\s+(.*)$")
LINK = re.compile(r"\[([^\]]+)\]\(([^)\s]+)\)")
BOLD = re.compile(r"\*\*(.+?)\*\*")
ITALIC = re.compile(r"(?<![*\w])\*(?!\s)(.+?)(?<!\s)\*(?![*\w])")
CODE = re.compile(r"`([^`]+)`")


def slug(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def split(raw: str) -> tuple[dict, str]:
    """Return (JSON header, Markdown body)."""
    m = HEADER.match(raw)
    if not m:
        raise ValueError("missing the JSON header comment")
    return json.loads(m.group(1)), raw[m.end():]


def clean(raw: str) -> str:
    """The post without its JSON header and block lines."""
    _, body = split(raw)
    lines = [ln for ln in body.splitlines() if not BLOCK.match(ln.strip())]
    return re.sub(r"\n{3,}", "\n\n", "\n".join(lines)).strip() + "\n"


def words(raw: str) -> int:
    """Reading length: the article without its Sources list."""
    text = LINK.sub(r"\1", clean(raw).split("\n## Sources", 1)[0])
    text = re.sub(r"[#*|`>-]", " ", text)
    return len(text.split())


def inline(text: str) -> str:
    """Escape, then apply code, links, bold and italic."""
    codes: list[str] = []

    def keep_code(m: re.Match) -> str:
        codes.append(f"<code>{html.escape(m.group(1), quote=False)}</code>")
        return f"\x00{len(codes) - 1}\x00"

    text = CODE.sub(keep_code, text)
    out, pos = [], 0
    for m in LINK.finditer(text):
        out.append(html.escape(text[pos:m.start()], quote=False))
        label, href = m.group(1), m.group(2)
        external = href.startswith("http")
        attrs = ' rel="noopener" target="_blank"' if external else ""
        out.append(f'<a href="{html.escape(href, quote=True)}"{attrs}>{html.escape(label, quote=False)}</a>')
        pos = m.end()
    out.append(html.escape(text[pos:], quote=False))
    text = "".join(out)
    text = BOLD.sub(r"<strong>\1</strong>", text)
    text = ITALIC.sub(r"<em>\1</em>", text)
    return re.sub("\x00(\\d+)\x00", lambda m: codes[int(m.group(1))], text)


def table(rows: list[str]) -> str:
    cells = [[c.strip() for c in r.strip().strip("|").split("|")] for r in rows]
    head, body = cells[0], [r for r in cells[1:] if not all(re.fullmatch(r":?-{3,}:?", c) for c in r)]
    th = "".join(f'<th scope="col">{inline(c)}</th>' for c in head)
    tr = "\n".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in body)
    return f'<div class="table-wrap"><table>\n<thead><tr>{th}</tr></thead>\n<tbody>\n{tr}\n</tbody>\n</table></div>'


def convert(raw: str, block) -> dict:
    """Render a post. `block(name, args)` returns the HTML for a [[name:args]] line.

    Returns title, description, html, headings [(level, text, id)] and words.
    """
    meta, body = split(raw)
    lines = body.splitlines()
    parts: list[str] = []
    headings: list[tuple[int, str, str]] = []
    title, description = meta.get("title", ""), meta.get("description", "")
    para: list[str] = []
    answer_next = False
    i = 0

    def flush() -> None:
        nonlocal answer_next
        if not para:
            return
        text = inline(" ".join(para))
        if answer_next:
            parts.append(f'<div class="post-answer"><p class="post-answer-label">Short answer</p><p>{text}</p></div>')
            answer_next = False
        else:
            parts.append(f"<p>{text}</p>")
        para.clear()

    while i < len(lines):
        s = lines[i].strip()
        if not s:
            flush()
            i += 1
            continue
        h = HEADING.match(s)
        if h:
            flush()
            level, text = len(h.group(1)), h.group(2).strip()
            if level == 1:
                title = title or text
            else:
                hid = slug(text)
                headings.append((level, text, hid))
                parts.append(f'<h{level} id="{hid}">{inline(text)}</h{level}>')
            i += 1
            continue
        m = META_LINE.match(s)
        if m:
            flush()
            if m.group(1) == "Meta Description" and not description:
                description = m.group(2).strip()
            i += 1
            continue
        b = BLOCK.match(s)
        if b:
            flush()
            name, args = b.group(1), (b.group(2) or "")
            if name == "answer":
                answer_next = True
            elif name == "toc":
                parts.append("\x00TOC\x00")
            else:
                parts.append(block(name, args.split("|") if args else []))
            i += 1
            continue
        if s.startswith("|"):
            flush()
            rows = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                rows.append(lines[i])
                i += 1
            parts.append(table(rows))
            continue
        if BULLET.match(s) or NUMBERED.match(s):
            flush()
            ordered = bool(NUMBERED.match(s))
            pattern = NUMBERED if ordered else BULLET
            items = []
            while i < len(lines) and pattern.match(lines[i].strip()):
                items.append(f"<li>{inline(pattern.match(lines[i].strip()).group(1))}</li>")
                i += 1
            tag = "ol" if ordered else "ul"
            parts.append(f"<{tag}>\n" + "\n".join(items) + f"\n</{tag}>")
            continue
        para.append(s)
        i += 1
    flush()

    toc_items = "\n".join(
        f'<li><a href="#{hid}">{inline(text)}</a></li>' for level, text, hid in headings if level == 2
    )
    toc = (
        '<details class="post-toc" open>\n<summary>In this guide</summary>\n'
        f'<nav aria-label="Table of contents"><ol>\n{toc_items}\n</ol></nav>\n</details>'
    )
    return dict(
        title=title,
        description=description,
        html="\n".join(parts).replace("\x00TOC\x00", toc),
        headings=headings,
        words=words(raw),
        meta=meta,
    )


if __name__ == "__main__":
    if len(sys.argv) == 3 and sys.argv[1] == "clean":
        sys.stdout.write(clean(open(sys.argv[2], encoding="utf-8").read()))
    else:
        sys.exit(__doc__)
