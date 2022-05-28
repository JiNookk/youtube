import React from "react";

const VideoItem = (props) => (
  <h1>
    {props.snippet.thumbnails.high.url}
    {props.title}
  </h1>
);

export default VideoItem;
