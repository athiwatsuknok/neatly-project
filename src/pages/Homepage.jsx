import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default Homepage;
