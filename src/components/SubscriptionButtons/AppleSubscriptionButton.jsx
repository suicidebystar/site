import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function AppleSubscriptionButton() {
  const src = "../../images/podcast-badges/apple.png";
  const href =
    "https://podcasts.apple.com/es/podcast/suicidebystar/id1110408380";
  const alt = "Síquenos en Apple Podcasts";

  return (
    <a target="_blank" rel="noreferrer" href={href}>
      <StaticImage src={src} alt={alt} />
    </a>
  );
}
