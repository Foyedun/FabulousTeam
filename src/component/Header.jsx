import logo from "@/assets/logo.png";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="bg-black text-white fixed w-full z-[2] pt-7">
      <div className="flex container justify-center items-center pb-5 space-x-8">
        <Link to="/" className="mr-auto">
          <img src={logo} alt="logo" className="w-[85px]" />
        </Link>
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink> {/* Correct route */}
          </li>
          <li>
            <Link
              to="/"
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition"
            >
              Donate Now
            </Link>
          </li>
        </ul>
        <TiThMenuOutline
          className="text-white text-2xl lg:hidden ml-auto"
          onClick={handleNav}
        />
      </div>

      {/* Mobile Navigation */}
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
              Home
            </Link>
          </li>
          <li className="px-[15px] py-[20px] leading-[24px]">
            <NavLink to="/contact" className="leading-4" onClick={handleNav}>
              Contact
            </NavLink>
          </li>
          <li className="px-[15px] py-[20px] leading-[24px] border-y border-gray">
            <NavLink to="/about-us" className="leading-4" onClick={handleNav}>
              About Us
            </NavLink>
          </li>
          <li className="px-[15px] py-[20px] leading-[24px] border-b border-gray">
            <Link
              to="/"
              className="bg-primary text-white px-4 py-2 rounded-full inline-block hover:bg-secondary transition leading-4"
              onClick={handleNav}
            >
              Donate Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;