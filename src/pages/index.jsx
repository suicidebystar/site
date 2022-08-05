import React from "react";
import { Layout, PostCard, PostList, SubscriptionWidget } from "../components";
import { graphql } from "gatsby";
import "./index.scss";

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
  const morePosts = data.morePosts.edges.map(transformEdgeToPost);

  const lastPost = transformEdgeToPost(data.lastPost.edges.pop());
  const lastSession = transformEdgeToPost(data.lastSession.edges.pop());
  const lastMonograph = transformEdgeToPost(data.lastMonograph.edges.pop());

  return (
    <Layout>
      <div className="home">
        <section className="home__featured">
          <PostCard post={lastPost} isFeatured={true} />
        </section>
        <section className="home__posts">
          <PostList posts={morePosts} />
        </section>
        <section className="home__monographs">
          <h2 className="home__section-title">Monográficos</h2>
          <PostCard post={lastMonograph} />
        </section>
        <section className="home__sessions">
          <h2 className="home__section-title">Sesiones</h2>
          <PostCard post={lastSession} />
        </section>
        <section className="home__subscribe">
          <SubscriptionWidget />
        </section>
        <section className="home__social">
          <strong>Síguenos</strong>
          <strong>Tienda</strong>
        </section>
      </div>
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
            audio
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            programNumber
          }
        }
      }
    }

    morePosts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
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
                gatsbyImageData(layout: CONSTRAINED, height: 300)
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
                gatsbyImageData(layout: CONSTRAINED, height: 230)
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
                gatsbyImageData(layout: CONSTRAINED, height: 230)
              }
            }
            programNumber
          }
        }
      }
    }
  }
`;
