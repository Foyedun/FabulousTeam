import React from "react";
import drinking from "../assets/drinking.jpeg"; 
import water1 from "../assets/water1.jpg";
import Header from "../component/Header";

const WellbeingSector = () => {
  return (
    <div>
      <Header />

      {/* Main Content */}
      <section className="px-4 pt-[120px] pb-[30px] md:px-12 lg:px-24">
        {/* Heading and Intro Paragraph */}
        <h1 className="text-3xl font-bold text-center mb-4 text-primary">
          Wellbeing for All
        </h1>
        <p className="text-center text-lg mb-8">
          Adebowale Abo Aba faces numerous challenges related to healthcare,
          hygiene, and basic living conditions. But with the support of
          individuals like you, we can bring vital improvements to health
          services, sanitation, and overall wellbeing. Join us in supporting
          initiatives that enhance the lives of everyone in our community.
        </p>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <img
            src={drinking}
            alt="Wellbeing Support"
            className="w-full md:w-1/2 rounded-lg"
          />
          <img
            src={water1}
            alt="Healthcare and Hygiene"
            className="w-full md:w-1/2 rounded-lg"
          />
        </div>

        {/* Donation Call to Action */}
        <h1 className="text-2xl font-semibold text-center mb-4 text-primary">
          Make a Difference in Wellbeing
        </h1>
        <p className="text-center mb-2">
          Your donation can provide essential healthcare, improve sanitation
          facilities, and provide nutritional support to the people of Adebowale
          Abo Aba. Together, we can create a healthier and happier community for
          all.
        </p>
        <p className="text-center mb-8 pt-10 text-primary font-bold">
          Fill out the form below to help us improve lives through better
          wellbeing.
        </p>
        {/* Payment Form */}
        <h2 className="text-2xl font-semibold text-center text-primary mb-6">
          Make a Secure Payment
        </h2>
        <form className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-2xl">
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="first_name"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter First Name"
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="last_name"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter Last Name"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email_address"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter Email Address"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phone" className="block font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone_number"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter Phone Number"
              required
            />
          </div>

          {/* Amount */}
          <div className="mb-4">
            <label htmlFor="amount" className="block font-medium mb-2">
              Amount (₦)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter Amount"
              required
            />
          </div>

          {/* Card Details */}
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block font-medium mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="card_number"
              className="w-full p-2 border rounded-lg"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          {/* Expiry Date */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="expiryMonth" className="block font-medium mb-2">
                Expiry Month
              </label>
              <input
                type="text"
                id="expiryMonth"
                name="expiry_month"
                className="w-full p-2 border rounded-lg"
                placeholder="MM"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="expiryYear" className="block font-medium mb-2">
                Expiry Year
              </label>
              <input
                type="text"
                id="expiryYear"
                name="expiry_year"
                className="w-full p-2 border rounded-lg"
                placeholder="YYYY"
                required
              />
            </div>
          </div>

          {/* Security Code */}
          <div className="mb-4">
            <label htmlFor="securityCode" className="block font-medium mb-2">
              Security Code (CVV)
            </label>
            <input
              type="text"
              id="securityCode"
              name="security_code"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter CVV"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition"
          >
            Pay Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default WellbeingSector;
