import Image from "next/image";
import Link from "next/link";
import React from "react";
import TestimonialSlideSection from "../shared/TestimonialSlideSection";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const WhatPeopleSay = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[700px] lg:h-[800px] min-h-fit">
      <Image
        className="absolute inset-0 object-cover bg-center w-full h-full"
        width={1920}
        height={700}
        src="/assets/homepage/homebannerbg.jpg"
        alt="Header background"
      />

      <div className="container py-10 md:py-20">
        <div className="relative flex flex-col items-center justify-center w-full h-full">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h1 className="font-black text-4xl md:text-5xl text-white text-center md:text-left">
              What People Say
            </h1>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-left" duration="2000">
            <p className="text-md text-white max-w-[700px] text-center mt-6">
              {`Professionally handling Property Damage Claims, we’re committed to protecting both your space and your peace of mind in times of need.`}
            </p>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="mx-0 flex justify-center items-center my-10 px-2 sm:px-6 lg:px-8">
              <div className="bg-primary w-full max-w-[360px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] rounded-lg p-4 md:px-6 lg:px-8">
                <TestimonialSlideSection />
              </div>
            </div>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="mt-5">
              <Link
                href={"/testimonials"}
                className="text-secondary font-normal text-lg bg-none px-4 py-2 rounded-full hover:bg-secondary hover:text-white border-2 border-secondary  "
              >
                View All Reviews
              </Link>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;
