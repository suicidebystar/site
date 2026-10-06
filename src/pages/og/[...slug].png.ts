import fs from "node:fs";
import path from "node:path";
import type { APIRoute, GetStaticPaths } from "astro";
import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";
import { getProgramName, getSortedPosts, type Post } from "../../lib/posts";

const WIDTH = 1200;
const HEIGHT = 630;

// Mirrors the tokens in src/styles/global.scss; satori can't read custom properties.
const COLOR_PRIMARY = "#00b473";
const COLOR_DARK = "#1a1a1a";
const COLOR_CLEAR = "#ffffff";
const BORDER_RADIUS = "10px";

export const getStaticPaths = (async () => {
  const posts = await getSortedPosts();
  return posts.map((post) => ({
    params: { slug: post.data.path.replace(/^\/|\/$/g, "") },
    props: { post },
  }));
}) satisfies GetStaticPaths;

const fromRoot = (file: string) => path.join(process.cwd(), file);

// Shared across every post, so read them once per build.
let fontData: Buffer | undefined;
let backgroundUri: string | undefined;
let logoUri: string | undefined;

async function toDataUri(
  input: string | Buffer,
  width: number,
  height: number,
  format: "jpeg" | "png" = "jpeg",
) {
  const image = sharp(input).resize(width, height, { fit: "cover" });
  const buffer =
    format === "png"
      ? await image.png().toBuffer()
      : await image.jpeg({ quality: 80 }).toBuffer();
  return `data:image/${format};base64,${buffer.toString("base64")}`;
}

async function getSharedAssets() {
  fontData ??= fs.readFileSync(fromRoot("src/fonts/BarlowCondensed-Bold.ttf"));
  backgroundUri ??= await toDataUri(
    fromRoot("src/images/styles/bg2.png"),
    WIDTH,
    HEIGHT,
  );
  logoUri ??= await toDataUri(fromRoot("src/images/logo.png"), 67, 60, "png");
  return { fontData, backgroundUri, logoUri };
}

// satori-html escapes interpolations in its tagged form, so the markup is
// built as a plain string and post fields are escaped by hand.
const escape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const GET: APIRoute<{ post: Post }> = async ({ props }) => {
  const { post } = props;
  const { fontData, backgroundUri, logoUri } = await getSharedAssets();

  // Astro attaches the source path to imported images as a hidden property.
  const featuredPath = (post.data.featuredImage as { fsPath?: string }).fsPath;
  if (!featuredPath) {
    throw new Error(`No file path for the featured image of ${post.id}`);
  }
  const featuredUri = await toDataUri(featuredPath, 1120, 470);

  const markup = html(`
    <div style="width: 100%; height: 100%; display: flex; flex-direction: column; padding: 28px 40px 40px; background-image: url('${backgroundUri}'); background-size: 100% 100%; font-family: 'Barlow Condensed'; color: ${COLOR_CLEAR};">
      <div style="display: flex; align-items: center; height: 64px; margin-bottom: 20px; font-size: 64px; text-transform: uppercase;">
        <img src="${logoUri}" style="width: 67px; height: 60px; margin-right: 12px;" />
        <div style="display: flex;">Suicide<span style="color: ${COLOR_PRIMARY};">By</span>Star</div>
      </div>
      <div style="display: flex; flex-grow: 1; position: relative; border-radius: ${BORDER_RADIUS}; overflow: hidden; background-color: ${COLOR_DARK}; box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);">
        <img src="${featuredUri}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" />
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; background-image: linear-gradient(to bottom, transparent 30%, ${COLOR_DARK} 85%);"></div>
        <div style="position: absolute; top: 0; right: 0; display: flex; padding: 12px 20px; font-size: 30px; text-transform: uppercase; background-color: rgba(26, 26, 26, 0.9); border-radius: 0 ${BORDER_RADIUS} 0 ${BORDER_RADIUS};">${escape(getProgramName(post))}</div>
        <div style="position: absolute; left: 0; right: 0; bottom: 0; display: flex; justify-content: center; padding: 0 48px 28px; font-size: 76px; line-height: 1; text-align: center; text-wrap: balance;">${escape(post.data.title)}</div>
      </div>
    </div>
  `);

  const svg = await satori(markup, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      {
        name: "Barlow Condensed",
        data: fontData,
        weight: 700,
        style: "normal",
      },
    ],
  });

  const png = new Resvg(svg, { fitTo: { mode: "width", value: WIDTH } })
    .render()
    .asPng();

  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
