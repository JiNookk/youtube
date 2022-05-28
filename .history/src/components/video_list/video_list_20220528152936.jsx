import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => (
  <ul>
    {props.videos.map((video) => (
      <VideoItem
        video={video}
        snippet={video.snippet}
        title={video.snippet.title}
        thumbnail={video.snippet.thumbnail}
        key={video.id}
      />
    ))}
  </ul>
);

export default VideoList;
