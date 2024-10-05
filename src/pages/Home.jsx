import React from 'react';
import Navbar from '@/component/Navbar.jsx';
import Footer from '@/component/Footer';
import HeroSection from '@/component/HeroSection.jsx';
import DonationCategories from '../component/DonationCategories';
import Testimonial from '@/component/Testimonial.jsx';
import Mission from '../component/Mission';
import DonationForm from '../component/DonationForm';


const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <OurSuccess />
      <CloudSoftware />
      <WhatIsTotc />
      <WhatYouCanDoWithTotc />
      <OurFeatures /> */}
      <Testimonial />
      <Mission/>
    <DonationCategories/>
    <DonationForm />
      <Footer />
    </>
  );
};

export default Home;
