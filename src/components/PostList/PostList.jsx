import React from "react";
import { PostCard } from "../PostCard";
import "./PostList.scss";

export function PostList({ posts }) {
  return (
    <section className="post-list">
      {posts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </section>
  );
}
