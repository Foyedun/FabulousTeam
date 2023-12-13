import React from 'react';
import { successStory } from '@/constant/index.js';

const OurSuccess = () => {
  return (
    <div className='w-full flex flex-col gap-4 items-center py-12 px-2 md:px-[10%]'>
      <h1 className='font-bold text-3xl '>Our Success</h1>
      <p className='font-light w-full md:w-3/4 text-xs text-center mb-4'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non obcaecati,
        voluptate modi eum nobis architecto quaerat recusandae nam voluptatum!
        Architecto expedita illum assumenda aliquid ullam a officia ut adipisci
        placeat.
      </p>
      <div className='grid grid-cols-2  grid-flow-row gap-2 md:flex justify-between w-full'>
        {successStory.map((item) => (
          <div
            className='justify-self-center flex flex-col items-center'
            key={item.id}>
            <div className='font-medium text-4xl md:text-5xl text-gradient-to-r from-blue-500  to-teal-400'>
              {item.value}
            </div>
            <p className='text-sm md:text-base'>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSuccess;
