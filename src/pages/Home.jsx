import React from "react";
import Header from "../component/Header";
import HeroSection from "../component/HeroSection";
import DonationCategories from "../component/DonationCategories";
import Footer from "../component/Footer";
import Mission from "../component/Mission";

const Home = () => {
  return (
  
    <div>
      <Header />
      <HeroSection />
      <Mission />
      <DonationCategories />
      <Footer/>
    </div>
  );
};

export default Home;
