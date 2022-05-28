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
      { id: 1, name: hi },
      { id: 1, name: hi },
      { id: 1, name: hi },
      { id: 1, name: hi },
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
        <PopularList />
      </div>
    );
  }
}

export default App;
