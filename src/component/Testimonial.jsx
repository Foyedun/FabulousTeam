import React from 'react';
import TestimonialOne from '@/assets/testimonial.png';
import Button from './Button';
import { ChevronRight } from '@/assets/svgs/SiteIcons.jsx';

const Testimonial = () => {
  return (
    <div className='relative flex flex-col justify-evenly md:flex-row  w-full py-12 px-2 md:px-[10%] my-4'>
      <div className='flex flex-col w-full md:w-1/2 gap-5 md:mr-5'>
        <span className='relative max-w-[400px] text-center text-grayText before:content-[" "] before:h-[2px] before:w-[130px] before:bg-grayText before:absolute before:top-1/2 before:left-0'>
          Testimonial
        </span>
        <h1 className='text-mediumDarkBlue font-bold text-3xl'>
          What they say?
        </h1>
        <div className='flex flex-col gap-5 text-grayText'>
          <p>
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </p>
          <p>
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p>Are you too? Please give your assessment</p>
        </div>
        <div>
          <Button
            style={
              'flex items-center gap-2 justify-between border border-lightGreen rounded-full h-12.5 text-lightGreen pl-4 max-w-1/2 border-r-0 '
            }>
            <span>Write your assessment</span>
            <div className='border border-lightGreen rounded-full h-[50px] w-[50px] flex items-center justify-center'>
              →
            </div>
          </Button>
        </div>
      </div>
      <div className='relative w-[300px] my-5 md:my-0 md:h-[400px] md:w-[400px]'>
        <img
          src={TestimonialOne}
          alt='testimonial picture'
          className='object-cover w-full h-full'
        />
        <div className='absolute -right-12 -translate-y-1/2 -translate-x-1/2 top-1/2 w-[50px] h-12.5 rounded-full p-4 bg-white border border-lightGreen'>
          <ChevronRight />
        </div>
      </div>
      <div className='absolute flex flex-col justify-between md:left-2/3 md:right-0 bottom-0 w-[350px]  md:w-[400px] h-[200px] md:h-[200px] shadow-lg rounded-2xl border-l-8 border-l-orange p-3 md:p-5 bg-white'>
        <div className='pl-2 md:pl-4 border border-y-0 border-r-0 text-grayText border-l-grayText'>
          "Thank you so much for your help. It's exactly what I've been looking
          for. You won't regret it. It really saves me time and effort. TOTC is
          exactly what our business has been lacking."
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-grayText font-medium'>Gloria Rose</span>
          <div className='flex flex-col justify-end'>
            <span className='text-xs text-end'>⭐️⭐️⭐️⭐️⭐️</span>
            <span className='text-xs text-grayText'>12 review at yelp</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
