import React from "react";
import { Link } from "gatsby";
import { getProgramName } from "../../utils";
import "./FeaturedPostCard.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export function FeaturedPostCard({ post, showAudio = false }) {
  const { featuredImage, path, title, audio } = post;
  const image = getImage(featuredImage);
  console.log(audio);

  return (
    <>
      <Link className="featured-post" to={path}>
        <GatsbyImage
          className="featured-post__image"
          image={image}
          alt={title}
        />
        <section className="featured-post__content">
          <h2 className="featured-post__title">{title}</h2>
          {/* TODO: Customise this and move this to its own component */}
          {showAudio && (
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
