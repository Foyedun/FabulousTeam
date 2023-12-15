import React from 'react';
import Navbar from '@/component/Navbar.jsx';
import Footer from '@/component/Footer';
import HeroSection from '@/component/HeroSection.jsx';
import OurSuccess from '@/component/OurSuccess.jsx';
import CloudSoftware from '@/component/CloudSoftware.jsx';
import WhatIsTotc from '@/component/WhatIsTotc.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurSuccess />
      <CloudSoftware/>
      <WhatIsTotc/>
      <Footer />
    </>
  );
};

export default Home;
