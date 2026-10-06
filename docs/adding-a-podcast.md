# How to add a podcast

Every episode is one `.mdx` file in `src/posts/` plus a header image. Nothing
else needs registering: the home page, the category pages, the RSS feed and the
sitemap are all built from the posts.

There are two kinds of post:

- [Regular show](#regular-show): frontmatter and a few paragraphs of text.
- [Best albums of the year](#best-albums-of-the-year): the same, plus the
  ranking written with the `<AlbumList>` and `<AlbumItem>` components.

## Regular show

1. Publish the episode on iVoox first. The post needs its id and its mp3 URL.
2. Add the header image to `src/images/posts/`, named `podcast-NN.png` after
   the programme number. Recent ones are 960×550.
3. Create `src/posts/YYYYMMDD-slug.mdx`:

   ```mdx
   ---
   title: Neurosis, Converge, Sunn O))), Erik Urano, Mylingar
   path: /neurosis-converge-sunno-erik-urano-mylingar
   date: 2026-05-07
   category: regular-show
   ivoox: 173319144
   featuredImage: ../images/posts/podcast-60.jpeg
   programNumber: 60
   audio: https://www.ivoox.com/suicidebystar-60-neurosis-converge-sunn-o-erik-urano_mf_173319144_feed_1.mp3
   ---

   Volvemos a nuestro formato habitual, hablando de algunas de las novedades
   más notables de los últimos meses...
   ```

4. Run `npm run dev` and check the home page, where the newest post is the big
   featured card, and the post page itself.
5. Run `npm run build`. It fails if a required field is missing or has the
   wrong type.
6. Commit and push to `main`. Netlify deploys it.

### Frontmatter

The fields are validated by the schema in `src/content.config.ts`.

| Field           | Required | What it is                                                                                                                                                     |
| --------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`         | yes      | Shown on the header image, in the page title and in the feed.                                                                                                  |
| `path`          | yes      | URL of the post. Starts with `/`, no trailing slash. The file name is not used for the URL.                                                                    |
| `date`          | yes      | `YYYY-MM-DD`. Posts are sorted by it, newest first.                                                                                                            |
| `category`      | yes      | `regular-show`, `monograph` or `session`. Sets the label (Programa, Monográfico, Sesión) and the `/category/<category>/` list the post appears in.             |
| `programNumber` | yes      | Shown next to the label: `Programa #60`. Each category has its own count, so take the latest post of the same category and add one.                            |
| `ivoox`         | yes      | Numeric id of the episode on iVoox. It is the number in the episode URL, the same one that appears in the mp3 URL. The embedded iVoox player is built from it. |
| `featuredImage` | yes      | Header image, as a path relative to the post (`../images/posts/...`).                                                                                          |
| `audio`         | no       | URL of the mp3. Adds a native audio player on the header image of the post page, and of the home page while the post is the newest one.                        |
| `spotify`       | no       | Embed URL of a playlist (`https://open.spotify.com/embed/playlist/<id>`), not the regular share link. The playlist is shown at the bottom of the post.         |

### Things to know

- Don't change `path` once the post is published. It is the link of the episode
  in the RSS feed, so feed readers would show it as a new episode.
- Start the body with plain text. Its first 140 characters become the meta
  description of the page and the description in the feed.
- Add `audio` whenever there is an mp3. The iVoox player sets third-party
  cookies, so it only appears after the visitor accepts them; the native player
  is always there.
- Check optional field names twice. The schema accepts unknown fields, so a
  typo such as `spotfy` does not fail the build: the playlist just doesn't
  show.
- `src/posts/` is excluded from prettier. Posts are formatted by hand.

## Best albums of the year

It is a regular show: `category: regular-show`, the next `programNumber`, and
everything above applies. The difference is the body, where the ranking is
written with `<AlbumList>` and `<AlbumItem>`. Both are available in every post
without importing them.

1. Add one cover per album to `src/images/posts/aotys-YYYY/`, named after the
   artist (`yellow-eyes.jpg`). Any size and format works, since covers are
   cropped to a square and shown 200px wide on desktop, but square files avoid
   the cropping.
2. Write an intro paragraph, then the list:

   ```mdx
   Podremos sacar menos podcasts de los prometidos, pero nunca faltamos a
   nuestra cita anual para comentar los discos que más nos han gustado...

   <AlbumList title="Mejores discos de 2025">
     <AlbumItem
       title="Confusion Gate"
       artist="Yellow Eyes"
       tags={["black metal"]}
     >

   ![Yellow Eyes - Confusion Gate](../images/posts/aotys-2025/yellow-eyes.jpg)

     </AlbumItem>

     <AlbumItem
       title="Innern"
       artist="Der Weg einer Freiheit"
       tags={["black metal", "post-metal"]}
     >

   ![Der Weg einer Freiheit - Innern](../images/posts/aotys-2025/der-weg-einer-freiheit.jpg)

     </AlbumItem>

   </AlbumList>
   ```

### How the list works

- The order of the items is the ranking. Positions are numbered automatically
  starting from 1, so the first `<AlbumItem>` is the album of the year. Don't
  write the numbers.
- `title` is the album and `artist` the band. `tags` is an optional list of
  genres, rendered as hashtags in lowercase with spaces turned into hyphens:
  `"black metal"` becomes `#black-metal`.
- The cover is a markdown image between the opening and closing tags, with
  `Artist - Album` as alt text. Keep the blank line before and after it, as the
  existing posts do.
- A post can have several lists, each with its own `title` and its own
  numbering. The 2022 post has one for "Mejores discos de fuera" and one for
  "Mejores discos de aquí".
- Regular markdown can go before and after a list.

`src/posts/20260121-mejores-discos-2025.mdx` is the latest example to copy. The
components live in `src/components/AlbumList/`.
