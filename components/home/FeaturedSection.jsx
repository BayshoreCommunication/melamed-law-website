import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const FeaturedSection = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-10  lg:gap-20">
        <div className="flex flex-col lg:flex-row items-center justify-center  gap-8  lg:gap-16">
          <div className="w-full">
            <ScrollMotionEffect
              effect="fade-right"
              duration="2000"
              className="w-full"
            >
              <Image
                src="/assets/homepage/dog-bite.jpg"
                alt="Dog Bite"
                width={560}
                height={590}
                className="mx-auto"
              />
            </ScrollMotionEffect>
          </div>
          <div className="w-full ">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <div className="flex flex-col gap-4 w-full ">
                <h2 className="text-stone-950 !font-semibold text-3xl md:text-5xl mb-3  uppercase ">
                  Dog bite and need a personal injury layer
                </h2>
                <p className="text-lg text-[#55545A]">
                  Dog bite personal injury litigation involves legal
                  representation for individuals who have been injured as a
                  result of a dog attack. These cases can encompass a range of
                  injuries, from minor cuts and bruises to severe lacerations,
                  infections, and emotional trauma.
                </p>
                <p className="text-lg text-[#55545A]">
                  {`This service is for individuals in Florida who have sustained
                  injuries from dog bites, whether the attack occurred in public
                  spaces, private properties, or while interacting with a
                  neighbor’s pet. If you or a loved one has been bitten by a dog
                  and is experiencing physical and emotional distress due to the
                  incident, you deserve legal representation that understands
                  the complexities of these cases.`}
                </p>
                <div className="flex mt-1 lg:mt-5">
                  <Link
                    href={"/contact"}
                    className="text-white bg-[#EC1D21]   font-semibold rounded-lg text-sm lg:text-lg  px-4 lg:px-6 xl:px-10  py-3 text-center shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,_rgba(14,30,37,0.32)_0px_2px_16px_0px] hover:scale-105  transition duration-300"
                  >
                    CLICK FOR FREE CASE EVALUATION
                  </Link>
                </div>
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8  lg:gap-16">
          <div className="w-full">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <div className="flex flex-col gap-4 w-full ">
                <h2 className="text-stone-950 !font-semibold text-3xl md:text-5xl mb-3  uppercase ">
                  Car accident and need a personal injury layer
                </h2>
                <p className="text-lg text-[#55545A]">
                  {`Auto accident personal injury litigation involves legal
                  representation for victims injured in car accidents due to
                  another party's negligence. This service helps clients seek
                  compensation for medical expenses, lost wages, property
                  damage, and emotional suffering.`}
                </p>
                <p className="text-lg text-[#55545A]">
                  {`It is important that you consult with an attorney as soon as
                  possible after your injury to make sure your rights are
                  protected, and you do not do anything that might jeopardize
                  your case. The attorneys at Carter Injury Law, P.A. stand
                  ready to fight for you if you’ve been injured in a motor
                  vehicle accident, slip and fall, trip and fall, dog bite, or
                  any other incident in which were you were injured due to
                  another’s negligence.`}
                </p>
                <div className="flex mt-1  lg:mt-5">
                  <Link
                    href={"/contact"}
                    className="text-white bg-[#EC1D21]   font-semibold rounded-lg text-sm lg:text-lg  px-4 lg:px-6 xl:px-10  py-3 text-center shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,_rgba(14,30,37,0.32)_0px_2px_16px_0px] hover:scale-105  transition duration-300"
                  >
                    CLICK FOR FREE CASE EVALUATION
                  </Link>
                </div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="w-full ">
            <ScrollMotionEffect
              effect="fade-left"
              duration="2000"
              className="w-full"
            >
              <Image
                src="/assets/homepage/car-accident.jpg"
                alt="Dog Bite"
                width={560}
                height={590}
                className=" mx-auto"
              />
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FeaturedSection;
