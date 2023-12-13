import React from 'react';
import Navbar from '@/component/Navbar.jsx';
import Footer from '@/component/Footer';
import HeroSection from '@/component/HeroSection.jsx';
import OurSuccess from '@/component/OurSuccess.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurSuccess/>
      <Footer />
    </>
  );
};

export default Home;
