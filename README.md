[![Netlify Status](https://api.netlify.com/api/v1/badges/225bc15d-f4c4-410f-8c09-6e755e5935a4/deploy-status)](https://app.netlify.com/sites/papaya-hamster-86017c/deploys)

# 💀 SuicideByStar website

Built with [Astro](https://astro.build).

## How to develop

Requires Node 24 (see `.node-version`).

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the environment:

   ```sh
   npm run dev
   ```

3. Go to [http://localhost:4321/](http://localhost:4321/) to see the site.

## How to add a post

1. Add an `.mdx` file to `src/posts/`, named `YYYYMMDD-slug.mdx`. Copy the
   frontmatter from the latest post; the fields are validated in
   `src/content.config.ts` and the build fails if one is missing or wrong.
2. Add its images to `src/images/posts/` and reference them with a relative
   path (`../images/posts/...`).
3. `<AlbumList>` and `<AlbumItem>` can be used in any post without importing
   them.

## Where things are

| What                         | Where                                              |
| ---------------------------- | -------------------------------------------------- |
| Posts and their images       | `src/posts/`, `src/images/posts/`                  |
| Post fields (frontmatter)    | `src/content.config.ts`                            |
| Post page                    | `src/pages/[...slug].astro`                        |
| Category pages (paginated)   | `src/pages/category/[category]/[...page].astro`    |
| Queries and helpers          | `src/lib/posts.ts`                                 |
| `<head>`, SEO and page shell | `src/layouts/BaseLayout.astro`                     |
| RSS feed (served at `/feed`) | `src/pages/feed.ts`                                |
| Favicon, icons and manifest  | `public/`                                          |
| Mobile menu                  | `src/components/Header/Header.astro`               |
| Cookie banner / Ivoox gating | `src/components/CookieConsent/CookieConsent.astro` |

## How to check a build against production

```sh
npm run build
npm run compare
```

The script checks that every URL in the production sitemap exists in `dist/`,
and compares the title, meta description, `og:image`, and number of cards,
albums and images on each page. Useful before merging anything that touches
routing or templates.

## How to deploy

1. Add new commits to `main` branch.

2. Check deploying process in [Netlify](https://app.netlify.com/sites/papaya-hamster-86017c/overview).
   Build settings live in `netlify.toml`.

3. After Netlify finishes, changes will be available in [https://suicidebystar.sbs](https://suicidebystar.sbs)
