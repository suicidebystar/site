import React from "react";
import { Layout, IvooxPlayer, SpotifyPlayer, PostImage } from "../components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./Post.scss";

export default function Post({ data }) {
  const post = data.mdx.frontmatter;
  const { ivoox, spotify } = post;

  return (
    <Layout>
      <section className="post">
        <section className="post__header">
          <PostImage post={post} isBig className="post__header" />
          <IvooxPlayer id={ivoox} />
        </section>
        <section className="post__content">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </section>
        <section className="post__sidebar">
          {spotify && <SpotifyPlayer url={spotify} />}
        </section>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      body
      frontmatter {
        title
        ivoox
        spotify
        category
        programNumber
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
