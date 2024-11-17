import React from "react";
import Header from "../component/Header";
import school1 from "../assets/school1.jpg";
import school3 from "../assets/school3.jpg";

const Education = () => {
  return (
    <div>
      <Header />
      <section className="px-4 pt-[120px] pb-[30px] md:px-12 lg:px-24">
        <h1 className="text-3xl font-bold text-center mb-4 text-primary">
          Education for Children
        </h1>
        <p className="text-center text-lg mb-8">
          Adebowale Abo Aba's children deserve the opportunity to learn, grow,
          and build brighter futures. Yet, limited resources and access to
          quality education present a challenge. With your support, we aim to
          change that by providing affordable, high-quality education that every
          child in our community can access.
        </p>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <img
            src={school1}
            alt="Children learning"
            className="w-full md:w-1/2 rounded-lg"
          />
          <img
            src={school3}
            alt="Classroom"
            className="w-full md:w-1/2 rounded-lg"
          />
        </div>

        {/* Donation Call to Action */}
        <h1 className="text-2xl font-semibold text-center mb-4 text-primary">
          Make a Difference Today
        </h1>
        <p className="text-center mb-2">
          Your contribution can bring lasting change to Adebowale Abo Aba. By
          supporting education, healthcare, and community well-being.
        </p>
        <p className="text-center mb-8 text-primary font-bold pt-10 ">
          Fill out the form below to join us in transforming lives.
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
              maxLength="16" // Limits the input to 3 characters
              pattern="\d{16}" // Ensures only 3 numeric digits are allowed
              title="The CVV must be exactly 16 digits"
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
                maxLength="2" // Limits the input to 3 characters
                pattern="\d{2}" // Ensures only 3 numeric digits are allowed
                title="The CVV must be exactly 2 digits"
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
                maxLength="4" // Limits the input to 3 characters
                pattern="\d{4}" // Ensures only 3 numeric digits are allowed
                title="The CVV must be exactly 4 digits"
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
              type="password" // Keeps the input hidden
              id="securityCode"
              name="security_code"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter CVV"
              maxLength="3" // Limits the input to 3 characters
              pattern="\d{3}" // Ensures only 3 numeric digits are allowed
              title="The CVV must be exactly 3 digits"
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

export default Education;
