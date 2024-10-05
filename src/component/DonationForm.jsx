import React, { useState } from 'react';
import charityImage from '../assets/charity.jpg'; // Adjust the path to where your image is located
import './DonationForm.css'; // Ensure this path is correct

const DonationForm = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Define the donation categories
  const categories = [
    { value: "education", label: "Education Sector" },
    { value: "medical", label: "Medical Sector" },
    { value: "helpingKids", label: "Helping Kids Sector" },
    { value: "wellBeing", label: "Well-being Sector" },
  ];

  return (
    <section id="donate" className="section-padding bg-green-50 py-10">
      <h2 className="text-4xl font-bold text-center mb-6 animate__animated animate__fadeInDown">Donate and Make a Difference</h2>
      <p className="text-center max-w-3xl mx-auto mb-10 text-gray-700">
        Your support can transform a community. Whether it’s providing education, healthcare, or clean water, every contribution makes a big impact.
      </p>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center gap-8 group">
        <div
          className="flex-shrink-0 w-full md:w-1/2 h-full md:h-[600px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={charityImage}
            alt="Charity"
            className={`w-full h-full object-cover rounded-lg shadow-lg transition duration-500 transform ${isHovered ? 'bounce-active' : ''}`}
          />
        </div>
        <form
          className="donation-form w-full md:w-1/2 h-full md:h-[600px] bg-[#001A72] p-8 rounded-lg shadow-lg transition duration-500 transform hover:scale-110 flex flex-col justify-between"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-lg text-white">Full Name:</label>
            <input type="text" id="name" name="name" required className="w-full p-3 mb-4 border rounded" />

            <label htmlFor="email" className="block mb-2 text-lg text-white">Email Address:</label>
            <input type="email" id="email" name="email" required className="w-full p-3 mb-4 border rounded" />

            <label htmlFor="amount" className="block mb-2 text-lg text-white">Donation Amount:</label>
            <input type="number" id="amount" name="amount" required className="w-full p-3 mb-4 border rounded" />

            {/* Donation Category Dropdown */}
            <label htmlFor="category" className="block mb-2 text-lg text-white">Donation Category:</label>
            <select
              id="category"
              name="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 mb-4 border rounded"
              required
            >
              <option value="" disabled>Select a category</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <label htmlFor="message" className="block mb-2 text-lg text-white">Message (Optional):</label>
            <textarea id="message" name="message" className="w-full p-3 mb-4 border rounded"></textarea>
          </div>

          {/* Centering the button */}
          <div className="flex justify-center">
            <button type="submit" className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600 transition duration-300">
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DonationForm;
