import { Component, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./app.css";
import PopularList from "./components/popularList";
import SearchBar from "./components/searchBar";

class App extends Component {
  async handlefetch() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const url =
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=bts&key=AIzaSyAlkLx5tC8dmjZFFK3GeU9dRq8vVxH0m54";

    const response = await fetch(url, requestOptions);
    const data = await response.json();

    return data.items;
  }

  render() {
    this.handlefetch().then(console.log);
    return <div></div>;
  }
}

export default App;
