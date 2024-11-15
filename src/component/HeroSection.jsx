
import React from 'react'
import { Link } from 'react-router-dom';
import background from "../assets/background.png";

const HeroSection = () => {
  return (
    <section className="md:rounded-bl-[20%] md:rounded-br-[20%] bg-black pt-[100px] pb-10 lg:pb-0">
      <div className="container grid lg:grid-cols-[55%_45%] items-center gap-10">
        <div className="pb-10">
          <h1 className="font-semibold text-4xl md:text-[30px] text-white md:leading-snug">
            <span className="text-primary">JOIN </span> us in uplifting lives in
            Abo-Aba by supporting critical projects in education, healthcare,
            and community well-being. Together, we can build a brighter
            tomorrow. With your help, we can break barriers, create
            opportunities, and build a better future for those in need.
          </h1>
        </div>
        <div>
          <img src={background} alt="community help" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection
