import React from "react";
import Hero from "../Sections/Hero/Hero";
import Specials from "../Sections/Specials/Specials";
import Reviews from "../Sections/Reviews/Reviews";
import About from "../Sections/About/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Specials />
      <Reviews />
      <About />
    </>
  );
};
export default Home;