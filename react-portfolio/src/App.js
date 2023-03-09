import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Projects from "./pages/ProjectsPages";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
