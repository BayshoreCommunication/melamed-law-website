"use client";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import Link from "next/link";
import { allServiceData } from "../../config/serviceData"; // import the service data
import { Cinzel } from "next/font/google";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import parse from "html-react-parser";
import { usePathname } from "next/navigation";

const cinzel = Cinzel({ subsets: ["latin"] });

const css = `
 h1, h2, p, br, nav {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: normal;
}

h1, h2 {
  font-style: blog;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 25px;
}

p {
  font-size: 17px;
  padding-top: 6px;
  padding-bottom: 6px;
}

ul {
  list-style-type: disc;
  margin-left: 30px;
}

`;

const PracticeAreaMain = () => {
  const pathname = usePathname();
  return (
    <div>
      <style>{css}</style>
      <SectionLayout>
        <div className="flex flex-col xl:flex-row gap-6 lg:gap-10">
          <div className="w-full xl:w-[60%] ">
            {allServiceData.map((service, index) => (
              <div key={index}> {parse(service?.details)}</div>
            ))}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default PracticeAreaMain;
