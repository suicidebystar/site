import React from "react";

export const IvooxPlayer = ({ id }) => {
  const url = `https://www.ivoox.com/player_ej_${id}_6_1.html`;

  return (
    <iframe
      id={`audio_${id}`}
      frameBorder="0"
      allowFullScreen=""
      scrolling="no"
      height="200"
      style={{ width: "100%" }}
      src={url}
    ></iframe>
  );
};
