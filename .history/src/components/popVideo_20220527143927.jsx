import React, { Component } from "react";

class PopVideo extends Component {
  render() {
    return (
      <>
        <span className="thumbnail">{this.props.popvideo.image}</span>
        <span className="Video Description">
          <p className="video-title">{this.props.popvideo.name}</p>
          <p className="video-owner">{this.props.popvideo.owner}</p>
        </span>
      </>
    );
  }
}

export default PopVideo;
