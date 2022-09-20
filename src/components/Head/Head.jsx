import React from "react";
import { Helmet } from "react-helmet";

export function Head({ title, description, image }) {
  let metaInfo = [
    // TODO: Move hardcoded string to config
    { name: "description", content: description },
    {
      property: "og:title",
      content: title ? `${title} | SuicideByStar` : "SuicideByStar",
    },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:creator", content: "@suicidebystar" },
    { property: "twitter:site", content: "@suicidebystar" },
  ];

  if (image) {
    metaInfo = [
      ...metaInfo,
      {
        property: "twitter:image",
        content: `https://suicidebystar.com${image}`,
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
