import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = (props) => (
  <ul className={styles.video_list}>
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
