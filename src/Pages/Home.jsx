import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import BestSeller from "../Components/BestSeller";
import OurPolicy from "../Components/OurPolicy";
import Email from "../Components/Email";
import Footer from "../Components/Footer";
import ImageCarousel from "../Components/ImageCarousel";

const Home = () => {
  return (
    <>
      <ImageCarousel />
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <Email />
      <Footer />
    </>
  );
};

export default Home;
