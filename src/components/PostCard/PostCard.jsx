import React from "react";
import { Link } from "gatsby";
import "./PostCard.scss";
import { PostImage } from "../PostImage";

export function PostCard({ post, isFeatured }) {
  const { path } = post;

  return (
    <>
      <Link className="post-card" to={path}>
        <PostImage post={post} isBig={isFeatured} />
      </Link>
    </>
  );
}
