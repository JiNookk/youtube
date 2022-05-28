import { Component } from "react";
import { useMediaQuery } from "react-responsive";
import "./app.css";
import PopularList from "./components/popularList";
import SearchBar from "./components/searchBar";

// jsx파일을 왜쓰는가 ?
//   순수 js로직을 다루는 파일 >> js
//   react의 컴포넌트파일 >> jsx
//   이 둘을 구분하기 위해 사용!

class App extends Component {
  state = {
    PopList: [
      { id: 1, image: "image", name: "hi1", owner: "wook1" },
      { id: 2, image: "image", name: "hi2", owner: "wook2" },
      { id: 3, image: "image", name: "hi3", owner: "wook3" },
      { id: 4, image: "image", name: "hi4", owner: "wook4" },
      { id: 5, image: "image", name: "hi5", owner: "wook5" },
      { id: 6, image: "image", name: "hi6", owner: "wook6" },
      { id: 7, image: "image", name: "hi7", owner: "wook7" },
    ],
  };
  componentDidMount() {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const data = fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyAlkLx5tC8dmjZFFK3GeU9dRq8vVxH0m54",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => {

        this.setState({ data }) } ;))
      .catch((error) => console.log("error", error));

   
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <PopularList
          poplist={this.state.PopList}
          className="popvideo-container"
        />
      </div>
    );
  }
}

export default App;
