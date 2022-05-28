import React from "react";
import styles from "./video_item.module.css";

const VideoItem = (props) => (
  <div className={styles.video_item}>
    <img src={props.snippet.thumbnails.default.url} alt="" />
    <h3>{props.title}</h3>
    <p className="channelTitle">{props.snippet.channelTitle}</p>
  </div>
);

export default VideoItem;
