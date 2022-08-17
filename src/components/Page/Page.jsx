import React from "react";
import { Content } from "../Content";
import { Card } from "../Card";
import "./Page.scss";

export function Page({ children, title }) {
  return (
    <section className="page">
      <Card>
        <Content>
          {title && <h1 className="page__title">{title}</h1>}
          {children}
        </Content>
      </Card>
    </section>
  );
}
