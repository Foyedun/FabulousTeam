import React, { useState } from "react";
import axios from "axios";
import Header from "../component/Header";
import health from "../assets/health.jpg";
import healthissue from "../assets/healthissue.jpg";

const Medical = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    amount: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    securityCode: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const {
      firstName,
      lastName,
      email,
      phone,
      amount,
      cardNumber,
      expiryMonth,
      expiryYear,
      securityCode,
    } = formData;

    const data = {
      service_payload: {
        first_name: firstName,
        last_name: lastName,
        email_address: email,
        phone_number: phone,
        amount: parseFloat(amount),
        transaction_reference: Date.now().toString(), // Unique transaction reference
        currency: "USD",
        description: "Donation Payment",
        card: {
          expiryMonth,
          expiryYear,
          securityCode,
          cardNumber,
        },
        callback_url:
          "https://webhook.site/ed6dd427-dfcf-44a3-8fa7-4cc1ab55e029", // Replace with your callback URL
      },
    };

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://cards-live.78financials.com/card_charge/",
      headers: {
        Authorization:
          "Payaza UFo3OC1QS0xJVkUtRjMwODcwNUMtRkY2NC00MEJCLTg1OUUtM0ZCQUI4MTJBNzdC",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };

    try {
      const response = await axios.request(config);
      setMessage("Payment successful! Thank you for your donation.");
      console.log("Payment Response:", response.data);
    } catch (error) {
      console.error("Payment Error:", error);
      setMessage("Payment failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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

        <h2 className="text-2xl font-semibold text-center text-primary mb-6">
          Make a Secure Payment
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-2xl"
        >
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter First Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter Last Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter Email Address"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter Phone Number"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block font-medium mb-2">
              Amount (₦)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter Amount"
              required
            />
          </div>

          {/* Payment Fields */}
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block font-medium mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="1234 5678 9012 3456"
              maxLength="16"
              required
            />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="expiryMonth" className="block font-medium mb-2">
                Expiry Month
              </label>
              <input
                type="text"
                id="expiryMonth"
                name="expiryMonth"
                value={formData.expiryMonth}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="MM"
                maxLength="2"
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
                name="expiryYear"
                value={formData.expiryYear}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="YYYY"
                maxLength="4"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="securityCode" className="block font-medium mb-2">
              Security Code (CVV)
            </label>
            <input
              type="password"
              id="securityCode"
              name="securityCode"
              value={formData.securityCode}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter CVV"
              maxLength="3"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Pay Now"}
          </button>
        </form>
        {message && (
          <p className="text-center mt-4 font-semibold text-primary">
            {message}
          </p>
        )}
      </section>
    </div>
  );
};

export default Medical;
