import React from "react";
import { Helmet } from "react-helmet";

export function Head({ title, description, image }) {
  const metaTitle = title ? `${title} | SuicideByStar` : "SuicideByStar";

  let metaInfo = [
    // TODO: Move hardcoded string to config
    { name: "description", content: description },
    { property: "og:description", content: description },
    { property: "twitter:description", content: description },
    {
      property: "og:title",
      content: metaTitle,
    },
    {
      property: "twitter:title",
      content: metaTitle,
    },
    { property: "og:type", content: "website" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:creator", content: "@suicidebystar" },
    { property: "twitter:site", content: "@suicidebystar" },
  ];

  if (image) {
    const imageAbsoluteUrl = `https://suicidebystar.com${image}`;

    metaInfo = [
      ...metaInfo,
      {
        property: "og:image",
        content: imageAbsoluteUrl,
      },
      {
        property: "twitter:image",
        content: imageAbsoluteUrl,
      },
    ];
  }

  return (
    <>
      <Helmet
        defaultTitle="SuicideByStar"
        title={title}
        titleTemplate="%s | SuicideByStar"
        meta={metaInfo}
      />
    </>
  );
}
