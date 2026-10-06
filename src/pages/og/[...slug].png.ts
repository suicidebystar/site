import type { APIRoute, GetStaticPaths } from "astro";
import { getProgramName, getSortedPosts, type Post } from "../../lib/posts";
import {
  BORDER_RADIUS,
  COLOR_CLEAR,
  COLOR_DARK,
  COLOR_PRIMARY,
  HEIGHT,
  TEXT_SHADOW,
  WIDTH,
  escape,
  renderOgImage,
  toDataUri,
} from "../../lib/og";

export const getStaticPaths = (async () => {
  const posts = await getSortedPosts();
  return posts.map((post) => ({
    params: { slug: post.data.path.replace(/^\/|\/$/g, "") },
    props: { post },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ post: Post }> = async ({ props }) => {
  const { post } = props;

  // Astro attaches the source path to imported images as a hidden property.
  const featuredPath = (post.data.featuredImage as { fsPath?: string }).fsPath;
  if (!featuredPath) {
    throw new Error(`No file path for the featured image of ${post.id}`);
  }
  const featuredUri = await toDataUri(featuredPath, WIDTH, HEIGHT);

  // The featured image fills the card, left uncovered except for the badge. A
  // dark gradient at the bottom, plus a text shadow, keeps the title readable
  // on any photo.
  return renderOgImage(`
    <div style="width: 100%; height: 100%; display: flex; position: relative; font-family: 'Barlow Condensed'; color: ${COLOR_CLEAR}; background-color: ${COLOR_DARK};">
      <img src="${featuredUri}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" />
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; background-image: linear-gradient(to bottom, rgba(26, 26, 26, 0) 40%, rgba(26, 26, 26, 0.92) 82%, ${COLOR_DARK} 100%);"></div>
      <div style="position: absolute; top: 28px; right: 40px; display: flex; padding: 10px 20px; font-size: 30px; text-transform: uppercase; background-color: rgba(26, 26, 26, 0.9); border-radius: ${BORDER_RADIUS};">${escape(getProgramName(post))}</div>
      <div style="position: absolute; left: 0; right: 0; bottom: 0; display: flex; justify-content: center; padding: 0 60px 52px; font-size: 80px; line-height: 1; text-align: center; text-wrap: balance; text-shadow: ${TEXT_SHADOW};">${escape(post.data.title)}</div>
      <div style="position: absolute; left: 0; right: 0; bottom: 0; height: 10px; display: flex; background-color: ${COLOR_PRIMARY};"></div>
    </div>
  `);
};
