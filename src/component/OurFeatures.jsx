import React from 'react';
import ContainerSkeleton from './ContainerSkeleton.jsx';
import FeatureOne from '@/assets/feature_one.png';
import FeatureTwo from '@/assets/feature_two.png';
import FeatureThree from '@/assets/svgs/feature_three.svg';
import FeatureFour from '@/assets/svgs/feature_four.svg';
import FeatureFive from '@/assets/svgs/feature_five.svg';
import H1 from './H1.jsx';

const OurFeatures = () => {
  const featuresList = [
    { id: 1, image: FeatureOne, alt: 'feature one' },
    { id: 2, image: FeatureTwo, alt: 'feature two' },
    { id: 3, image: FeatureThree, alt: 'feature three' },
    { id: 4, image: FeatureFour, alt: 'feature four' },
    { id: 5, image: FeatureFive, alt: 'feature five' },
  ];
  return (
    <ContainerSkeleton>
      <H1>
        <span className='text-mediumDarkBlue'>Our </span>
        <span className='text-green'>Features</span>
      </H1>
      <p className='font-light w-full md:w-3/4 text-base text-center text-grayText mb-4'>
        This very extraordinary feature, can make learning activities more
        efficient
      </p>
      {featuresList.map((feature) => (
        <div className='w-full' key={feature.id}>
          <img src={feature.image} alt={feature.alt} />
        </div>
      ))}
    </ContainerSkeleton>
  );
};

export default OurFeatures;
