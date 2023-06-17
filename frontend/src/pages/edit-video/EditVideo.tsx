import { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./edit-video.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../constants/url.constant";

const EditVideo = () => {
  const [title, setTitle] = useState<string>("");
  const redirect = useNavigate();

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
    </div>
  );
};

export default EditVideo;
