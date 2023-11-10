import React from "react";
import "./AlbumList.scss";

export function AlbumList({ children, title }) {
  return (
    <>
      <h2 className="album-list__title">{title}</h2>
      <ol className="album-list__list">{children}</ol>
    </>
  );
}
