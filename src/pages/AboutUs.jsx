import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="about-us-page bg-gray-100 min-h-screen flex flex-col items-center pt-[100px] px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mt-8 text-center">
          About Us
        </h1>
        <p className="text-base md:text-lg text-gray-700 text-center mt-4 max-w-xl md:max-w-2xl">
          Welcome to our website! We are committed to providing excellent
          services and ensuring the satisfaction of our users. Our journey began
          with a mission to make the world a better place, one step at a time.
        </p>

        <section className="about-section mt-10 max-w-lg md:max-w-3xl text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600">
            Our Mission
          </h2>
          <p className="text-gray-700 mt-4 text-sm md:text-base">
            Our mission is to deliver high-quality solutions that empower our
            community and make a lasting impact. We believe in innovation,
            dedication, and a customer-first approach.
          </p>
        </section>

        <section className="about-section mt-10 max-w-lg md:max-w-3xl text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600">
            Our Vision
          </h2>
          <p className="text-gray-700 mt-4 text-sm md:text-base">
            To be a global leader in our field, setting standards of excellence
            and making a difference in the lives of the people we serve.
          </p>
        </section>

        <footer className="mt-auto py-6 text-center text-gray-500 text-sm md:text-base w-full">
          &copy; 2023 Your Company Name. All rights reserved.
        </footer>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs