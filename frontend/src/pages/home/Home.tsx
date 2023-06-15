import "./home.scss";
import { AddCircle, Edit, Delete } from "@mui/icons-material";
import { useState, useEffect } from "react";

const Home = () => {
  const [videos, setVideos] = useState([]);
  return (
    <div className="home">
      <div className="heading">
        <h1>Videos List</h1>
        <span>
          <AddCircle />
        </span>
      </div>
      <div className="cards">Videos Cards</div>
    </div>
  );
};

export default Home;
