import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/itoko.png';
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from 'react-icons/io5';
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="bg-primary text-white fixed w-full z-[2]">
      <div className="flex container justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[85px]" />
        </Link>
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Mission</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">How it works</Link>
          </li>
        </ul>
        <TiThMenuOutline
          className="text-white text-2xl lg:hidden"
          onClick={handleNav}
        />
      </div>
      <div
        style={{
          transition: "all 0.3s ease",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
        }}
        className={
          nav
            ? "bg-primary fixed z-[4] top-0 right-0 w-full h-screen text-white"
            : "hidden"
        }
      >
        <div className="flex justify-between items-center px-[15px] py-[20px]">
          <Link>
            <img src={logo} alt="/" className="w-[85px]" />
          </Link>
          <IoClose className="text-3xl" onClick={handleNav} />
        </div>
        <ul className="text-base font-medium">
          <li className="px-[15px] py-[20px] leading-[24px] border-y border-gray">
            <Link to="/" className="leading-4" onClick={handleNav}>
              Home{" "}
            </Link>
          </li>

          <li className="px-[15px] py-[20px] leading-[24px]">
            <Link to="/mission" className="leading-4" onClick={handleNav}>
              Mission
            </Link>
          </li>

          <li className="px-[15px] py-[20px] leading-[24px] border-y border-gray">
            <Link to="/about-us" className="leading-4" onClick={handleNav}>
              About Us
            </Link>
          </li>

          <li className="px-[15px] py-[20px] leading-[24px] border-b border-gray">
            <Link to="/" className="leading-4" onClick={handleNav}>
              How it works
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header