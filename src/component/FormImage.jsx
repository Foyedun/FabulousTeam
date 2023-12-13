import React from 'react'
import login_img from '@/assets/login_img.png';
import register_img from '@/assets/register_img.png';
import ClickableSiteLogo from './ClickableSiteLogo.jsx';

const FormImage = ({location}) => {
  return (
    <div className='hidden lg:block rounded-lg w-[50%]'>
      {location.pathname === '/login' && (
        <div className='relative w-full h-full box-border rounded-lg'>
          <img
            src={login_img}
            alt='login pic'
            className='object-cover rounded-xl w-full h-full'
          />
          <div className='absolute top-5 left-5' title='Home'>
            <ClickableSiteLogo />
          </div>
        </div>
      )}
      {location.pathname === '/register' && (
        <div className='relative w-full h-full box-border rounded-lg'>
          <img
            src={register_img}
            alt='register pic'
            className='object-cover rounded-xl w-full h-full'
          />
          <div className='absolute top-5 left-5' title='Home'>
            <ClickableSiteLogo />
          </div>
        </div>
      )}
    </div>
  );
}

export default FormImage