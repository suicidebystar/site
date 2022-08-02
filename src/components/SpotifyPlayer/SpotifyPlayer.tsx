import React from "react";

export const SpotifyPlayer = ({ url }) => {
  return (
    <iframe
      src={url}
      width="250"
      height="380"
      frameBorder="0"
      allowTransparency={true}
      allow="encrypted-media"
    ></iframe>
  );
};
