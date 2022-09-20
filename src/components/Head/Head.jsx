import React from "react";
import { Helmet } from "react-helmet";

export function Head({ title, description }) {
  const metaInfo = [
    { name: "description", content: description },
    {
      property: "og:title",
      content: title ? `${title} | SuicideByStar` : "SuicideByStar",
    },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "twitter:card", content: "summary" },
    { property: "twitter:creator", content: "@suicidebystar" },
  ];

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
