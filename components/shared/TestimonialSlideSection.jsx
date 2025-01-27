"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialSlider from "./TestimonialSlider";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SectionLayout from "./SectionLayout";

const TestimonialSlideSection = ({ className }) => {
  // Refs for navigation buttons
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <div className={`my-6 md:my-8  ${className}`}>
      <div className="flex items-center">
        {/* <button
          ref={prevButtonRef}
          className=" text-white hover:text-gray-100 p-3 border-1 border-white rounded-full"
        >
          <FaArrowLeft size={14} />
        </button> */}
        <Swiper
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onBeforeInit={(swiper) => {
            // Attach the navigation buttons to Swiper when it's initialized
            swiper.params.navigation.prevEl = prevButtonRef.current;
            swiper.params.navigation.nextEl = nextButtonRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5].map((el, index) => (
            <SwiperSlide key={index}>
              <div className="w-full lg:w-[80%] text-center mx-auto flex flex-col gap-2 lg:gap-5">
                <div className=" flex items-center justify-center">
                  <FaQuoteRight className="size-7  text-white mb-1" />
                </div>
                <div className="flex justify-center items-center mt-[-20px]">
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <span key={index} className="text-yellow-500 text-2xl">
                        &#9733;
                      </span>
                    ))}
                </div>
                <p className="text-sm md:text-md font-normal italic text-white">
                  Aaron Melamed’s negotiating/legal skills in dealing with my
                  very difficult mitigation/rebuild condo situation saved the
                  day! He is industry knowledgeable, conscientious, thorough,
                  professional, trustworthy, caring and diligent. Should I ever
                  need his services again, I would not hesitate to reach out.
                  His network of colleagues are as dependable as he is. Aaron
                  guides his client with the human touch, a rarity in today’s
                  legal world. Aaron is a lawyer who goes the extra mile in
                  every aspect, from listening & explaining, to planning and
                  proceeding. Highly recommended!
                </p>
                <div className="">
                  <h4 className="font-bold text-white text-center text-lg lg:text-xl">
                    Lisa S.
                  </h4>
                  {/* <p className="text-sm md:text-md  text-white mt-1">
                    Words cannot express
                  </p> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <button
          className=" text-white hover:text-gray-100 p-3 border-1 border-white rounded-full"
          ref={nextButtonRef}
        >
          <FaArrowRight size={14} />
        </button> */}
      </div>
    </div>
  );
};

export default TestimonialSlideSection;
