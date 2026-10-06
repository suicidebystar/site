import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;
export type Category = Post["data"]["category"];

export async function getSortedPosts(
  filter?: (post: Post) => boolean,
): Promise<Post[]> {
  const posts = await getCollection("posts", filter);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function getPostUrl(post: Post): string {
  return `${post.data.path.replace(/\/$/, "")}/`;
}

export function getProgramName(post: Post): string {
  const programName = getProgramType(post.data.category);
  const programNumber = String(post.data.programNumber).padStart(2, "0");
  return `${programName} #${programNumber}`;
}

function getProgramType(category: Category): string {
  switch (category) {
    case "regular-show":
      return "Programa";
    case "session":
      return "Sesión";
    case "monograph":
      return "Monográfico";
    default:
      return "???";
  }
}

export function getPluralizedProgramType(category: Category): string {
  switch (category) {
    case "regular-show":
      return "Programas";
    case "session":
      return "Sesiones";
    case "monograph":
      return "Monográficos";
    default:
      return "???";
  }
}

// Plain-text summary of an MDX body, mimicking Gatsby's `excerpt` field.
export function getExcerpt(post: Post, length = 140): string {
  const text = (post.body ?? "")
    .replace(/^import .*$/gm, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#+\s*/gm, "")
    .replace(/[*_`~]/g, "")
    .replace(/^\s*[-+>]\s+/gm, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return prune(text, length);
}

// Port of underscore.string's `prune`, which Gatsby uses for excerpts:
// truncates to `length` chars without cutting words and appends "…".
function prune(text: string, length: number, suffix = "…"): string {
  if (text.length <= length) return text;

  const isLetter = (char: string) => char.toUpperCase() !== char.toLowerCase();
  let template = text
    .slice(0, length + 1)
    .replace(/.(?=\W*\w*$)/g, (char) => (isLetter(char) ? "A" : " "));

  if (/\w\w/.test(template.slice(-2))) {
    template = template.replace(/\s*\S+$/, "");
  } else {
    template = template.slice(0, -1).trimEnd();
  }

  return (template + suffix).length > text.length
    ? text
    : text.slice(0, template.length) + suffix;
}
