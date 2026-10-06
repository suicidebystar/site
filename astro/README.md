# 💀 SuicideByStar website (Astro)

Astro version of the site, built alongside the Gatsby one (repo root) so both
can be compared before switching over.

While both versions coexist, **posts and images are read from the Gatsby
folders** (`../src/posts` and `../src/images`), so a new post shows up in both
sites.

## How to develop

Requires Node 22 (see `.node-version`).

```sh
cd astro
npm install
npm run dev        # http://localhost:4321
```

## How to compare with the Gatsby site

```sh
npm run build
npm run compare                          # against https://suicidebystar.sbs
npm run compare -- http://localhost:9000 # against a local `gatsby serve`
```

The script checks that every URL in the reference sitemap exists in `dist/`,
and compares the title, meta description, `og:image`, and number of cards,
albums and images on each page.

## Where things are

| Gatsby                            | Astro                                              |
| --------------------------------- | -------------------------------------------------- |
| `gatsby-node.js` (post pages)     | `src/pages/[...slug].astro`                        |
| `gatsby-node.js` (category pages) | `src/pages/category/[category]/[...page].astro`    |
| GraphQL queries                   | `src/lib/posts.ts` + `src/content.config.ts`       |
| `MDXProvider` shortcodes          | `components` prop in `[...slug].astro`             |
| `react-helmet` (`Head`)           | `src/layouts/BaseLayout.astro`                     |
| `gatsby-plugin-image`             | `astro:assets` (`<Image>` / `<Picture>`)           |
| `gatsby-plugin-feed`              | `src/pages/feed.ts` (served at `/feed`)            |
| `gatsby-plugin-sitemap`           | `@astrojs/sitemap`                                 |
| `gatsby-plugin-manifest`          | `public/manifest.webmanifest` + `public/icons`     |
| `react-burger-menu`               | `src/components/Header/Header.astro`               |
| `react-cookie-consent`            | `src/components/CookieConsent/CookieConsent.astro` |

## How to deploy

`netlify.toml` holds the build settings. To preview it in Netlify, create a new
site from this repo with **Base directory** `astro` and the migration branch.

## Switching over

Once the Astro site is validated:

1. Move `../src/posts` and `../src/images` into `src/content/`, update the
   `glob` base in `src/content.config.ts` and the `@images` alias in
   `astro.config.mjs` / `tsconfig.json`, and drop `vite.server.fs.allow`.
2. Move everything in `astro/` to the repo root and delete the Gatsby files.
3. Remove the base directory in the production Netlify site settings.
