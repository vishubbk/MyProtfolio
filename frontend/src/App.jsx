import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Project from "./pages/Projects"
import ProtectWrapper from './pages/userProtectWrapper'

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="*" element={<ProtectWrapper/>} />

      </Routes>
    </Router>
  );
};

export default App;
