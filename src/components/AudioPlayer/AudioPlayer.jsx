import React from "react";

export function AudioPlayer({ audio, ...props }) {
  return (
    <audio controls="controls" preload="metadata" {...props}>
      <source src={audio} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
