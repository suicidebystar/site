import React from "react";
import "./AlbumItem.scss";

const toKebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

export function AlbumItem({ title, children, artist, tags, ...props }) {
  return (
    <li className="album-item" {...props}>
      <div className="album-item__cover">{children}</div>
      <div className="album-item__info">
        <div className="album-item__album">
          <div className="album-item__title">{title}</div>
          <div className="album-item__artist">{artist}</div>
        </div>
        {tags && (
          <div className="album-item__tags">
            {tags.map((tag) => (
              <span className="album-item__tag" key={`${artist}${title}${tag}`}>
                {toKebabCase(tag)}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
