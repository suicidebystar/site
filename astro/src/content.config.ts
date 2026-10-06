import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Until the cutover, posts are read from the Gatsby site's folder so both
// versions always show the same content.
const posts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "../src/posts" }),
  schema: ({ image }) =>
    z.looseObject({
      title: z.string(),
      path: z.string().startsWith("/"),
      date: z.coerce.date(),
      category: z.enum(["regular-show", "monograph", "session"]),
      ivoox: z.coerce.string(),
      programNumber: z.number(),
      featuredImage: image(),
      audio: z.url().optional(),
      spotify: z.url().optional(),
    }),
});

export const collections = { posts };
