import React from "react";
import { Link } from "gatsby";

export function PostCard({ post }) {
  return (
    <div>
      <Link to={post.path}>{post.title}</Link>
      <p>
        {post.category} #{post.programNumber}
      </p>
    </div>
  );
}
