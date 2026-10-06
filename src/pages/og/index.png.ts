import type { APIRoute } from "astro";
import {
  COLOR_CLEAR,
  COLOR_PRIMARY,
  HEIGHT,
  TEXT_SHADOW,
  WIDTH,
  getAssetUri,
  logo,
  renderOgImage,
} from "../../lib/og";

// Site-wide card, used by every page that has no image of its own.
export const GET: APIRoute = async () => {
  const backgroundUri = await getAssetUri("src/images/styles/bg2.png", WIDTH, HEIGHT);
  const logoUri = await getAssetUri("src/images/logo.png", 134, 120);

  return renderOgImage(`
    <div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; font-family: 'Barlow Condensed'; color: ${COLOR_CLEAR}; background-image: url('${backgroundUri}'); background-size: 100% 100%;">
      ${logo(logoUri, 128)}
      <div style="display: flex; margin-top: 16px; font-size: 48px; text-transform: uppercase; color: ${COLOR_CLEAR}; text-shadow: ${TEXT_SHADOW};">El podcast con mejor criterio musical del país</div>
      <div style="position: absolute; left: 0; right: 0; bottom: 0; height: 10px; display: flex; background-color: ${COLOR_PRIMARY};"></div>
    </div>
  `);
};
