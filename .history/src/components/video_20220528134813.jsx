import React, { Component } from "react";

class Video extends Component {
  render() {
    console.log("video");
    return <div>{this.props.onfetch().then(console.log}</div>;
  }
}

export default Video;
