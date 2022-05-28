import React from "react";

const VideoItem = (props) => (
  <>
    <img src={props.snippet.thumbnails.default.url} alt="" />
    <h3>{props.title}</h3>
    <p className="channelTitle">{props.snippet.channelTitle}</p>
  </>
);

export default VideoItem;
