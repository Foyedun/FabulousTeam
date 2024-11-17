import React from "react";
import Header from "../component/Header";
import health from "../assets/health.jpg";
import healthissue from "../assets/healthissue.jpg";

const Medical = () => {
  return (
    <div>
      <Header />
      <section className="px-4 pt-[130px] pb-[30px] md:px-12 lg:px-24">
        <h1 className="text-3xl font-bold text-center mb-4 text-primary">
          Healthcare for All
        </h1>
        <p className="text-center text-lg mb-8">
          Access to quality healthcare is a fundamental right. Yet, many in
          Adebowale Abo Aba face significant challenges in obtaining necessary
          medical care. With your support, we aim to provide essential
          healthcare services, improve living conditions, and save lives in our
          community.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <img
            src={health}
            alt="Healthcare Services"
            className="w-full md:w-1/2 rounded-lg"
          />
          <img
            src={healthissue}
            alt="Medical Supplies"
            className="w-full md:w-1/2 rounded-lg"
          />
        </div>

        {/* Donation Call to Action */}
        <h1 className="text-2xl font-semibold text-center mb-4 text-primary">
          Help Us Improve Healthcare Access
        </h1>
        <p className="text-center mb-2">
          Your contribution will directly support life-saving healthcare
          services, medical supplies, and outreach programs for Adebowale Abo
          Aba. Together, we can make a lasting impact on health and well-being.
        </p>
        <p className="text-center mb-8 pt-10 font-bold text-primary">
          Fill out the form below to join us in transforming healthcare in our
          community.
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

export default Medical;
