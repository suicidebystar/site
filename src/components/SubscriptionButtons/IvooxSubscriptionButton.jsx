import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function IvooxSubscriptionButton() {
  const src = "../../images/podcast-badges/ivoox.png";
  const href = "https://www.ivoox.com/podcast-suicidebystar_sq_f1172814_1.html";
  const alt = "Síguenos en Ivoox";

  return (
    <a target="_blank" rel="noreferrer" href={href}>
      <StaticImage src={src} alt={alt} />
    </a>
  );
}
