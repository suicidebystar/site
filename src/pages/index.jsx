import React from "react";
import {
  Head,
  Layout,
  PostCard,
  PostList,
  SubscriptionWidget,
} from "../components";
import { graphql } from "gatsby";
import "./index.scss";
import { transformEdgeToPost } from "../utils";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  const morePosts = data.morePosts.edges.map(transformEdgeToPost);

  const lastPost = transformEdgeToPost(data.lastPost.edges[0]);
  const lastSession = transformEdgeToPost(data.lastSession.edges[0]);
  const lastMonograph = transformEdgeToPost(data.lastMonograph.edges[0]);

  return (
    <>
      <Head description="Los mejores podcasts de música alternativa" />
      <Layout>
        <div className="home">
          <section className="home__banner">
            <a
              href="https://suicidebystar.bigcartel.com/"
              target="_blank"
              rel="noreferrer"
              className="home__banner-link"
            >
              <strong>¡Nuevo merch disponible!</strong>
              <StaticImage
                src="../images/logo-trve.png"
                alt="logo"
                width={300}
                className="logo__image"
                imgStyle={{ objectFit: "contain" }}
              />

              <strong>VISITA NUESTRA TIENDA</strong>
            </a>
          </section>
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
          <section className="home__social">{/* TODO: */}</section>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    lastPost: allMdx(sort: { frontmatter: { date: DESC } }, limit: 1) {
      edges {
        node {
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
      sort: { frontmatter: { date: DESC } }
      limit: 6
      skip: 1
    ) {
      edges {
        node {
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
      sort: { frontmatter: { date: DESC } }
      limit: 1
      filter: { frontmatter: { category: { eq: "monograph" } } }
    ) {
      edges {
        node {
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
      sort: { frontmatter: { date: DESC } }
      limit: 1
      filter: { frontmatter: { category: { eq: "session" } } }
    ) {
      edges {
        node {
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
