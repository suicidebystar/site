import React from "react";
import {
  Layout,
  IvooxPlayer,
  SpotifyPlayer,
  PostImage,
  SubscriptionWidget,
} from "../components";
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
          <IvooxPlayer id={ivoox} className="post__player" />
        </section>
        <section className="post__content">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </section>
        <section className="post__sidebar">
          <div className="post__subscriptions">
            <SubscriptionWidget />
          </div>
          {spotify && (
            <div className="post__playlist">
              <SpotifyPlayer url={spotify} />
            </div>
          )}
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
