import React from 'react';
import Navbar from '@/component/Navbar.jsx';
import Footer from '@/component/Footer';
import HeroSection from '@/component/HeroSection.jsx';
import OurSuccess from '@/component/OurSuccess.jsx';
import CloudSoftware from '@/component/CloudSoftware.jsx';
import WhatIsTotc from '@/component/WhatIsTotc.jsx';
import WhatYouCanDoWithTotc from '@/component/WhatYouCanDoWithTotc.jsx';
import OurFeatures from '@/component/OurFeatures.jsx';
import ExploreCourse from '@/component/ExploreCourse.jsx';
import Testimonial from '@/component/Testimonial.jsx';
import LatestNewsAndResources from '@/component/LatestNewsAndResources.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurSuccess />
      <CloudSoftware />
      <WhatIsTotc />
      <WhatYouCanDoWithTotc />
      <OurFeatures />
      <ExploreCourse />
      <Testimonial />
      <LatestNewsAndResources />
      <Footer />
    </>
  );
};

export default Home;
