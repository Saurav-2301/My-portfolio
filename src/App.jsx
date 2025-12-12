import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./index.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar (Header) */}
        <Navbar />

        {/* Main content (This grows to fill the space) */}
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Introduction />} />
              <Route path="/Education" element={<Education />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Experience" element={<Experience />} />
              <Route path="/Certificates" element={<Certificates />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Resume" element={<Resume />} />
            </Routes>
          </AnimatePresence>
        </div>

        {/* Footer (sticks to bottom) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
