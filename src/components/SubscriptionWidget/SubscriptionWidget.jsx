import React from "react";
import "./SubscriptionWidget.scss";
import {
  IvooxSubscriptionButton,
  SpotifySubscriptionButton,
  AppleSubscriptionButton,
} from "../SubscriptionButtons";

export function SubscriptionWidget(props) {
  return (
    <section className="subscription-widget" {...props}>
      <IvooxSubscriptionButton />
      <SpotifySubscriptionButton />
      <AppleSubscriptionButton />
    </section>
  );
}
