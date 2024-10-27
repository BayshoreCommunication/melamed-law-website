import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className=" w-full"
      style={{
        backgroundImage: "url('/assets/shared/header-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "auto",
      }}
    >
      <SectionLayout bg="">
        <div className="h-[65vh] flex justify-center items-center ">
          <h2
            className={`text-white !font-semibold text-3xl md:text-5xl lg:text-[80px]  text-center uppercase drop-shadow-[1px_0_10px_#000000]`}
          >
            Appointment
          </h2>
        </div>
      </SectionLayout>
    </div>
  );
};

export default HeroSection;
