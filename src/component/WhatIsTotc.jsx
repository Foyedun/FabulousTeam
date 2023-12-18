import React from 'react';
import { userType } from '@/constant/index.js';
import ContainerSkeleton from './ContainerSkeleton.jsx';
import H1 from './H1.jsx';
import PTag from './PTag.jsx';
import Button from './Button.jsx';

const WhatIsTotc = () => {

  return (
    <ContainerSkeleton>
      <H1>
        <span className='text-mediumDarkBlue'>What is </span>
        <span className='text-green'>TOTC?</span>
      </H1>
      <PTag>
        TOTC is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </PTag>
      <div className='flex flex-col items-center py-4 md:mt-6 md:flex-row gap-2 md:justify-evenly w-full'>
        {userType.map((user) => (
          <div
            className='relative rounded-2xl flex flex-col w-full md:w-2/5 min-h-[250px] items-center justify-center'
            key={user.id}>
            <img
              src={user.image}
              alt='instructor pic'
              className='object-cover w-full h-full brightness-75'
            />
            <div className='absolute z-10'>
              <h2 className='text-semibold text-xl text-white text-center'>
                {user.type}
              </h2>
              <Button
                style={`${
                  user.type === 'FOR STUDENTS'
                    ? 'bg-skyBlue'
                    : 'bg-transparent border border-white'
                }  px-4 mt-4 text-white h-12.5 w-full rounded-full md:2/5`}>
                {user.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ContainerSkeleton>
  );
};

export default WhatIsTotc;
