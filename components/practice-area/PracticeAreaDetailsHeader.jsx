import Image from "next/image";
import React from "react";
import HeaderForm from "../shared/HeaderForm";
import SectionLayout from "../shared/SectionLayout";

const PracticeAreaDetailsHeader = ({ title }) => {
  return (
    <div className="">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[750px]">
        <Image
          src="/assets/shared/practice-area-bg.png"
          alt="testimonials Bg"
          layout="fill"
          objectFit="cover"
          className="z-0 object-top"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2
            className={`text-white font-semibold text-3xl md:text-5xl lg:text-[80px]  text-center uppercase drop-shadow-[1px_0_10px_#000000]`}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaDetailsHeader;
