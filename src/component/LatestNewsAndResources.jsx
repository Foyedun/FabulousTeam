import React from 'react';
import ContainerSkeleton from './ContainerSkeleton.jsx';
import H1 from './H1.jsx';
import newImgOne from '@/assets/news_img_1.png';
import { newsList } from '@/constant/index.js';

const LatestNewsAndResources = () => {
  return (
    <ContainerSkeleton>
      <H1 color='text-mediumDarkBlue'>Latest News And Resources</H1>
      <p className='font-light w-full md:w-3/4 text-base text-center text-grayText mb-4'>
        See the developments that have occurred to TOTC in the world
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='overflow-hidden w-full md:w-5/6'>
          <img src={newImgOne} alt='#' className='h-[250px] w-full' />
          <div>
            <div className='rounded-full py-2 text-white text-sm bg-green text-center my-4 w-[100px]'>
              NEWS
            </div>
            <div className='text-left'>
              <h2>
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution
              </h2>
              <p className='text-grayText text-sm my-4'>
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>

              <span className='text-grayText text-sm underline cursor-pointer'>
                Read more
              </span>
            </div>
          </div>
        </div>
        <div className={`${newsList.length > 1 ? '' : 'grid'}`}>
          {newsList.map(({ id, img, badge, heading, excerpt }) => (
            <div
              className={`flex flex-col mt-4 ${
                newsList.length > 1
                  ? 'md:flex-row md:h-[150px] md:p-4 py-4 md:mt-0'
                  : 'md:flex-col md:w-5/6 justify-self-end md:mt-0'
              } overflow-hidden w-full `}>
              <div
                className={`relative w-full overflow-hidden mr-4 ${
                  newsList.length > 1 ? 'md:w-2/5 rounded-md' : 'md:w-full'
                }`}
                key={id}>
                <img
                  src={img}
                  alt='#'
                  className={`w-full ${
                    newsList.length > 1 ? 'h-full' : 'h-[250px]'
                  }`}
                />
                <div
                  className={`absolute z-10 right-0 bottom-0 rounded-full items-center justify-center text-white text-xs bg-green text-center px-2 my-2 mr-2 w-[100px] h-[25px] ${
                    newsList.length > 1 ? 'flex' : 'hidden'
                  }`}>
                  {badge}
                </div>
                <div
                  className={`rounded-full py-2 text-white text-sm bg-green text-center my-4  ${
                    newsList.length > 1
                      ? 'hidden'
                      : 'flex justify-center uppercase w-[150px]'
                  }`}>
                  {badge}
                </div>
              </div>
              <div
                className={`text-left w-full overflow-y-scroll  ${
                  newsList.length > 1 ? 'md:w-4/5 md:py-0 ' : 'md:w-full pb-4'
                }`}>
                <h2>{heading}</h2>
                <p className='text-grayText text-sm my-4'>{excerpt}</p>
                <span
                  className={`text-grayText text-sm underline cursor-pointer ${
                    newsList.length > 1 ? 'hidden' : ' block'
                  }`}>
                  Read more
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContainerSkeleton>
  );
};

export default LatestNewsAndResources;
