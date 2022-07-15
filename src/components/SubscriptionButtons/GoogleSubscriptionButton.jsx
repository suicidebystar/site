import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function GoogleSubscriptionButton() {
  const src = "../../images/podcast-badges/google.png";
  const href =
    "https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuaXZvb3guY29tL3BvZGNhc3Qtc3VpY2lkZWJ5c3Rhcl9mZ19mMTE3MjgxNF9maWx0cm9fMS54bWw";
  const alt = "Síquenos en Google Podcasts";

  return (
    <a target="_blank" rel="noreferrer" href={href}>
      <StaticImage src={src} alt={alt} />
    </a>
  );
}
