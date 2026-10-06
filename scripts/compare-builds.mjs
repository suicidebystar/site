// Compares the local build (dist/) against a reference deployment (production
// by default), page by page.
//
// Usage: npm run build && npm run compare [-- https://reference.url]

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const REFERENCE_URL = (process.argv[2] ?? "https://suicidebystar.sbs").replace(
  /\/$/,
  "",
);
const DIST_DIR = new URL("../dist", import.meta.url).pathname;

const getLocs = (xml) =>
  [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) => loc);

const normalizePath = (path) => `${path.replace(/\/$/, "")}/`;

const decode = (text) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

function extract(html) {
  const meta = (key) => {
    const match =
      html.match(
        new RegExp(
          `<meta[^>]*(?:name|property)="${key}"[^>]*content="([^"]*)"`,
        ),
      ) ??
      html.match(
        new RegExp(
          `<meta[^>]*content="([^"]*)"[^>]*(?:name|property)="${key}"`,
        ),
      );
    // An empty meta tag is the same as no meta tag.
    return match ? decode(match[1]) || undefined : undefined;
  };

  return {
    title: decode(html.match(/<title[^>]*>([^<]*)<\/title>/)?.[1] ?? ""),
    description: meta("description"),
    ogTitle: meta("og:title"),
    hasOgImage: Boolean(meta("og:image")),
    albumItems: (html.match(/class="album-item"/g) ?? []).length,
    postCards: (html.match(/class="post-card"/g) ?? []).length,
    contentImages: (
      html
        .match(/<article class="content">[\s\S]*<\/article>/)?.[0]
        .match(/<img\b/g) ?? []
    ).length,
  };
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

async function getReferencePaths() {
  const index = await fetchText(`${REFERENCE_URL}/sitemap-index.xml`);
  const sitemaps = await Promise.all(getLocs(index).map(fetchText));
  return sitemaps
    .flatMap(getLocs)
    .map((loc) => normalizePath(new URL(loc).pathname));
}

function getLocalPaths() {
  const index = readFileSync(join(DIST_DIR, "sitemap-index.xml"), "utf8");
  return getLocs(index)
    .flatMap((loc) =>
      getLocs(readFileSync(join(DIST_DIR, new URL(loc).pathname), "utf8")),
    )
    .map((loc) => normalizePath(new URL(loc).pathname));
}

const referencePaths = await getReferencePaths();
const localPaths = getLocalPaths();

const missing = referencePaths.filter((path) => !localPaths.includes(path));
const extra = localPaths.filter((path) => !referencePaths.includes(path));

console.log(`Reference: ${REFERENCE_URL} (${referencePaths.length} URLs)`);
console.log(`Local:     dist/ (${localPaths.length} URLs)\n`);
if (missing.length) console.log("❌ Missing in Astro:", missing);
if (extra.length) console.log("➕ Only in Astro:", extra);

let differences = 0;
for (const path of referencePaths.filter((p) => localPaths.includes(p))) {
  const file = join(DIST_DIR, path, "index.html");
  if (!existsSync(file)) {
    console.log(`❌ ${path}: no ${file}`);
    differences++;
    continue;
  }

  const reference = extract(await fetchText(`${REFERENCE_URL}${path}`));
  const local = extract(readFileSync(file, "utf8"));

  const diffs = Object.keys(reference).filter(
    (key) => reference[key] !== local[key],
  );
  if (diffs.length) {
    differences++;
    console.log(`\n⚠️  ${path}`);
    for (const key of diffs) {
      console.log(`   ${key}:`);
      console.log(`     reference: ${JSON.stringify(reference[key])}`);
      console.log(`     astro:     ${JSON.stringify(local[key])}`);
    }
  }
}

console.log(
  `\n${differences === 0 && missing.length === 0 ? "✅" : "⚠️ "} ${differences} page(s) with differences, ${missing.length} missing.`,
);
process.exitCode = missing.length ? 1 : 0;
