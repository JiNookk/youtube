import React, { Component } from "react";
import PopVideo from "./popVideo";

class PopularList extends Component {
  render() {
    //   어떻게 postman내용을 js코드로 받아오지?

    return (
      <ul className="List">
        {this.props.poplist.map((popvideo) => (
          <li>
            <PopVideo name={popvideo.name} />
          </li>
        ))}
      </ul>
    );
  }
}

export default PopularList;
