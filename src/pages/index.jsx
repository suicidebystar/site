import React from "react";
import {
  Layout,
  FeaturedPostCard,
  PostList,
  SubscriptionWidget,
} from "../components";
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
          <FeaturedPostCard post={lastPost} showAudio={true} />
        </section>
        <section className="home__posts">
          <PostList posts={morePosts} />
        </section>
        <section className="home__monographs">
          <h2>Monographs</h2>
          <FeaturedPostCard post={lastMonograph} />
        </section>
        <section className="home__sessions">
          <h2>Sessions</h2>
          <FeaturedPostCard post={lastSession} />
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
                gatsbyImageData(layout: CONSTRAINED, height: 230)
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
