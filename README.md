# BitcoinVN Consulting

Eleventy rebuild of the BitcoinVN Consulting landing page (`bitcoinvn.io/consulting`).

Static, single-page landing: centered hero, contact form, footer. Content lives in
Markdown (`src/index.md`); structure in Nunjucks layouts/partials; design language
shared with the other BitcoinVN v2 pages (Lightning, OpenSource, BTM).

## Develop

```bash
pnpm install
pnpm dev      # serve with live reload
pnpm build    # build to _site/
```

## Structure

- `src/index.md` - hero copy (Markdown) + front matter selecting the home layout
- `src/_data/site.json` - meta, brand, newsletter URL, footer links
- `src/_includes/layouts/` - `base.njk` (shell) -> `home.njk` (hero + contact)
- `src/_includes/partials/` - `navbar`, `footer`, `contact` (Zammad form)
- `src/css/styles.css` - dark + gold design tokens
- `src/js/main.js` - scroll reveal, navbar effect, particles, smooth scroll

The contact form uses the shared Zammad widget (`support.bitcoinvn.io`), matching
the Lightning page.
