import React, { Component } from "react";
import Video from "./video";

class VideoList extends Component {
  render() {
    console.log("videolist");
    return (
      <>
        <Video onfetch={this.props.onfetch} />
      </>
    );
  }
}

export default VideoList;
