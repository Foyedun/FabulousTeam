import React from "react";
import { Link } from "react-router-dom";
import { sectors } from "../constant";

const DonationCategories = () => {
  return (
    <section id="donation-categories" className="container py-10">
      <h2 className="text-4xl font-bold text-center text-pantone-green mb-8">
        Make a Difference Today
      </h2>
      <p className="text-center text-lg text-gray-700 mb-12 lg:w-[600px] mx-auto">
        By joining hands with us, you have the power to impact lives, uplift
        communities, and create brighter futures.
      </p>

      <div className="grid md:grid-cols-2 items-center gap-8">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          >
            <Link to={sector.path}>
              <img
                src={sector.img}
                alt={sector.heading}
                className="w-full h-[350px] sm:h-[540px] xl:h-[540px] object-cover"
              />
            </Link>
            <h3 className="text-2xl font-semibold pt-2">{sector.heading}</h3>
            <p className="mb-8 mt-3">{sector.note}</p>
            <Link
              to={sector.path}
              className="bg-primary text-white py-2 px-6 rounded hover:bg-[#2a3831] transition duration-300"
            >
              Support This Sector
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonationCategories;
