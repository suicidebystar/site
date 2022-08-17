import React from "react";
import "./Content.scss";

export function Content({ children }) {
  return <article className="content">{children}</article>;
}
