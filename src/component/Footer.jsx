import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  // State to handle email input
  const [formData, setFormData] = useState({ email: "" });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <footer className="flex justify-center bg-black md:px-[10%] text-white">
      <div className="flex flex-col px-2 py-4 md:px-0 gap-4 w-full md:w-1/2 text-footerText">
        <div className="flex justify-center items-center gap-4">
          <span className="border border-t-0 border-l-0 border-b-0 border-r-footerText pr-4">
            <Link to="/">
              <img src={logo} alt="Site Logo" width="100" />
            </Link>
          </span>

          <div className="flex flex-col">
            <p>For more</p>
            <p>information</p>
          </div>
        </div>

        <div>
          <p className="text-center my-4 font-medium md:font-semibold text-lg">
            Subscribe to our Newsletter
          </p>
          <form className="flex gap-2 md:gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-3xl py-2 px-6 h-12.5 w-3/5 md:w-4/5 outline-none bg-transparent border border-footerText"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-pantone-555c text-white h-12.5 w-2/5 rounded-full"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex mx-auto text-sm">
          <p className='after:content-["|"] after:mx-2 '>Careers</p>
          <p className='after:content-["|"] after:mx-2 '>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <p className="text-center m-0 text-sm">&copy; 2024 Fabulous Oyedun</p>
      </div>
    </footer>
  );
};

export default Footer;
