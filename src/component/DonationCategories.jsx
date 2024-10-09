import { sectors } from "../constant";
import { Link } from "react-router-dom";

const DonationCategories = () => {
  return (
    <section id="donation-categories" className="container py-10">
      <h2 className="text-4xl font-bold text-center text-pantone-green mb-8">
        Make a Difference Today
      </h2>
      <p className="text-center text-lg text-gray-700 mb-12 lg:w-[600px] mx-auto">
        At Itoko Aid, we believe that together we can uplift our community.
        Choose a cause close to your heart and make a lasting impact in the
        lives of those in need.
      </p>

      <div className="grid md:grid-cols-2 items-center gap-8">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          >
            <img
              src={sector.img}
              alt={sector.heading}
              className="w-full h-[231px] sm:h-[334px] xl:h-[494px] object-cover"
            />
            <h3 className="text-2xl font-semibold pt-2">{sector.heading}</h3>
            <p className="mb-8 mt-3">{sector.note}</p>
            <Link
              to={sector.path}
              className=" bg-primary text-white py-2 px-6 rounded hover:bg-[#2a3831] transition duration-300"
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
