import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function SpotifySubscriptionButton() {
  const src = "../../images/podcast-badges/spotify.png";
  const href =
    "https://open.spotify.com/show/7uttH3F62RZfg03W28WtvC?si=d02d4a8878c7417a";
  const alt = "Síguenos en Spotify";

  return (
    <a target="_blank" rel="noreferrer" href={href}>
      <StaticImage src={src} alt={alt} />
    </a>
  );
}
