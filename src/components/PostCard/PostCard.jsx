import React from "react";
import { Link } from "gatsby";
import "./PostCard.scss";
import { PostImage } from "../PostImage";
import { Card } from "../Card";

export function PostCard({ post, isFeatured }) {
  const { path } = post;

  return (
    <Card>
      <Link className="post-card" to={path}>
        <PostImage post={post} isBig={isFeatured} />
      </Link>
    </Card>
  );
}
