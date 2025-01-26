import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const AboutDetails = () => {
  return (
    <div className="relative w-full h-auto min-h-svh flex items-center justify-center">
      <Image
        className="absolute inset-0 object-cover bg-bottom w-full h-full"
        width={1920}
        height={700}
        src={"/assets/aboutpage/aboutbg.jpg"}
        alt="Page Hero Image"
      />

      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <div className="container py-10 md:py-20">
          <div className="flex md:flex-row flex-col items-center justify-between gap-5">
            <div className="flex-1">
              <ScrollMotionEffect effect="fade-right" duration="2000">
                <Image
                  src={"/assets/aboutpage/melamed-law.jpg"}
                  className="mx-auto"
                  width={500}
                  height={500}
                  alt="David Carter"
                />
              </ScrollMotionEffect>
            </div>
            <div className="flex-1">
              <ScrollMotionEffect effect="fade-left" duration="2000">
                <p className="text-white py-2 text-center md:text-left">
                  {`Aaron D. Melamed, Esq. is an experienced attorney with an extensive background in residential and commercial property damage insurance litigation. Throughout his career, he has vigorously and effectively represented and counseled policyholders, homeowners, business owners, and mitigation/restoration companies in all aspects of their claims and lawsuits against insurance carriers.  His focus is centered around his clients' needs, maintaining communication, and providing productive insight throughout the entire claims process and ensuing litigation. Prior to founding Melamed Law, PLLC, Aaron worked as a litigation attorney at a Plaintiffs' law firm where he helped hundreds of clients throughout Florida recover their damages and resolve their claims against local and national insurance companies.`}
                </p>
              </ScrollMotionEffect>

              <ScrollMotionEffect effect="fade-left" duration="2000">
                <p className="text-white py-2 text-center md:text-left">
                  {`Mr. Melamed was born and raised in North Miami Beach, Florida.  He obtained his B.A. in Political Science from DePaul University in Chicago, Illinois while interning at the Cook County State's Attorney's Office – Real Estate Tax Division.  Aaron earned his J.D. from Western Michigan University – Thomas M. Cooley Law School and graduated Cum Laude.  During law school, he served as judicial intern for 13th Circuit Court Judge Christopher C. Sabella in the felony division.`}
                </p>
              </ScrollMotionEffect>

              <ScrollMotionEffect effect="fade-left" duration="2000">
                <p className="text-white py-2 text-center md:text-left">
                  {`In his spare time, Aaron enjoys traveling, playing drums, guitar, and piano, and spending time with his family and friends.`}
                </p>
              </ScrollMotionEffect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
