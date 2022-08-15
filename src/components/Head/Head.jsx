import React from "react";
import { Helmet } from "react-helmet";

export function Head({ title }) {
  return (
    <>
      <Helmet
        defaultTitle="SuicideByStar"
        title={title}
        titleTemplate="%s | SuicideByStar"
      />
    </>
  );
}
