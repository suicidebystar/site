// @ts-check
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const IMAGES_DIR = fileURLToPath(new URL("./src/images", import.meta.url));

export default defineConfig({
  site: "https://suicidebystar.sbs",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  image: {
    // Gives images in posts a srcset, like gatsby-remark-images did.
    layout: "constrained",
    // Mirrors the gatsby-plugin-sharp defaults.
    breakpoints: [576, 768, 992, 1200],
  },
  integrations: [mdx(), sitemap()],
  vite: {
    build: {
      rolldownOptions: {
        onwarn(warning, defaultHandler) {
          // Emitted for every MDX file by Astro's own head-inject directive; harmless.
          if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
          defaultHandler(warning);
        },
      },
    },
    resolve: {
      alias: {
        "@images": IMAGES_DIR,
      },
    },
  },
});
