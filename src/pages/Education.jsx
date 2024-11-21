import React, { useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import school1 from "../assets/school1.jpg";
import school3 from "../assets/school3.jpg";

const Education = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    amount: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    securityCode: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const {
      first_name,
      last_name,
      email_address,
      phone_number,
      amount,
      cardNumber,
      expiryMonth,
      expiryYear,
      securityCode,
    } = formData;

    const data = {
      service_payload: {
        first_name,
        last_name,
        email_address,
        phone_number,
        amount: parseFloat(amount),
        transaction_reference: "RuxsXYCEBGHTEFIKKCDTICDEFCX", // Generate unique reference for production
        currency: "USD", // Use appropriate currency
        description: "Donation for Education",
        card: {
          expiryMonth,
          expiryYear,
          securityCode,
          cardNumber,
        },
        callback_url:
          "https://webhook.site/ed6dd427-dfcf-44a3-8fa7-4cc1ab55e029",
      },
    };

    const config = {
      method: "post",
      url: "https://cards-live.78financials.com/card_charge/",
      headers: {
        Authorization:
          "Payaza UFo3OC1QS0xJVkUtRjMwODcwNUMtRkY2NC00MEJCLTg1OUUtM0ZCQUI4MTJBNzdC",
        "Content-Type": "application/json",
      },
      data,
    };

    try {
      const response = await axios.request(config);
      setMessage("Payment successful! Thank you for your contribution.");
    } catch (error) {
      setMessage("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

        <h2 className="text-2xl font-semibold text-center text-primary mb-6">
          Make a Secure Payment
        </h2>

        <form
          className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-2xl"
          onSubmit={handleSubmit}
        >
          {/* Form Fields */}
          {[
            { label: "First Name", name: "first_name", type: "text" },
            { label: "Last Name", name: "last_name", type: "text" },
            { label: "Email Address", name: "email_address", type: "email" },
            { label: "Phone Number", name: "phone_number", type: "tel" },
            { label: "Amount (₦)", name: "amount", type: "number" },
            { label: "Card Number", name: "cardNumber", type: "text" },
          ].map(({ label, name, type }) => (
            <div className="mb-4" key={name}>
              <label htmlFor={name} className="block font-medium mb-2">
                {label}
              </label>
              <input
                type={type}
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          ))}

          <div className="flex gap-4 mb-4">
            {[
              { label: "Expiry Month", name: "expiryMonth", placeholder: "MM" },
              { label: "Expiry Year", name: "expiryYear", placeholder: "YYYY" },
            ].map(({ label, name, placeholder }) => (
              <div key={name} className="w-1/2">
                <label htmlFor={name} className="block font-medium mb-2">
                  {label}
                </label>
                <input
                  type="text"
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
            ))}
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
              maxLength="3"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition"
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>

        {message && (
          <p
            className={`text-center mt-4 ${
              message.includes("successful") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </section>
    </div>
  );
};

export default Education;
