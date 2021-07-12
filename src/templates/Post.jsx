import React from "react";
import { Layout, IvooxPlayer, SpotifyPlayer } from "../components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Post({ data }) {
  const {
    title,
    ivoox,
    featuredImage,
    programNumber,
    spotify,
  } = data.mdx.frontmatter;
  const image = getImage(featuredImage);

  return (
    <Layout>
      <h2>
        #{programNumber}: {title}
      </h2>
      <GatsbyImage image={image} alt={title} />
      <IvooxPlayer id={ivoox} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      {spotify && <SpotifyPlayer url={spotify} />}
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        ivoox
        spotify
        programNumber
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }
`;
