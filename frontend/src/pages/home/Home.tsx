import "./home.scss";
import { AddCircle, Edit, Delete } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { IVideo } from "../../types/global.typing";
import { baseUrl } from "../../constants/url.constant";
import axios from "axios";

const Home = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    axios
      .get<IVideo[]>(baseUrl)
      .then((response) => setVideos(response.data))
      .catch((error) => alert(JSON.stringify(error)));
  }, []);

  console.log(videos);

  return (
    <div className="home">
      <div className="heading">
        <h1>Videos List</h1>
        <span>
          <AddCircle />
        </span>
      </div>
      <div className="cards">
        {videos.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
