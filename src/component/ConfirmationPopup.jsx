import React from 'react';

// TODO:
const ConfirmationPopup = ({ confirmPopup }) => {
  return (
    <div className='absolute top-0 left-0 right-0 bg-[#0000008c] w-full h-screen'>
      <div className='mx-auto z-20 w-full p-2 md:w-1/3 bg-white'>
        <p className='font-medium'>
          You are about to leave the form! All progress will be lost. Do you
          wish to continue?
        </p>
        <div className='flex justify-end items-center w-full mt-4'>
          <button
            className='w-1/3 rounded-lg mr-2 bg-red-400 p-2 text-white'
            onClick={(e) => confirmPopup('no')}>
            No
          </button>
          <button
            className='w-1/3 rounded-lg ml-2 bg-green p-2 text-white'
            onClick={(e) => confirmPopup('yes')}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
