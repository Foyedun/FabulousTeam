import React, { useState } from 'react';
import MobileMenu from './MobileNavbar';
import DefaultNavbar from './DefaultNavbar';

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <>
      <nav className='box-border px-2 relative bg-black md:px-[10%]'>
        <DefaultNavbar displayMenu={displayMenu} toggleMenu={toggleMenu} />
      </nav>
      {/* Mobile menu content */}
      <MobileMenu displayMenu={displayMenu} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
