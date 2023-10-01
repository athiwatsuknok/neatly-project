import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ImageSlider from "../components/ImageSlider";
import ServiceSection from "../components/ServiceSection";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ImageSlider />
      <ServiceSection />
    </div>
  );
};

export default Homepage;
