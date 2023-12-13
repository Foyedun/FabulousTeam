import React from 'react'
import { Link } from 'react-router-dom'
import { CloseIcon } from '@/assets/svgs/SiteIcons.jsx'
import { navItems } from '@/constant/index.js'
import { navItemLoginAndSignup } from '@/constant/index.js'
import ClickableSiteLogo from './ClickableSiteLogo.jsx'

const MobileMenu = ({displayMenu, toggleMenu}) => {
  return (
    displayMenu && (
      <div
        className='box-border fixed top-0 flex z-40 md:hidden w-full bg-black pb-[50px] h-screen transition ease-in-out duration-500'
        style={{ height: displayMenu ? '100%' : '0' }}>
        <ul className='flex flex-col flex-grow justify-between text-white m-0 p-0'>
          <div>
            <div className='flex justify-between items-center'>
                <ClickableSiteLogo style={'p-2 z-50'} />
              <li className='block md:hidden'>
                <div onClick={toggleMenu} className='cursor-pointer m-0 p-0'>
                  {displayMenu && <CloseIcon width={50} height={50} />}
                </div>
              </li>
            </div>
            {navItems.map((navItem, index) => (
              <Link
                to={navItem.url}
                className='w-full'
                key={navItem.id}
                onClick={toggleMenu}>
                <li
                  className={`text-center cursor-pointer py-4 border border-x-0 border-t-0 ${
                    index === navItems.length - 1
                      ? 'border-b-0'
                      : 'border-b-footerText'
                  }`}>
                  {navItem.label}
                </li>
              </Link>
            ))}
          </div>
          <div className='box-border px-2'>
            {navItemLoginAndSignup.map((item) => (
              <Link
                to={item.url}
                key={item.id}
                className='w-full'
                onClick={toggleMenu}>
                <li
                  className={`${
                    item.label === 'Login'
                      ? 'text-black bg-white'
                      : 'text-white bg-lightGreen'
                  } rounded-md h-12.5 my-2 flex justify-center items-center cursor-pointer`}>
                  {item.label}
                </li>
              </Link>
            ))}
          </div>
        </ul>
      </div>
    )
  );
}

export default MobileMenu