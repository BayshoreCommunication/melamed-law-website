import Image from "next/image";
import React from "react";
import HeaderForm from "../shared/HeaderForm";
import SectionLayout from "../shared/SectionLayout";

const TestimonialsHeader = () => {
  return (
    <div>
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[750px]">
        <Image
          src="/assets/shared/testimonials-bg.png"
          alt="testimonials Bg"
          layout="fill"
          objectFit="cover"
          className="z-0 object-top"
        />

        <div className="absolute inset-0 flex justify-center items-center z-10">
          <h2 className="text-white font-semibold text-3xl md:text-5xl lg:text-[80px] text-center uppercase drop-shadow-[1px_0_10px_#000000]">
            Testimonials
          </h2>
        </div>
        <div className="absolute -bottom-52 right-[12%] hidden lg:block">
          <HeaderForm className="bg-white" />
        </div>
      </div>
      <div className="block md:hidden">
        <SectionLayout>
          <HeaderForm className="bg-white max-w-[500px]" />
        </SectionLayout>
      </div>
    </div>
  );
};

export default TestimonialsHeader;
