import React from "react";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/Favorites" element={<Favorites />} />
    </Routes>
    // <Home />
  );
};

export default App;
