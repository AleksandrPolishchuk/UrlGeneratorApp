import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AddVideo from "./pages/add-video/AddVideo";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-video" element={<AddVideo />} />
      </Routes>
    </div>
  );
};

export default App;
