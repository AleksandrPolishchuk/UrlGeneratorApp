import "./home.scss";
import { AddCircle, Edit, Delete } from "@mui/icons-material";

const Home = () => {
  return (
    <div className="home">
      <div className="heading">
        <h1>Videos List</h1>
        <span>
          <AddCircle />
        </span>
      </div>
    </div>
  );
};

export default Home;
