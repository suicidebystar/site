import React from "react";
import { Link } from "gatsby";
import { getProgramName } from "../../utils";
import "./FeaturedPostCard.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import classNames from "classnames";

export function FeaturedPostCard({ post, isFeatured }) {
  const { featuredImage, path, title, audio } = post;
  const image = getImage(featuredImage);
  const isAudioVisible = isFeatured && audio;

  const cardClassName = classNames({
    "featured-post": true,
    "featured-post--featured": isFeatured,
  });

  return (
    <>
      <Link className={cardClassName} to={path}>
        <GatsbyImage
          className="featured-post__image"
          image={image}
          alt={title}
        />
        <section className="featured-post__content">
          <h2 className="featured-post__title">{title}</h2>
          {/* TODO: Customise this and move this to its own component */}
          {isAudioVisible && (
            <audio
              controls="controls"
              preload="metadata"
              className="featured-post__player"
            >
              <source src={audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </section>
        <span className="featured-post__program">{getProgramName(post)}</span>
      </Link>
    </>
  );
}
