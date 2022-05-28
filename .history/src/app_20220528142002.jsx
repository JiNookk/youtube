import React, { useEffect, useState } from "react";

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
      .then((result) => setVideos({ result }))
      .catch((error) => console.log("error", error));
  }, [name]);
  // [] -> 마운트 되었을 때만 업데이트
  // 아예 없음 : 컴포넌트에 state나 prop이 변경될 때마다

  return <h1>Hello :)</h1>;
};

export default App;
