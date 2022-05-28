import React from "react";

const VideoItem = (props) => (
  <h1>
    <img src={props.snippet.thumbnails.high.url} alt="" />

    {props.title}
  </h1>
);

export default VideoItem;
