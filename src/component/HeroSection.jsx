import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import teenGirl from '@/assets/teenage_girl_img.png';
import chatCluster from '@/assets/message_cluster_img.png';

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-5 w-full md:rounded-bl-[20%] md:rounded-br-[20%] px-2 md:px-[10%] bg-green'>
      <div className='flex items-center w-full md:w-1/2'>
        <div className='flex flex-col gap-4 w-full  p-10 pl-0 pr-10'>
          <h1 className='font-semibold text-4xl md:text-5xl text-white'>
            <span className='text-orange'>Studying</span> online is now much
            easier
          </h1>
          <p className='text-white text-base font-light w-full md:w-4/5'>
            TOTC is an interesting platform that will teach you more in an
            interactive way
          </p>

          <Link to='/register'>
            <Button
              style={
                'bg-lightGreen text-white h-10 w-2/4 rounded-full md:w-1/4'
              }>
              Join for free
            </Button>
          </Link>
        </div>
      </div>
      <div className='relative'>
        <img
          src={teenGirl}
          alt='teenage girl'
          className='w-full h-[300px] object-contain object-top md:w-[400px] md:h-[400px]'
        />
        <div className='absolute md:top-[10%] md:-left-1/4 bottom-3.5 md:bottom-1/4'>
          <img src={chatCluster} alt='chat-cluster' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
