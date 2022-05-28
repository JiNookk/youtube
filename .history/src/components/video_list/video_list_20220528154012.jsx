import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => (
  <ul>
    {props.videos.map((video) => (
      <li key={video.id} className="video_item">
        <VideoItem
          video={video}
          snippet={video.snippet}
          title={video.snippet.title}
          thumbnail={video.snippet.thumbnail}
          // key={video.id}
        />
      </li>
    ))}
  </ul>
);

export default VideoList;
