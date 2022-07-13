import React from "react";
import "./SubscriptionWidget.scss";
import { StaticImage } from "gatsby-plugin-image";

export function SubscriptionWidget() {
  return (
    <section className="subscription-widget">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.ivoox.com/podcast-suicidebystar_sq_f1172814_1.html"
      >
        <StaticImage src="../../images/podcast-badges/ivoox.png" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://open.spotify.com/show/7uttH3F62RZfg03W28WtvC?si=d02d4a8878c7417a"
      >
        <StaticImage src="../../images/podcast-badges/spotify.png" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://podcasts.apple.com/es/podcast/suicidebystar/id1110408380"
      >
        <StaticImage src="../../images/podcast-badges/apple.png" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuaXZvb3guY29tL3BvZGNhc3Qtc3VpY2lkZWJ5c3Rhcl9mZ19mMTE3MjgxNF9maWx0cm9fMS54bWw"
      >
        <StaticImage src="../../images/podcast-badges/google.png" />
      </a>
    </section>
  );
}
