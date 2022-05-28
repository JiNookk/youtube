import React, { Component } from "react";

class PopVideo extends Component {
  render() {
    return (
      <>
        <span className="thumbnail">{this.props.image}</span>
        <span className="Video Description">
          <p className="video-title">{this.props.name}</p>{" "}
          <p className="video-owner">{this.props.owner}</p>
        </span>
      </>
    );
  }
}

export default PopVideo;
