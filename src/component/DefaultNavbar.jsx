import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '@/constant/index.js';
import { HamburgerMenu } from '@/assets/svgs/SiteIcons.jsx';
import itokoLogo from '@/assets/itoko.png'; // Path to your logo

const DefaultNavbar = ({ toggleMenu, displayMenu }) => {
  return (
    <ul className='flex items-center text-white m-0 p-0 w-full justify-between'>
      <Link to='/' className='mr-auto'>
        <img src={itokoLogo} alt='ITOKO Logo' className='h-24' /> {/* Increased logo size */}
      </Link>
      {navItems.map((navItem) => (
        <Link
          to={navItem.url}
          className='flex items-center w-24 mx-2 text-center hover:text-[#FF6A13]' // PANTONE 1665 C in hex
          key={navItem.id}>
          <li className='text-center'>{navItem.label}</li>
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
