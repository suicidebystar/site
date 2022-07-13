import React from "react";
import { FeaturedPostCard } from "../FeaturedPostCard";
import "./PostList.scss";

export function PostList({ posts }) {
  return (
    <section className="post-list">
      {posts.map((post) => (
        <FeaturedPostCard post={post} key={post.slug} />
      ))}
    </section>
  );
}
