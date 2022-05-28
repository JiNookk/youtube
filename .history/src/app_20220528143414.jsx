import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";

const App = (props) => {
  const [videos, setVideos] = useState([]);
  //video를 지정하면 setvideo함수를 사용할 수 있다.
  const [name, setName] = useState("wooks");

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyAlkLx5tC8dmjZFFK3GeU9dRq8vVxH0m54",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, [name]);
  // [] -> 마운트 되었을 때만 업데이트
  // 아예 없음 : 컴포넌트에 state나 prop이 변경될 때마다

  return <VideoList videos={videos} />;
  // 비동기 함수인데 에러가 안뜨나? ㅇㅇ 왜냐면 처음부터 videos를 선언해주어서 문제 될건 없음.
};

export default App;
