# Site source

Everything that makes dilbdrbk.com.np lives in this folder. GitHub Pages does not publish it, because the folder name starts with an underscore.

| File | What it holds |
| --- | --- |
| `site.json` | Name, role, contact details, profiles, skills, education. Change your details here and they update on every page and in the schema. |
| `faq.json` | The FAQ on the home page and its FAQPage schema. |
| `pages/*.html` | The body of each page. `{{email}}`, `{{faq}}` and similar tokens are filled in by the build. |
| `posts/*.md` | Blog posts in Markdown, converted by `mdpost.py`. See "Blog" below. |
| `posts/*.html` | Older-style posts in plain HTML. Copy `_TEMPLATE.html`, fill in the header, and write the post. |
| `blocks/*.html` | Charts and tools a post can insert, such as `tool-schema.html` and `chart-markup.html`. |
| `mdpost.py` | Turns a Markdown post into HTML. `python _src/mdpost.py clean post.md` writes the copy used for linting and the .docx export. |
| `build.py` | Builds every page, `404.html`, `sitemap.xml`, `robots.txt` and `llms.txt`. Each page's title and meta description are set in its `PAGES` list. |
| `make_images.py` | Rebuilds the portrait, the social share card and the favicons from `photo-source.png`. `--blog` draws only the blog feature images into `assets/img/blog/`. |

## Files outside the build

`googled975238710041a7d.html` in the repo root verifies the site in Google Search Console. The build never touches it. Don't delete it, or Search Console loses verification.

## Rebuild after a change

```bash
python _src/build.py
```

Run it from the repo root, then commit the changed files.

## Blog

The blog page stays `noindex` and out of the sitemap until the first post exists. After you add a post and rebuild, the blog page becomes indexable, the post gets `BlogPosting` schema, and both are added to `sitemap.xml` and `llms.txt` automatically.

A Markdown post (`posts/<slug>.md`, published at `/blog/<slug>/`) starts with a JSON header in an HTML comment: `date`, and optionally `updated`, `image` (the file stem in `assets/img/blog/`), `imageAlt`, `section`, `tags`, `keywords`, `about`, `mentions` and `citations` (things with Wikidata `sameAs` links for the schema). The `# H1` is the title and the `Meta Description:` line is the description.

Lines in double brackets insert blocks:

| Line | Inserts |
| --- | --- |
| `[[answer]]` | The next paragraph, shown as the short answer under the title |
| `[[toc]]` | The table of contents, built from the `##` headings (works without JavaScript) |
| `[[figure:stem\|1200x675\|alt text\|caption]]` | An image from `assets/img/blog/` |
| `[[chart:name]]`, `[[tool:name]]` | `blocks/chart-name.html`, `blocks/tool-name.html` |
| `[[cta:inline]]`, `[[cta:services]]` | A call-to-action box, or the Hire Me and Expertise buttons |

Every post gets the byline, reading time, cover image, author box and further-reading links from `build.py`. Sources are named in the text without links (for example, "According to Google Search Central, ..."), with no separate Sources section. List their URLs in the header as `citations`; they go into the schema only.
