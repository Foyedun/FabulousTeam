import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import shogo from "../assets/shogooo.jpg";
import cindy from "../assets/cinndy.jpg"
import {FaInstagram, FaTwitter, FaLinkedin, FaTiktok,} from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 pt-[100px]">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-4 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center text-primary">
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-gray-600 text-center mb-4">
            Reach out to us for any inquiries, collaborations, or to learn more
            about our work!
          </p>

          <div className="flex flex-col items-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6">
              Meet the Team
            </h2>

            {/* Segun Shogo Oyedun Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 mb-8">
              <img
                src={shogo}
                alt="Segun Shogo Oyedun"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-medium text-gray-700">
                  Segun Shogo Oyedun
                </p>
                <p className="text-gray-600">Frontend Developer (Technical)</p>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Segun was responsible for the front-end development of the
                  project, focusing on creating a seamless and responsive user
                  interface. He ensured that the website is user-friendly and
                  optimized for performance.
                </p>
              </div>
            </div>

            {/* Ngozika Cinderella Adichie Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 mb-8">
              <img
                src={cindy}
                alt="Ngozika Cinderella Adichie"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-medium text-gray-700">
                  Ngozika Cinderella Adichie
                </p>
                <p className="text-gray-600">Product Manager</p>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Ngozika managed the project from start to finish, ensuring
                  that the product met the needs of the users. She led the team,
                  coordinated tasks, and made key decisions to ensure the
                  project ran smoothly.
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Links Section */}
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 mb-8">
            {/* Segun's Social Media */}
            <div className="text-center mb-4 md:mb-0">
              <p className="text-lg font-medium text-gray-800">
                Segun Shogo Oyedun
              </p>
              <div className="flex justify-center space-x-6 mt-2">
                <a
                  href="https://www.instagram.com/fabulousoyedun"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-3xl md:text-4xl text-gray-600 hover:text-black transition" />
                </a>
                <a
                  href="https://www.tiktok.com/@fabulousoyedun"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="text-3xl md:text-4xl text-gray-600 hover:text-black transition" />
                </a>
                <a
                  href="https://x.com/FOyedun10176"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-3xl md:text-4xl text-gray-600 hover:text-blue-400 transition" />
                </a>
                <a
                  href="https://www.linkedin.com/in/segun-shogo-oyedun"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-3xl md:text-4xl text-gray-600 hover:text-blue-700 transition" />
                </a>
              </div>
            </div>

            {/* Ngozika's Social Media */}
            <div className="text-center">
              <p className="text-lg font-medium text-gray-800">
                Ngozika Cinderella Adichie
              </p>
              <div className="flex justify-center space-x-6 mt-2">
                <a
                  href="https://www.instagram.com/da_billionaire_queen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-3xl md:text-4xl text-gray-600 hover:text-black transition" />
                </a>
                <a
                  href="https://www.tiktok.com/@ngozika.cinderell"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="text-3xl md:text-4xl text-gray-600 hover:text-black transition" />
                </a>
                <a
                  href="https://x.com/NgoziAdichie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-3xl md:text-4xl text-gray-600 hover:text-blue-400 transition" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ngozi-cinderella-adichie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-3xl md:text-4xl text-gray-600 hover:text-blue-700 transition" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl font-semibold text-primary">
              Contact Information:
            </p>
            <p className="text-gray-600">Email: foyedun@gmail.com</p>
            <p className="text-gray-600">
              Phone: +2348101750784, +2348067395318
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg md:text-xl font-semibold text-gray-800">
              Community Contact Information:
            </p>
            <p className="text-gray-600">Phone: +2349157404512</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
