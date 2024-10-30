"use client";
import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center">
      <Image
        className="absolute inset-0 object-cover bg-bottom w-full h-full"
        width={1920}
        height={700}
        src={"/assets/homepage/header-bg.png"}
        alt="Bg Image "
      />

      {/* Centered text */}

      <div className="container relative flex flex-col items-center justify-center w-full ">
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <h1 className="mt-4 md:mt-10 text-[40px] md:text-[85px] font-bold text-white text-center leading-snug md:leading-tight">
            Property <span className="bg-secondary px-2 py-0">Damaged</span> By
            <br /> Hurricane Helene?
          </h1>
        </ScrollMotionEffect>
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <h2 className="mt-4 md:mt-6 text-[20px] md:text-[25px] font-semibold text-white text-center leading-tight">
            Let Us Help You Get The Compensation You Deserve
          </h2>
        </ScrollMotionEffect>
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="mt-12">
            <Link
              href={"/appointment"}
              className="text-white font-normal text-md md:text-lg bg-secondary px-8 md:px-16 py-4 rounded-full hover:bg-orange-400"
            >
              Schedule A Free Case Review
            </Link>
          </div>
        </ScrollMotionEffect>
      </div>
    </div>
  );
};

export default memo(HeroSection);
