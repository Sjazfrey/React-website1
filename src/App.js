import React from "react";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";
import Home from "./Components/home/home";
import Project from "./Components/project/project";
import Resume from "./Components/resume/resume";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
