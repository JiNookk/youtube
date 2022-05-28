import React, { useEffect } from "react";

const App = (props) => {
  const [videos, setVideos] = useState([]);
  //video를 지정하면 setvideo함수를 사용할 수 있다.
  const [name, setName] = useState("wooks");

  useEffect(() => {
    console.log("useEffect");
  }, [name]);

  return <h1>Hello :)</h1>;
};

export default App;
