"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] });

const PracticeAreaSidebarCard = ({ allServiceData }) => {
  const pathname = usePathname();

  return (
    <div>
      {/* Practice Areas Section */}
      <div className="w-full flex flex-col gap-6 md:gap-10">
        <div className="shadow-[0_0_30px_rgba(0,0,0,0.3)] p-5 lg:p-8">
          <div className="flex items-center h-full gap-4">
            <div className="w-[30%] shrink-0">
              <Image
                src="/assets/servicepage/carter-img.png"
                alt="Carter Injury Law"
                width={150}
                height={150}
                className="w-full"
              />
            </div>
            <div>
              <h4 className="text-[30px]  lg:text-4xl xxl:text-5xl font-bold leading-none uppercase">
                We Fight
              </h4>
              <p className="text-[17px]  lg:text-xl xxl:text-2xl font-medium text-[#4E4E4E] leading-none uppercase my-1  md:my-2">
                for your rights
              </p>
              <p
                className={`text-[12px]  lg:text-lg xxl:text-xl  font-bold leading-none uppercase w-full px-2  text-white bg-[#ED1B24] text-center ${cinzel.className}`}
              >
                carter injury law, pa
              </p>
            </div>
          </div>
        </div>

        {/* Practice Areas List */}
        <div className="shadow-[0_0_30px_rgba(0,0,0,0.3)] ">
          <div className="p-8 lg:p-10">
            <h4 className="pb-1 lg:pb-3 mb-1 lg:mb-3  border-b-2 border-gray-500 uppercase font-semibold text-xl lg:text-2xl">
              PRACTICE AREAS
            </h4>
            <div className="flex flex-col h-[100%] md:h-[1600px] overflow-y-scroll overflow-x-hidden md:block">
              {allServiceData.map((service, index) => (
                <Link
                  href={`/areas-of-practice/${service.slug}`}
                  key={index}
                  className="group flex gap-3 items-start py-4 border-b"
                >
                  <Image
                    src={service.icon} // Assuming icons are stored in the assets folder
                    alt={service.title}
                    width={30}
                    height={30}
                    className="shrink-0"
                  />
                  <p
                    className={`text-xl font-medium group-hover:text-[#CE2523] duration-300 ${pathname === "/areas-of-practice/" + service?.slug ? "text-[#CE2523] " : "text-black"}`}
                  >
                    {service.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaSidebarCard;
