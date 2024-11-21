import { motion } from "framer-motion";
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
      {/* Desktop and Logo Section */}
      <motion.div
        className="flex container justify-center items-center pb-5 space-x-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Link to="/" className="mr-auto">
          <img src={logo} alt="logo" className="w-[85px]" />
        </Link>
        <motion.ul
          className="hidden lg:flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {["Home", "Contact", "About Us"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{
                scale: 1.2,
                color: "#6BFA88", // Hover color: Tailwind's `text-orange-500`
                transition: { duration: 0.3 },
              }}
            >
              <NavLink
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
              >
                {item}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
        <TiThMenuOutline
          className="text-white text-2xl lg:hidden ml-auto"
          onClick={handleNav}
        />
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ x: "100%" }}
        animate={nav ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`bg-primary fixed z-[4] top-0 right-0 w-full h-screen text-white ${
          nav ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center px-[15px] py-[20px]">
          <Link>
            <img src={logo} alt="/" className="w-[85px]" />
          </Link>
          <IoClose className="text-3xl" onClick={handleNav} />
        </div>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base font-medium"
        >
          {["Home", "Contact", "About Us"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#333", // Darker background on hover
                transition: { duration: 0.2 },
              }}
              className="px-[15px] py-[20px] leading-[24px] border-y border-gray"
            >
              <NavLink
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className="leading-4"
                onClick={handleNav}
              >
                {item}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default Header;
