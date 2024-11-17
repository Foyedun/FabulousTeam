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

        {/* Donation Form */}
        <form className="w-full mx-auto bg-white p-6 rounded-lg shadow-2xl">
  <div className="mb-4">
    <label htmlFor="name" className="block font-medium mb-2">
      Full Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="w-full p-2 border rounded-lg"
      placeholder="Your Name"
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
      className="w-full p-2 border rounded-lg"
      placeholder="Your Email"
      required
    />
  </div>

  <div className="mb-4">
    <label htmlFor="phone" className="block font-medium mb-2">
      Phone Number
    </label>
    <div className="flex gap-2">
      <select
        id="countryCode"
        name="countryCode"
        className="w-1/4 p-2 border rounded-lg"
        required
      >
        <option value="+1">+1 (USA & Canada)</option>
        <option value="+234">+234 (Nigeria)</option>
        <option value="+254">+254 (Kenya)</option>
        <option value="+256">+256 (Uganda)</option>
        <option value="+7">+7 (Russia)</option>
        <option value="+34">+34 (Spain)</option>
        <option value="+40">+40 (Romania)</option>
        <option value="+45">+45 (Denmark)</option>
        <option value="+233">+233 (Ghana)</option>
        <option value="+27">+27 (South Africa)</option>
        <option value="+250">+250 (Rwanda)</option>
        <option value="+91">+91 (India)</option>
        <option value="+221">+221 (Senegal)</option>
        <option value="+54">+54 (Argentina)</option>
        <option value="+52">+52 (Mexico)</option>
        <option value="+57">+57 (Colombia)</option>
        <option value="+86">+86 (China)</option>
        <option value="+255">+255 (Tanzania)</option>
        <option value="+20">+20 (Egypt)</option>
        <option value="+212">+212 (Morocco)</option>
        <option value="+223">+223 (Mali)</option>
        <option value="+265">+265 (Malawi)</option>
        <option value="+237">+237 (Cameroon)</option>
        <option value="+250">+250 (Burundi)</option>
        <option value="+263">+263 (Zimbabwe)</option>
        <option value="+44">+44 (UK)</option>
        <option value="+33">+33 (France)</option>
        <option value="+49">+49 (Germany)</option>
        <option value="+81">+81 (Japan)</option>
        <option value="+61">+61 (Australia)</option>
        <option value="+39">+39 (Italy)</option>
      </select>
      <input
        type="tel"
        id="phone"
        name="phone"
        className="w-3/4 p-2 border rounded-lg"
        placeholder="Your Phone Number"
        required
      />
    </div>
  </div>

  <div className="mb-4">
    <label htmlFor="address" className="block font-medium mb-2">
      Address
    </label>
    <input
      type="text"
      id="address"
      name="address"
      className="w-full p-2 border rounded-lg"
      placeholder="Your Address"
      required
    />
  </div>

  <div className="mb-4">
    <label htmlFor="donationAmount" className="block font-medium mb-2">
      Donation Amount
    </label>
    <input
      type="number"
      id="donationAmount"
      name="donationAmount"
      className="w-full p-2 border rounded-lg"
      placeholder="Enter Amount"
      required
    />
  </div>

  <button
    type="submit"
    className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition"
  >
    Donate Now
  </button>
</form>

      </section>
    </div>
  );
};

export default Medical;