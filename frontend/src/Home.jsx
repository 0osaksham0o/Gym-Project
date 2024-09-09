// HomePage.js
import React from "react";
import Hero from "./Hero";
import WorkoutSessions from "./WorkoutSessions";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import Contact from "./Contact";
import BMICalculator from "./BMICalculator";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
    </>
  );
};

export default HomePage;
