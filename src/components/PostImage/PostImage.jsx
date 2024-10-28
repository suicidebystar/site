import React from "react";
import { getProgramName } from "../../utils";
import "./PostImage.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import classNames from "classnames";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";

export function PostImage({ post, isBig, ...props }) {
  const { featuredImage, title, audio } = post;
  const image = getImage(featuredImage);
  const isAudioVisible = isBig && audio;

  const cardClassName = classNames({
    "post-image": true,
    "post-image--xl": isBig,
  });

  return (
    <div {...props}>
      <section className={cardClassName}>
        <GatsbyImage className="post-image__image" image={image} alt={title} />
        <section className="post-image__content">
          <h2 className="post-image__title">{title}</h2>
          {/* TODO: Customise this and move this to its own component */}
          {isAudioVisible && (
            <AudioPlayer audio={audio} className="post-image__player" />
          )}
        </section>
        <span className="post-image__program">{getProgramName(post)}</span>
      </section>
    </div>
  );
}
