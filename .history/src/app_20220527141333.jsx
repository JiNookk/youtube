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
      { id: 1, name: "hi1" },
      { id: 2, name: "hi2" },
      { id: 3, name: "hi3" },
      { id: 4, name: "hi4" },
      { id: 5, name: "hi5" },
      { id: 6, name: "hi6" },
      { id: 7, name: "hi7" },
    ],
  };
  componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyAlkLx5tC8dmjZFFK3GeU9dRq8vVxH0m54",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });

  isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });

  isMobile = useMediaQuery({
    query: "(min-width:767px)",
  });

  render() {
    return (
      <div className="container">
        <SearchBar />
        <PopularList poplist={this.state.PopList} />
      </div>
    );
  }
}

export default App;
