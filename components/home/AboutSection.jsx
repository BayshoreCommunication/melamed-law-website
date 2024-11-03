import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const AboutSection = () => {
  return (
    <section className="bg-white">
      <div className="container mt-8 md:mt-36 mb-6 md:mb-20">
        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="flex flex-col gap-y-6">
            <h1 className="font-black text-4xl md:text-5xl text-primary text-center">
              Welcome to Melamed Law
            </h1>
            <p className="text-md md:text-lg text-[#55545A] text-center">
              {`Melamed Law represents homeowners and business owners throughout the state of Florida and provides professional legal services for Residential and Commercial Property Damage as well as other types of insurance claims.`}
            </p>
            <p className="text-md md:text-lg text-[#55545A] text-center">
              {`Contact us today to schedule an appointment.
              Your legal matters are important to us. We can help you achieve the best possible outcome for your situation. The firm prides itself on being able to support clients with a diverse number of problems.`}
            </p>

            <div className="py-4 flex justify-center ">
              <Link
                href={"/about"}
                className="text-white font-normal text-lg bg-secondary px-8 py-3 rounded-full hover:bg-orange-400"
              >
                More About Us
              </Link>
            </div>
          </div>
        </ScrollMotionEffect>
        {/* <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center md:justify-start gap-x-6 gap-y-5 xl:gap-x-16 md:mt-[-50px] mt-[16px]">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <div className="mt-10 md:mt-0">
              <div className="video-container rounded-3xl overflow-hidden border-4 border-secondary">
                <iframe
                  src={`https://www.youtube.com/embed/Zoyqx6B6v1o?si=8Dgos67WSxV-j6s-`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title=" Devit Carter"
                  loading="lazy"
                  className="w-full h-64 md:h-96 "
                ></iframe>
              </div>
            </div>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <div className="flex flex-col gap-y-6">
              <h1 className="font-black text-4xl md:text-5xl text-primary text-center md:text-left">
                Welcome to Melamed Law
              </h1>
              <p className="text-md md:text-lg text-[#55545A] text-center md:text-left">
                {`Melamed Law, conveniently located in South Florida, provides professional legal representation for Residential and Commercial Property Damage as well as Insurance Claims. Contact us today to schedule an appointment.`}
              </p>
              <p className="text-md md:text-lg text-[#55545A] text-center md:text-left">
                {`Your legal matters are important to us. We can help you achieve the best possible outcome for your situation. The firm prides itself on being able to support clients with a diverse number of problems.`}
              </p>

              <div className="py-4 flex justify-center md:justify-start">
                <Link
                  href={"/about"}
                  className="text-white font-normal text-lg bg-secondary px-8 py-3 rounded-full hover:bg-orange-400"
                >
                  More About Us
                </Link>
              </div>
            </div>
          </ScrollMotionEffect>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
