import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getExcerpt, getSortedPosts } from "../lib/posts";

const TITLE = "SuicideBystar RSS Feed";

// Served at /feed (no extension) to keep the URL of the Gatsby site.
export async function GET(context: APIContext) {
  const posts = await getSortedPosts();

  return rss({
    title: TITLE,
    description: TITLE,
    site: context.site!,
    // Item links/guids must match the old feed so readers don't see
    // every episode as new.
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: post.data.path,
      description: getExcerpt(post),
    })),
  });
}
