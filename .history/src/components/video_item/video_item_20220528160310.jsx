import React from "react";
import styles from "./video_item.module.css";

const VideoItem = (props) => (
  <div className={styles.video_item}>
    <img src={props.snippet.thumbnails.default.url} alt="" />
    <div className={styles.description}>
      <h3>{props.title}</h3>
      <p className={styles.channelTitle}>{props.snippet.channelTitle}</p>
    </div>
  </div>
);

export default VideoItem;
