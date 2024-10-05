import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import shogo from '@/assets/shogooo.jpg';
import './HeroSection.css'; // Ensure this file contains the necessary styles

const HeroSection = () => {
  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowFirstText((prev) => !prev);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='flex flex-col lg:flex-row justify-between gap-5 w-full md:rounded-bl-[20%] md:rounded-br-[20%] bg-[#1E1A78] pt-[100px]'> {/* Updated background color */}
      <div className='container flex items-center w-full md:w-1/2'>
        <div className='flex flex-col gap-4 w-full p-10 pl-0 pr-10'>
          <h1 className={`font-semibold text-4xl md:text-5xl text-white ${showFirstText ? 'fade-in' : 'fade-out'}`}>
            <span className='text-[#FF671F]'>{showFirstText ? "Helping" : "Empowering"}</span> communities thrive together
          </h1>
          <p className={`text-white text-base font-light w-full md:w-4/5 ${showFirstText ? 'fade-in' : 'fade-out'}`}>
            {showFirstText 
              ? "ITOKO AID is a platform designed to empower and support the community, offering you a chance to be a part of a positive change."
              : "By fostering collaboration and creating opportunities for growth, we strive to build a sustainable future where every individual can contribute to the betterment of society. Together, we can overcome challenges and uplift those in need, ensuring a brighter tomorrow for all."
            }
          </p>

          <Link to='/register'>
            <Button
              style={
                'bg-black text-white h-10 w-2/4 rounded-full md:w-1/4' // Changed background color to black
              }>
              Join for free
            </Button>
          </Link>
        </div>
      </div>
      <div className='relative'>
        <img
          src={shogo}
          alt='community help'
          className='w-full h-[300px] object-contain object-top md:w-[400px] md:h-[400px]'
        />
      </div>
    </div>
  );
};

export default HeroSection;
