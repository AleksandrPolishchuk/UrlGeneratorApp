import { Button, TextField } from "@mui/material";
import "./add-video.scss";

const AddVideo = () => {
  return (
    <div className="add-video">
      <h1>Add Video</h1>
      <div className="inputs">
        <TextField autoComplete="off" label="Video Title" variant="outlined" />
        <Button variant="outlined">Save</Button>
        <Button variant="outlined">Back To List</Button>
      </div>
    </div>
  );
};

export default AddVideo;
