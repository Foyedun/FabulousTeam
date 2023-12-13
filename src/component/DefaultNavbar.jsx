import React from 'react';
import { Link } from 'react-router-dom';
import { navItems, navItemLoginAndSignup } from '@/constant/index.js';
import { SiteLogo, HamburgerMenu } from '@/assets/svgs/SiteIcons.jsx';

const DefaultNavbar = ({toggleMenu, displayMenu}) => {
  return (
    <ul className='flex items-center text-white m-0 p-0'>
      <li className='mr-auto'>
        <SiteLogo />
      </li>
      {navItems.map((navItem) => (
        <Link
          to={navItem.url}
          className='hidden md:block w-24 mr-4'
          key={navItem.id}>
          <li className='text-center'>{navItem.label}</li>
        </Link>
      ))}
      {navItemLoginAndSignup.map((item) => (
        <Link to={item.url} key={item.id} className='hidden md:block '>
          <li
            className={`${
              item.label === 'Login'
                ? 'text-black bg-white mr-4'
                : 'text-white bg-lightGreen'
            } rounded-full h-12.5 flex justify-center items-center w-24 cursor-pointer`}>
            {item.label}
          </li>
        </Link>
      ))}
      <li className='block md:hidden'>
        <div onClick={toggleMenu} className='cursor-pointer m-0 p-0'>
          {!displayMenu && <HamburgerMenu width={50} height={50} />}
        </div>
      </li>
    </ul>
  );
};

export default DefaultNavbar;
