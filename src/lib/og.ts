// Shared pieces for the Open Graph images rendered under src/pages/og/.
import fs from "node:fs";
import path from "node:path";
import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";

export const WIDTH = 1200;
export const HEIGHT = 630;

// Mirrors the tokens in src/styles/global.scss; satori can't read custom properties.
export const COLOR_PRIMARY = "#00b473";
export const COLOR_DARK = "#1a1a1a";
export const COLOR_CLEAR = "#ffffff";
export const BORDER_RADIUS = "10px";

export const TEXT_SHADOW = "0 2px 8px rgba(0, 0, 0, 0.8)";

const fromRoot = (file: string) => path.join(process.cwd(), file);

export async function toDataUri(
  input: string,
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

export const getAssetUri = (file: string, width: number, height: number) =>
  toDataUri(fromRoot(file), width, height, "png");

// satori-html escapes interpolations in its tagged form, so markup is built as
// a plain string and post fields are escaped by hand.
export const escape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// The site logo: skull plus "SuicideByStar" with the accent on "By".
export const logo = (logoUri: string, fontSize: number) => {
  const size = Math.round(fontSize * 1.05);
  return `
    <div style="display: flex; align-items: center; font-size: ${fontSize}px; text-transform: uppercase; text-shadow: ${TEXT_SHADOW};">
      <img src="${logoUri}" style="width: ${size}px; height: ${Math.round(size * 0.9)}px; margin-right: ${Math.round(fontSize / 5)}px;" />
      <div style="display: flex;">Suicide<span style="color: ${COLOR_PRIMARY};">By</span>Star</div>
    </div>
  `;
};

// Read once per build, shared by every image.
let fontData: Buffer | undefined;

export async function renderOgImage(markup: string) {
  fontData ??= fs.readFileSync(fromRoot("src/fonts/BarlowCondensed-Bold.ttf"));

  const svg = await satori(html(markup), {
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
}
