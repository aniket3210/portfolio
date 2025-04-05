import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Motivation from "./components/Motivation.jsx";
import Home from "./components/Home.jsx";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import TechUpdates from "./components/TechUpdates.jsx";
import Footer from "./components/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Motivation />
      <Home />
      <br />
      <WorkExperience />
      <br />
      <Skills />
      <br />
      <Projects />
      <br />
      <TechUpdates />
      <br />
      <Footer />
    </>
  );
}

export default App;
