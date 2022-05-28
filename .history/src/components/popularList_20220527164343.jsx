import React, { PureComponent } from "react";
import PopVideo from "./popVideo";

class PopularList extends PureComponent {
  render() {
    //   어떻게 postman내용을 js코드로 받아오지?

    this.props.onfetch();

    return (
      <ul className="List">
        {this.props.poplist.map((popvideo) => (
          <li className="popvideo">
            <PopVideo key={popvideo.id} popvideo={popvideo} />
          </li>
        ))}
      </ul>
    );
  }
}

export default PopularList;
