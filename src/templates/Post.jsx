import React from "react";
import { Layout, IvooxPlayer, SpotifyPlayer, PostImage } from "../components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function Post({ data }) {
  const post = data.mdx.frontmatter;
  const { ivoox, spotify } = post;

  return (
    <Layout>
      <PostImage post={post} isBig />
      <IvooxPlayer id={ivoox} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      {spotify && <SpotifyPlayer url={spotify} />}
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
