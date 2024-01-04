import React from 'react';
import { userType } from '@/constant/index.js';
import ContainerSkeleton from './ContainerSkeleton.jsx';
import H1 from './H1.jsx';
import PTag from './PTag.jsx';
import UserCard from './UserCard.jsx';

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
        <UserCard userType={userType} />
      </div>
    </ContainerSkeleton>
  );
};

export default WhatIsTotc;
