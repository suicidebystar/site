import React from "react";
import "./SubscriptionWidget.scss";
import {
  IvooxSubscriptionButton,
  SpotifySubscriptionButton,
  AppleSubscriptionButton,
  GoogleSubscriptionButton,
} from "../SubscriptionButtons";

export function SubscriptionWidget() {
  return (
    <section className="subscription-widget">
      <IvooxSubscriptionButton />
      <SpotifySubscriptionButton />
      <AppleSubscriptionButton />
      <GoogleSubscriptionButton />
    </section>
  );
}
