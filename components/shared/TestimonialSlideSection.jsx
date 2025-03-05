"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { testimonialsData } from "@/config/data";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const TestimonialSlideSection = ({ className }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevButtonRef.current;
      swiperInstance.params.navigation.nextEl = nextButtonRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className={`my-6 md:my-8 ${className}`}>
      <div className="flex items-center gap-4">
        <button
          ref={prevButtonRef}
          className="text-white hover:text-gray-100 p-3 border border-white rounded-full"
        >
          <FaArrowLeft size={20} />
        </button>
        <Swiper
          ref={swiperRef}
          // cssMode={true}
          // mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          // navigation
          className="mySwiper w-full"
          spaceBetween={20}
          slidesPerView={1}
          autoplay={true}
          loop={true}
          grabCursor={true}
        >
          {[...testimonialsData].reverse().map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 md:p-8 lg:p-10  text-center  ">
                <p className="text-base md:text-lg font-semibold text-white mb-4">
                  {testimonial.review}
                </p>
                <div className="text-yellow-500 mb-2 text-xl">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="font-semibold text-white text-lg md:text-xl">
                  {testimonial.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={nextButtonRef}
          className="text-white hover:text-gray-100 p-3 border border-white rounded-full"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlideSection;
