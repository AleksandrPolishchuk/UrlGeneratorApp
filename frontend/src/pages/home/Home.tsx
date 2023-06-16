import "./home.scss";
import { AddCircle, Edit, Delete } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { IVideo } from "../../types/global.typing";
import { baseUrl } from "../../constants/url.constant";
import axios from "axios";
import moment from "moment";
import { redirect } from "react-router-dom";

const Home = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
          <AddCircle onClick={() => redirect("/add-video")} />
        </span>
      </div>
      <div className="cards">
        {videos.map((item) => (
          <div key={item.id} className="card">
            <div className="left">
              <div className="title">
                <span>{item.title}</span>
                <span className="time">{moment(item.createdAt).fromNow()}</span>
              </div>
              <div className="url">
                <span>{item.url}</span>
              </div>
            </div>
            <div className="right">
              <div className="btns">
                <Edit />
                <Delete />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
