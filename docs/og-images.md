# Open Graph images: gotchas

Social cards are rendered at build time by `src/pages/og/` (one per post plus the site-wide `index.png`) with shared helpers in `src/lib/og.ts`. The pipeline is satori (HTML → SVG) then resvg (SVG → PNG), with sharp resizing the source images.

## Satori and satori-html

- Satori supports a subset of CSS. Every element with more than one child needs `display: flex`, including a text node next to a `<span>`.
- Satori can't read CSS custom properties. The colors in `src/lib/og.ts` are copies of the tokens in `src/styles/global.scss`; when a token changes, update both.
- The tagged-template form of `html` escapes interpolations as text, so markup is built as a plain string and passed to `renderOgImage`. Post fields land in raw HTML: wrap them in `escape()`.
- satori-html passes `width`/`height` attributes as strings, which satori rejects with an `Invalid value` warning. Put image sizes in `style`.
- Fonts must be TTF, OTF or WOFF; satori can't load the woff2 files Google Fonts serves. Only `src/fonts/BarlowCondensed-Bold.ttf` (weight 700) is loaded, so every text element renders in it.

## Content

- The featured image's file path is read from `fsPath`, a hidden property Astro puts on imported images. It is undocumented; if an Astro upgrade drops it, the route throws `No file path for the featured image`.
- The OG slug comes from the `path` frontmatter field, with the same transform as `src/pages/[...slug].astro`. Change both together, or `og:image` points at a missing file.
- Write a plain `&` in frontmatter titles. A literal `&amp;` gets escaped again and shows as `&amp;amp;` on the page and the card.
- The post card has no logo, so the photo stays uncovered. Readability over any photo comes from the bottom gradient plus `TEXT_SHADOW`; keep both when restyling.

## URLs and previews

- `og:image` is absolute, built from Astro's `site`. `astro.config.mjs` sets `site` to Netlify's `DEPLOY_PRIME_URL` on non-production builds, so deploy previews link their own images. A hardcoded production URL makes previews point at images that don't exist yet.
- `BaseLayout` falls back to `/og/index.png` for pages that pass no `image`.
- To test a card, paste a deploy preview URL into Bluesky. Bluesky caches cards per URL; add a query string like `?v=2` to force a fresh fetch.

## Cost

- Rendering takes about 2 s per image, so the build grows by about 2 minutes for every 60 posts.
- PNGs with full-bleed photos weigh 0.5 to 1.3 MB. Bluesky rejects thumbnails over about 1 MB; if a card shows without an image, encode the output as JPEG.
