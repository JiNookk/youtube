import React from "react";

const VideoItem = (props) => (
  <li key={video.id} className="video_item">
    <img src={props.snippet.thumbnails.default.url} alt="" />
    <h3>{props.title}</h3>
    <p className="channelTitle">{props.snippet.channelTitle}</p>
  </li>
);

export default VideoItem;
