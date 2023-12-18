import React from 'react';
import ConfidentTeacher from '@/assets/confident_teacher_nd_pupils.png';
import RectangleBlue from '@/assets/rectangle_blue.png';
import RectangleGreen from '@/assets/rectangle_green.png';
import EllipseGreen from '@/assets/ellipse_green.png';
import PlayButton from '@/assets/svgs/playButtonIcon.svg';

const WhatYouCanDoWithTotc = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between items-center py-12 px-2 md:px-[10%]'>
      <div className='flex flex-col gap-5 w-full md:w-1/2'>
        <h2 className='relative font-bold text-xl text-left'>
          <span className='text-mediumDarkBlue'>
            Everything you can do in a physical classroom,{' '}
          </span>
          <span className='text-green'>you can do with TOTC</span>
          <div className='hidden lg:block absolute -top-10 -left-3  -z-10'>
            <img src={EllipseGreen} alt='back drop' />
          </div>
        </h2>{' '}
        <div className='relative text-grayText text-base'>
          TOTC’s school management software helps traditional and online schools
          manage scheduling, attendance, payments and virtual classrooms all in
          one secure cloud-based system.
          <div className='hidden lg:block absolute bottom-7 right-3  -z-10'>
            <img
              src={EllipseGreen}
              alt='back drop'
              width='24px'
              height='24px'
            />
          </div>
        </div>
        <>
          <span className=' text-grayText underline text-base cursor-pointer hover:no-underline'>
            Learn more
          </span>
        </>
      </div>
      <div className='relative w-full md:w-[400px] h-[250px] rounded-xl my-4 md:m-0'>
        <img
          src={ConfidentTeacher}
          alt='confident teacher explaining to pupils'
          className='object-cover w-full h-full rounded-xl'
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30'>
          <img src={PlayButton} alt='play button' />
        </div>
        <div className='hidden lg:block absolute -top-3 -left-3  -z-10'>
          <img src={RectangleBlue} alt='back drop' />
        </div>
        <div className='hidden lg:block absolute -bottom-3 -right-3 -z-10'>
          <img src={RectangleGreen} alt='back drop' />
        </div>
      </div>
    </div>
  );
};

export default WhatYouCanDoWithTotc;
