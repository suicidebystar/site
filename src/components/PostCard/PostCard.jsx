import React from "react";
import { Link } from "gatsby";
import { getProgramName } from "../../utils";

export function PostCard({ post }) {
  return (
    <div>
      <Link to={post.path}>{post.title}</Link>
      <p>{getProgramName(post)}</p>
    </div>
  );
}