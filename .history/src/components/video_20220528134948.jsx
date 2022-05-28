import React, { Component } from "react";

class Video extends Component {
  render() {
    console.log("video");
    return <div>{this.props.onfetch()}</div>;
  }
}

export default Video;
