import React from 'react';
import { useLocationCust } from '../customHook/useLocation.js';
import { Link } from 'react-router-dom';

const LoginOrRegisterFormButtonSwitch = ({ setActiveForm }) => {
  const location = useLocationCust();
  return (
    <div className='bg-lightGreen h-16 p-4 w-full lg:w-[75%] flex items-center justify-between rounded-full mx-auto'>
      <Link to='/login' className='w-[46%]'>
        <button
          className={`${
            location.pathname == '/login' ? 'bg-green' : 'bg-transparent'
          }  h-12.5 text-white w-full rounded-3xl`}
          onClick={(e) => setActiveForm('login')}>
          Login
        </button>
      </Link>

      <Link to='/register' className='w-[46%]'>
        <button
          className={`${
            location.pathname == '/register' ? 'bg-green' : 'bg-transparent'
          }  h-12.5 text-white w-full rounded-3xl`}
          onClick={(e) => setActiveForm('register')}>
          Register
        </button>
      </Link>
    </div>
  );
};

export default LoginOrRegisterFormButtonSwitch;
