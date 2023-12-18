import React from 'react';
import { cloudSolutions } from '@/constant/index.js';
import ContainerSkeleton from './ContainerSkeleton.jsx';
import H1 from './H1.jsx';
import PTag from './PTag.jsx';

const CloudSoftware = () => {
  return (
    <ContainerSkeleton>
      <H1>
        <span className='text-mediumDarkBlue'>All-In-One </span>
        <span className='text-green'>Cloud Software.</span>
      </H1>
      <PTag>
        TOTC is one powerful online software suite that combines all the tools
        needed to run a successful school or office.
      </PTag>
      <div className='flex flex-col items-center py-4 md:mt-6 md:flex-row gap-2 md:justify-between w-full'>
        {cloudSolutions.map((cloudSolution) => (
          <div
            className='relative max-w-xs min-h-[300px] min-w-xs p-5 my-4 rounded-xl text-center shadow-xl'
            key={cloudSolution.id}>
            <div className=' -translate-y-1/2 flex justify-center items-center '>
              <img
                src={cloudSolution.image}
                alt='billing icon'
                className='w-24 h-24'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-mediumDarkBlue font-medium text-xl'>
                {cloudSolution.heading}
              </h2>
              <p className='text-grayText grow'>{cloudSolution.text}</p>
            </div>
          </div>
        ))}
      </div>
    </ContainerSkeleton>
  );
};

export default CloudSoftware;
