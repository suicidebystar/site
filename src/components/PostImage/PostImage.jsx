import React from "react";
import { getProgramName } from "../../utils";
import "./PostImage.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import classNames from "classnames";

export function PostImage({ post, isBig }) {
  const { featuredImage, title, audio } = post;
  const image = getImage(featuredImage);
  const isAudioVisible = isBig && audio;

  const cardClassName = classNames({
    "post-image": true,
    "post-image--xl": isBig,
  });

  return (
    <>
      <section className={cardClassName}>
        <GatsbyImage className="post-image__image" image={image} alt={title} />
        <section className="post-image__content">
          <h2 className="post-image__title">{title}</h2>
          {/* TODO: Customise this and move this to its own component */}
          {isAudioVisible && (
            <audio
              controls="controls"
              preload="metadata"
              className="post-image__player"
            >
              <source src={audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </section>
        <span className="post-image__program">{getProgramName(post)}</span>
      </section>
    </>
  );
}
