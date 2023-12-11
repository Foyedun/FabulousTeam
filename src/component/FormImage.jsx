import React from 'react'
import login_img from '@/assets/login_img.png';
import register_img from '@/assets/register_img.png';

const FormImage = ({location}) => {
  return (
    <div className='hidden lg:block rounded-lg w-[50%]'>
      {location.pathname === '/login' && (
        <div className='w-full h-full box-border rounded-lg'>
          <img
            src={login_img}
            alt='login pic'
            className='object-cover rounded-xl w-full h-full'
          />
        </div>
      )}
      {location.pathname === '/register' && (
        <div className='w-full h-full box-border rounded-lg'>
          <img
            src={register_img}
            alt='register pic'
            className='object-cover rounded-xl w-full h-full'
          />
        </div>
      )}
    </div>
  );
}

export default FormImage