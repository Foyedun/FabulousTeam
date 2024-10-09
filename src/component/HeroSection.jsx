
import { Link } from "react-router-dom";
import Button from "./Button";
import shogo from "@/assets/shogooo.jpg";

const HeroSection = () => {
  return (
    <section className="md:rounded-bl-[20%] md:rounded-br-[20%] bg-primary pt-[100px] pb-10 lg:pb-0">
      <div className="container grid lg:grid-cols-[55%_45%] items-center gap-10">
        <div>
          <h1 className="font-semibold text-4xl md:text-[60px] text-white md:leading-[65px]">
            <span className="text-[#FF671F]">Empowering </span> communities
            thrive together
          </h1>
          <p className="text-white text-base font-light py-5">
            ITOKO AID is a platform designed to empower and support the
            community, offering you a chance to be a part of a positive change.
          </p>

          <Link to="#donation">
            <Button
              style={"bg-black text-white h-10 w-2/4 rounded-full md:w-1/4"}
            >
              Donate now
            </Button>
          </Link>
        </div>
        <div>
          <img src={shogo} alt="community help" />
        </div>
      </div>
      {/* "By fostering collaboration and creating opportunities for growth, we
      strive to build a sustainable future where every individual can contribute
      to the betterment of society. Together, we can overcome challenges and
      uplift those in need, ensuring a brighter tomorrow for all. */}
    </section>
  );
};

export default HeroSection;
