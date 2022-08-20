import React from "react";
import { Card } from "../Card";
import { Head } from "../Head";
import "./Page.scss";

export function Page({ children, title, ...props }) {
  return (
    <div {...props}>
      <section className="page">
        <Head title={title} />
        <Card>
          {title && <h1 className="page__title">{title}</h1>}
          {children}
        </Card>
      </section>
    </div>
  );
}
