# Consulting landing - design decisions

## Nuxt -> Eleventy, migrated in place
The original `consult.bitcoinvn.io` was a legacy Nuxt 2 site rendering only a hero
intro + footer (most sections commented out). It was rebuilt as an Eleventy site
(scaffolded from the sibling `lightning-vibe-v2`) and then migrated into this same
repo, replacing all the Nuxt parts: `nuxt.config.js`, `.nuxt/`, the Vue
components/pages, `store/`, `tsconfig.json`, `tailwind.config.js`, the npm
`package.json`/lockfile, and the Nuxt Pages workflow. The existing git history and
GitHub Pages deployment are reused; only the build stack changed (now pnpm + Eleventy,
deployed via `.github/workflows/deploy.yml`).

## Content preserved verbatim
Same copy as the live page: the four self-sovereignty hero lines, the "Contact Us"
CTA, the private-client newsletter link, and the footer links (Exchange, News, Shop,
OTC, BTM, Newsletter with their existing UTM params). Copyright reads
"BitcoinVN 2014 - <current year>" via an Eleventy `year` filter.

## Tech choices
- Eleventy 3, Nunjucks layouts, Markdown body for the hero copy (`src/index.md`),
  data in `src/_data/site.json`.
- `pathPrefix: /consulting/` mirrors the legacy Nuxt `router.base: /consulting`.
  Local assets are referenced through the Eleventy `| url` filter (e.g.
  `{{ '/css/styles.css' | url }}` -> `/consulting/css/styles.css`) so they resolve
  correctly under the path prefix regardless of trailing slash.

## Contact form
Copied from the Lightning page: the shared Zammad widget
(`support.bitcoinvn.io/assets/form/form.js` + jQuery), themed dark via
`#zammad-contact-form` CSS overrides. Replaces the legacy Freshworks widget. Kept
to default fields (no custom allocation/qualified-investor fields - those were
Lightning-specific).

## Design language
Borrowed from the v2 family: deep dark background, gold accent (`#e8b730`, brightened
to `#ffe26e` to echo the legacy `star-yellow`), Inter font, animated bg-grid + glow,
floating particles, scroll-reveal. Heavy Lightning extras (hero network canvas, orb,
node tabs) were dropped per "nothing too fancy". Hero is centered to match the legacy
layout rather than Lightning's two-column hero.
