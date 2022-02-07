import React from "react";
import { Layout, PostCard } from "../components";
import { graphql } from "gatsby";

function transformEdgeToPost(edge) {
  if (!edge) {
    return {};
  }

  const { node } = edge;
  return {
    slug: node.slug,
    ...node.frontmatter,
  };
}

const IndexPage = ({ data }) => {
  console.log({ data });
  const morePosts = data.morePosts.edges.map(transformEdgeToPost);

  const lastPost = transformEdgeToPost(data.lastPost.edges.pop());
  const lastSession = transformEdgeToPost(data.lastSession.edges.pop());
  const lastMonograph = transformEdgeToPost(data.lastMonograph.edges.pop());

  return (
    <Layout>
      <h2>Last post</h2>
      <PostCard post={lastPost} />

      <h2>More posts</h2>
      {morePosts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
      <h2>Monographs</h2>
      <PostCard post={lastMonograph} />
      <h2>Sessions</h2>
      <PostCard post={lastSession} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    lastPost: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          slug
          frontmatter {
            title
            path
            category
            ivoox
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 200)
              }
            }
            programNumber
          }
        }
      }
    }

    morePosts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
      skip: 1
    ) {
      edges {
        node {
          slug
          frontmatter {
            title
            path
            category
            ivoox
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 200)
              }
            }
            programNumber
          }
        }
      }
    }

    lastMonograph: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
      filter: { frontmatter: { category: { eq: "monograph" } } }
    ) {
      edges {
        node {
          slug
          frontmatter {
            title
            path
            category
            ivoox
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 200)
              }
            }
            programNumber
          }
        }
      }
    }

    lastSession: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
      filter: { frontmatter: { category: { eq: "session" } } }
    ) {
      edges {
        node {
          slug
          frontmatter {
            title
            path
            category
            ivoox
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 200)
              }
            }
            programNumber
          }
        }
      }
    }
  }
`;
