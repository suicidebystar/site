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
import { getSrc } from "gatsby-plugin-image";
import "./Post.scss";

const Post = ({ data, children }) => {
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
                <IvooxPlayer
                  id={ivoox}
                  audioFallback={post.audio}
                  className="post__player"
                />
              </div>
            </section>
            <section className="post__info">
              <SubscriptionWidget />
            </section>
            <section className="post__content">
              <Content>{children}</Content>
            </section>
            <section className="post__bottom">
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
};

export default Post;

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      excerpt
      frontmatter {
        title
        ivoox
        spotify
        category
        programNumber
        audio
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
