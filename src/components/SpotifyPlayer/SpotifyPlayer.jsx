import React from "react";

export const SpotifyPlayer = ({ url }) => {
  return (
    <iframe
      src={url}
      width="90%"
      height="380"
      frameBorder="0"
      allowTransparency={true}
      allow="encrypted-media"
    ></iframe>
  );
};
