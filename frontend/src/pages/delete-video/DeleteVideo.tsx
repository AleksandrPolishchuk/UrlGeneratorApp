import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import "./edit-video.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../constants/url.constant";
import { IVideo } from "../../types/global.typing";

const DeleteVideo = () => {
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const redirect = useNavigate();
  const { videoId } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get<IVideo>(`${baseUrl}/${videoId}`)
      .then((response) => {
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => alert("ERror Ocuured"));
  }, [videoId]);

  const handleClickSaveBtn = () => {
    if (title === "") {
      alert("Please Enter Something");
      return;
    }
    const data = {
      title,
    };

    axios
      .post(baseUrl, data)
      .then((response) => redirect("/"))
      .catch((error) => alert("Error Ocuured"));
  };

  const handleClickBackBtn = () => {
    redirect("/");
  };
  return (
    <div className="edit-video">
      <h1>Edit Video</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="inputs">
          <TextField
            autoComplete="off"
            label="Video Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button variant="outlined" onClick={handleClickSaveBtn}>
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickBackBtn}
          >
            Back To List
          </Button>
        </div>
      )}
    </div>
  );
};

export default DeleteVideo;
