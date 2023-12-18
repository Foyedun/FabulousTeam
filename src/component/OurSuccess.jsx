import React from 'react';
import { successStory } from '@/constant/index.js';
import ContainerSkeleton from './ContainerSkeleton.jsx';
import H1 from './H1.jsx';

const OurSuccess = () => {
  return (
    <ContainerSkeleton>
      <H1>Our Success</H1>
      <p className='font-light w-full md:w-3/4 text-base text-center mb-4'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non obcaecati,
        voluptate modi eum nobis architecto quaerat recusandae nam voluptatum!
        Architecto expedita illum assumenda aliquid ullam a officia ut adipisci
        placeat.
      </p>
      <div className='grid grid-cols-2 mt-6 grid-flow-row gap-2 md:flex justify-between w-full'>
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
    </ContainerSkeleton>
  );
};

export default OurSuccess;