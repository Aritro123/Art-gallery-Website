import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Register from "./pages/Register";
import Learn from "./pages/Learn";
import Illustrator from "./pages/Illustrator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Learn" element={<Learn />} />
        <Route path="/illustrator" element={<Illustrator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
