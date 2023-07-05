import React from "react";
import { getCookieConsentValue } from "react-cookie-consent";

export const IvooxPlayer = ({ id, ...props }) => {
  const url = `https://www.ivoox.com/player_ej_${id}_6_1.html`;
  const cookiesEnabled = getCookieConsentValue();

  return (
    cookiesEnabled && (
      <iframe
        id={`audio_${id}`}
        frameBorder="0"
        allowFullScreen=""
        scrolling="no"
        height="200"
        style={{ width: "100%" }}
        src={url}
        {...props}
      ></iframe>
    )
  );
};
