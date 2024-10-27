import React from "react";
import SectionLayout from "./SectionLayout";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Link from "next/link";
import { allServiceData } from "@/config/serviceData";

const PracticeAreasSection = () => {
  return (
    <div>
      <SectionLayout>
        <div className="w-full lg:max-w-[60%] mx-auto">
          <h2
            className={`text-stone-950 !font-semibold text-3xl md:text-5xl mb-5 lg:mb-10  text-center uppercase`}
          >
            PRACTICE AREAS
          </h2>
        </div>
        <div className="grid grid-c7ls-1 lg:grid-cols-3 gap-4 lg:gap-8  h-full text-center">
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="p-8 rounded-2xl border-1 border-[#] flex flex-col gap-4 h-full">
              {allServiceData?.slice(0, 7).map((el, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={`/areas-of-practice/${el?.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
                  >
                    {el?.title}
                  </Link>
                  <hr className="h-[1px] my-0 bg-slate-200 border-0 w-full" />
                </React.Fragment>
              ))}
            </div>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="p-8 rounded-2xl border-1 border-[#] flex flex-col gap-4 h-full">
              {allServiceData?.slice(7, 14).map((el, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={`/areas-of-practice/${el?.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
                  >
                    {el?.title}
                  </Link>
                  <hr className="h-[1px] my-0 bg-slate-200 border-0 w-full" />
                </React.Fragment>
              ))}
            </div>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="p-8 rounded-2xl border-1 border-[#] flex flex-col gap-4 h-full">
              {allServiceData?.slice(14, 22).map((el, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={`/areas-of-practice/${el?.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
                  >
                    {el?.title}
                  </Link>
                  <hr className="h-[1px] my-0 bg-slate-200 border-0 w-full" />
                </React.Fragment>
              ))}
            </div>
          </ScrollMotionEffect>
        </div>
      </SectionLayout>
    </div>
  );
};

export default PracticeAreasSection;
