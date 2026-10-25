# Site source

Everything that makes dilbdrbk.com.np lives in this folder. GitHub Pages does not publish it, because the folder name starts with an underscore.

| File | What it holds |
| --- | --- |
| `site.json` | Name, role, contact details, profiles, skills, education. Change your details here and they update on every page and in the schema. |
| `faq.json` | The FAQ on the home page. |
| `resume.json` | The Resume page (/resume/): summary, roles with start and end months, expertise, knowledge areas, tools and industries. Durations and the career path are worked out by the build. |
| `make_resume_pdf.py` | Saves the Resume page as `assets/dil-bahadur-bk-resume.pdf` with Microsoft Edge. Run it after changing `resume.json`, then run `build.py` again. |
| `pages/*.html` | The body of each page. `{{email}}`, `{{faq}}` and similar tokens are filled in by the build. |
| `posts/*.md` | Blog posts in Markdown, converted by `mdpost.py`. See "Blog" below. |
| `posts/*.html` | Older-style posts in plain HTML. Copy `_TEMPLATE.html`, fill in the header, and write the post. |
| `blocks/*.html` | Charts and tools a post can insert, such as `tool-schema.html` and `chart-markup.html`. |
| `mdpost.py` | Turns a Markdown post into HTML. `python _src/mdpost.py clean post.md` writes the copy used for linting and the .docx export. |
| `build.py` | Builds every page, `404.html`, `sitemap.xml`, `robots.txt` and `llms.txt`. Each page's title and meta description are set in its `PAGES` list. |
| `make_images.py` | Rebuilds the portrait, the social share card and the favicons from `photo-source.png`. `--blog` draws only the blog feature images into `assets/img/blog/`. |

## Schema

Every page carries one `Person` block built from `site.json`. Its `alternateName` lists the name spellings (`alternateNames`) and then the role titles (`alternateTitles`); add a title only when a page on the site backs it. The home page adds a `ProfessionalService` block whose offers are the twelve service cards on the page, so the two always match. A blog post adds a `BlogPosting` and its `BreadcrumbList`. Every other page carries the `Person` only.

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

Every post gets the byline, reading time, share row, cover image, author box and further-reading links from `build.py`. A post whose header lists `takeaways` (3 to 5 short sentences) opens with a Key takeaways box. On wide screens an "On this page" sidebar lists every h2 and h3 and marks the section in view; phones keep the `[[toc]]` block. Sources are named in the text without links (for example, "According to Google Search Central, ..."), with no separate Sources section. List their URLs in the header as `citations`; they go into the schema only.

## Photo and icon credits

Photos in `assets/img/photos/` come from Pexels under the Pexels License (free to use, no attribution required):

| File | Photographer | Source |
| --- | --- | --- |
| google-search-trends-on-smartphone.webp | Click Jeth | https://www.pexels.com/photo/google-in-smartphone-18530501/ |
| plumber-installing-pipe-fittings.webp | Anıl Karakaya | https://www.pexels.com/photo/plumber-installs-pipe-fittings-6419128/ |
| parcels-with-shipping-labels.webp | Polina Tankilevitch | https://www.pexels.com/photo/stacks-of-boxes-ready-for-delivery-4440800/ |
| laptop-analytics-dashboard.webp | Lukas Blazek | https://www.pexels.com/photo/close-up-photo-of-gray-laptop-577210/ |

Tool icons on the home page: Simple Icons 16.30.0 (CC0) for Google Search Console, Google Analytics, Looker, Google Tag Manager, Google Colab, Semrush, WordPress and Shopify; Ahrefs' own pinned-tab SVG; AccuRanker's favicon (`assets/img/tools/accuranker.png`). The logos are trademarks of their owners and are shown only to name the tools.
