import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/about";
import Dashboard from "../Pages/dashboard";

function Navigation(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
