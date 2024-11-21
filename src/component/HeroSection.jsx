import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import background from "../assets/background.png";

const HeroSection = () => {
  const writeUps = [
    "JOIN us in uplifting lives in Abo-Aba by supporting critical projects in education, healthcare, and community well-being. Together, we can build a brighter tomorrow. With your help, we can break barriers, create opportunities, and build a better future for those in need.",
    "Together, we can break barriers and create opportunities for underprivileged communities. Support critical initiatives that ensure education, healthcare, and well-being for a brighter future.",
    "Empower Abo-Aba with your contributions. Help us provide resources for education, health, and community development. Let’s make a difference together.",
    "Support lives and create a legacy of hope and care in Abo-Aba. Join hands to uplift those in need with education and healthcare resources.",
  ];

  const [currentWriteUp, setCurrentWriteUp] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWriteUp((prev) => (prev + 1) % writeUps.length); 
    }, 12000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="md:rounded-bl-[20%] md:rounded-br-[20%] bg-black pt-[100px] pb-10 lg:pb-0">
      <motion.div
        className="container grid lg:grid-cols-[55%_45%] items-center gap-10"
        key={currentWriteUp} 
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        <div className="pb-10">
          <h1 className="text-[20px] pt-[40px] font-semibold text-4xl md:text-[30px] text-white md:leading-snug">
            <span className="text-primary">
              {writeUps[currentWriteUp].split(" ")[0]}
            </span>{" "}
            {writeUps[currentWriteUp].split(" ").slice(1).join(" ")}
          </h1>
        </div>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <img src={background} alt="community help" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
