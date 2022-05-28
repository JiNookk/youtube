import React, { PureComponent } from "react";
import PopVideo from "./popVideo";

class PopularList extends PureComponent {
  render() {
    //   어떻게 postman내용을 js코드로 받아오지?
    const data = this.props
      .onresponse()
      .then((data) => console.log(data.items));

    return (
      <ul className="List">
        {this.props.poplist.map((popvideo) => (
          <li className="popvideo">
            <PopVideo
              data={data[popvideo.id - 1]}
              key={popvideo.id}
              popvideo={popvideo}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default PopularList;
