import React from "react";
import { Layout } from "../components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Post({ data }) {
  console.log({ data });

  const image = getImage(data.mdx.frontmatter.featuredImage);

  return (
    <Layout>
      <h2>{data.mdx.frontmatter.title}</h2>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }
`;
