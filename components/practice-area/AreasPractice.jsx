import { areaspracticeData, servicesData } from "@/config/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const AreasPractice = () => {
  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20">
        <div className="max-w-[700px] mx-auto">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h1 className="font-black text-4xl md:text-5xl text-black text-center">
              Legal Practice Areas
            </h1>
          </ScrollMotionEffect>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-10 my-10">
          {areaspracticeData?.map((el, index) => (
            <ScrollMotionEffect effect="fade-up" duration="2000" key={index}>
              <div className=" bg-white !shadow-md !rounded-md border">
                <Image
                  src={el?.url}
                  alt="Custom Icon"
                  width={500}
                  height={400}
                  className="mx-auto"
                />
                <div className="pt-2 pb-8 px-4">
                  <h1 className="font-semibold  text-2xl text-black text-center md:text-left mt-5">
                    {el?.title}
                  </h1>
                  <p className="text-md text-black text-center md:text-left mt-2 line-clamp-2 ">
                    {el?.shortTitle}
                  </p>
                  <div className="mt-8">
                    <Link
                      href={`/practice-areas/${el?.slug}`}
                      className="text-secondary font-normal text-lg bg-none px-4 py-2 rounded-full hover:bg-secondary hover:text-white border-2 border-secondary  "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollMotionEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasPractice;
