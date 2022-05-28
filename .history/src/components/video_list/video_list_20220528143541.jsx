import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => (
  <ul>
    {props.videos.map((video) => (
      <VideoItem
        video={video}
        title={video.snippet.title}
        key={props.videos.indexOf(video)}
      />
    ))}
  </ul>
);

export default VideoList;
