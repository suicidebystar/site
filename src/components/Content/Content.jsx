import React from "react";
import "./Content.scss";

export function Content({ children, title }) {
  return (
    <section className="content">
      {title && <h1 className="content__title">{title}</h1>}
      <article className="content__text">{children}</article>
    </section>
  );
}
