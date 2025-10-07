"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const HeroSection = () => {
  const [showTitleOne, setShowTitleOne] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitleOne((prev) => !prev);
    }, 3000); // Switch titles every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center">
      <Image
        className="absolute inset-0 object-cover bg-bottom w-full h-full"
        width={1920}
        height={700}
        src={"/assets/homepage/header-bg.jpg"}
        alt="Bg Image "
      />

      {/* Centered text */}

      <div className="container relative flex flex-col items-center justify-center w-full ">
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <h1 className="mt-4 md:mt-10 text-[40px] md:text-[85px] font-bold text-white text-center leading-snug md:leading-tight">
            Property <span className="bg-secondary px-2 py-0">Damaged</span> By
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-3">
            <h1 className="text-[40px] md:text-[85px] font-bold text-white text-center leading-snug md:leading-tight">
              Hurricane
            </h1>
            <div className="relative w-[150px] md:w-[300px] h-[48px] md:h-[100px] overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                {showTitleOne ? (
                  <motion.h1
                    key="titleOne"
                    className="absolute inset-0 flex items-center text-[40px] md:text-[85px] font-bold text-secondary leading-snug md:leading-tight"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{
                      y: { type: "spring", stiffness: 70, damping: 15 },
                      opacity: { duration: 0.4, ease: "easeInOut" },
                    }}
                  >
                    Helene
                  </motion.h1>
                ) : (
                  <motion.h1
                    key="titleTwo"
                    className="absolute inset-0 flex items-center text-[40px] md:text-[85px] font-bold text-secondary leading-snug md:leading-tight"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{
                      y: { type: "spring", stiffness: 70, damping: 15 },
                      opacity: { duration: 0.4, ease: "easeInOut" },
                    }}
                  >
                    Milton
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>
            <h1 className="text-[40px] md:text-[85px] font-bold text-white text-center leading-snug md:leading-tight">
              ?
            </h1>
          </div>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-up" duration="2000">
          <h2 className="mt-4 md:mt-6 text-[20px] md:text-[25px] font-semibold text-white text-center leading-tight">
            Let Us Help You Get The Compensation You Deserve
          </h2>
        </ScrollMotionEffect>
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="mt-12 flex justify-center z-50">
            <Link
              href={"/contact"}
              // href={"/appointment"}
              className="text-white font-normal text-md md:text-lg bg-secondary px-8 md:px-16 py-4 rounded-full hover:bg-orange-400  cursor-pointer"
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
