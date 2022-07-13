import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components";
export default function PostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const posts = data.allMdx.edges.map((edge) => {
    const { node } = edge;
    return {
      slug: node.slug,
      title: node.frontmatter.title,
      path: node.frontmatter.path,
    };
  });

  return (
    <Layout>
      <h2>All posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.title}>
            <Link to={post.path}>{post.title}</Link>: {post.slug}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          slug
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
