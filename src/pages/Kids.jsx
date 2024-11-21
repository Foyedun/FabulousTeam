import React, { useState } from "react";
import axios from "axios";
import Header from "../component/Header";
import children2 from "../assets/children2.png";
import children from "../assets/children.jpg";

const HelpingKidsSector = () => {
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

    const transactionReference = Math.random().toString(36).substring(2, 15); // Generate a random reference

    const data = {
      service_payload: {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email_address: formData.email_address,
        phone_number: formData.phone_number,
        amount: parseFloat(formData.amount),
        transaction_reference: transactionReference,
        currency: "USD",
        description: "Donation to Helping Kids",
        card: {
          expiryMonth: formData.expiryMonth,
          expiryYear: formData.expiryYear,
          securityCode: formData.securityCode,
          cardNumber: formData.cardNumber,
        },
        callback_url: "https://your-callback-url.com",
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
      console.log(response.data);
      setMessage("Payment Successful!");
    } catch (error) {
      console.error(error);
      setMessage("Payment Failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <section className="px-4 pt-[120px] pb-[30px] md:px-12 lg:px-24">
        <h1 className="text-3xl font-bold text-center mb-4 text-primary">
          Helping Kids in Need
        </h1>
        <p className="text-center text-lg mb-8">
          Every child deserves the chance to grow up in a safe, supportive
          environment where they can learn, play, and thrive.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <img
            src={children2}
            alt="Helping Kids"
            className="w-full md:w-1/2 rounded-lg"
          />
          <img
            src={children}
            alt="Support for Children"
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
          {Object.keys(formData).map((key) => (
            <div className="mb-4" key={key}>
              <label
                htmlFor={key}
                className="block font-medium mb-2 capitalize"
              >
                {key.replace(/_/g, " ")}
              </label>
              <input
                type={
                  key === "amount"
                    ? "number"
                    : key === "securityCode"
                    ? "password"
                    : "text"
                }
                id={key}
                name={key}
                className="w-full p-2 border rounded-lg"
                placeholder={`Enter ${key.replace(/_/g, " ")}`}
                value={formData[key]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
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
              message.includes("Successful") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </section>
    </div>
  );
};

export default HelpingKidsSector;
