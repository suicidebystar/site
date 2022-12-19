import React from "react";
import "./AlbumItem.scss";

export function AlbumItem({ title, children, position, ...props }) {
  return (
    <section className="album-item" {...props}>
      <div className="album-item__position">{position}</div>
      <div className="album-item__cover">{children}</div>
      <div className="album-item__title">{title}</div>
    </section>
  );
}
