import React from "react";
import {
  Layout,
  IvooxPlayer,
  SpotifyPlayer,
  PostImage,
  SubscriptionWidget,
  Head,
  Card,
  Content,
} from "../components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { getSrc } from "gatsby-plugin-image";
import "./Post.scss";

export default function Post({ data }) {
  const post = data.mdx.frontmatter;
  const { ivoox, spotify } = post;
  const featuredImageUrl = getSrc(data.mdx.frontmatter.featuredImage);

  return (
    <>
      <Head
        title={post.title}
        description={data.mdx.excerpt}
        image={featuredImageUrl}
      />
      <Layout>
        <Card>
          <section className="post">
            <section className="post__header">
              <PostImage post={post} isBig className="post__image" />
              <div className="post__player-wrapper">
                <IvooxPlayer id={ivoox} className="post__player" />
              </div>
            </section>
            <section className="post__content">
              <Content>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </Content>
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
        </Card>
      </Layout>
    </>
  );
}

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      body
      excerpt
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
