import React from 'react';
import Button from './Button.jsx';

const UserCard = ({ userType }) => {
  return (
    <>
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
    </>
  );
};

export default UserCard;
