import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ImageSlider from "../components/ImageSlider";
import ServiceSection from "../components/ServiceSection";
import RoomSuits from "../components/RoomSuit";
import Testimonial from "../components/Testtimonial";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ImageSlider />
      <ServiceSection />
      <RoomSuits />
      <Testimonial />
    </div>
  );
};

export default Homepage;
