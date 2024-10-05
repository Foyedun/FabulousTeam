import React from 'react';
import schoolImage from '../assets/school.jpg';
import helpImage from '../assets/help.jpg';
import dedicatingImage from '../assets/dedicating.jpg';
import drinkingImage from '../assets/drinking.jpeg';

const DonationCategories = () => {
  // Function to handle support clicks
  const handleSupportClick = (sector) => {
    console.log(`Supporting the ${sector} sector!`);
    // Here you can define actions for each sector, such as redirecting
    // window.location.href = `/support/${sector.toLowerCase()}`;
  };

  return (
    <section id="donation-categories" className="bg-white-100 py-10 px-4">
      <h2 className="text-4xl font-bold text-center text-pantone-green mb-8">Make a Difference Today</h2>
      <p className="text-center text-lg text-gray-700 mb-12">
        At Itoko Aid, we believe that together we can uplift our community. Choose a cause close to your heart and make a lasting impact in the lives of those in need.
      </p>
      <div className="flex justify-center gap-8">
        {/* Education Sector */}
        <div className="program-item transition-transform transform hover:scale-105 duration-300 max-w-xs">
          <img src={schoolImage} alt="Education for Every Child" className="w-full h-56 object-cover rounded-lg shadow-lg" />
          <div className="program-content bg-white p-6 rounded-lg shadow-md text-center mt-4">
            <h3 className="text-2xl font-semibold text-pantone-1775">Education Sector</h3>
            <p className="text-gray-600 mt-2">
              Help us provide quality education to children who need it the most. Your support will build schools, provide resources, and train teachers.
            </p>
            <button
              className="mt-4 bg-pantone-555c text-white py-2 px-6 rounded hover:bg-pantone-1775 transition duration-300"
              onClick={() => handleSupportClick('Education')}
            >
              Support This Sector
            </button>
          </div>
        </div>

        {/* Medical Sector */}
        <div className="program-item transition-transform transform hover:scale-105 duration-300 max-w-xs">
          <img src={helpImage} alt="Make Life Easier for Them" className="w-full h-56 object-cover rounded-lg shadow-lg" />
          <div className="program-content bg-white p-6 rounded-lg shadow-md text-center mt-4">
            <h3 className="text-2xl font-semibold text-pantone-1775">Medical Sector</h3>
            <p className="text-gray-600 mt-2">
              Provide medical care and life-saving treatments for underserved communities. Every dollar can bring healing to those in pain.
            </p>
            <button
              className="mt-4 bg-pantone-555c text-white py-2 px-6 rounded hover:bg-pantone-1775 transition duration-300"
              onClick={() => handleSupportClick('Medical')}
            >
              Support This Sector
            </button>
          </div>
        </div>

        {/* Helping Kids Sector */}
        <div className="program-item transition-transform transform hover:scale-105 duration-300 max-w-xs">
          <img src={dedicatingImage} alt="Dedicating to Helping Kids" className="w-full h-56 object-cover rounded-lg shadow-lg" />
          <div className="program-content bg-white p-6 rounded-lg shadow-md text-center mt-4">
            <h3 className="text-2xl font-semibold text-pantone-1775">Helping Kids Sector</h3>
            <p className="text-gray-600 mt-2">
              Ensure that every child has access to nutritious meals, clothing, and a safe environment to grow and thrive. Let’s give them a brighter future.
            </p>
            <button
              className="mt-4 bg-pantone-555c text-white py-2 px-6 rounded hover:bg-pantone-1775 transition duration-300"
              onClick={() => handleSupportClick('Helping Kids')}
            >
              Support This Sector
            </button>
          </div>
        </div>

        {/* Well-being Sector */}
        <div className="program-item transition-transform transform hover:scale-105 duration-300 max-w-xs">
          <img src={drinkingImage} alt="Clean Water for Them" className="w-full h-56 object-cover rounded-lg shadow-lg" />
          <div className="program-content bg-white p-6 rounded-lg shadow-md text-center mt-4">
            <h3 className="text-2xl font-semibold text-pantone-1775">Well-being Sector</h3>
            <p className="text-gray-600 mt-2">
              Access to clean water is a basic human right. With your help, we can bring clean and safe drinking water to entire communities.
            </p>
            <button
              className="mt-4 bg-pantone-555c text-white py-2 px-6 rounded hover:bg-pantone-1775 transition duration-300"
              onClick={() => handleSupportClick('Well-being')}
            >
              Support This Sector
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCategories;
