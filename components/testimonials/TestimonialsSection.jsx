import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { testimonialsData } from "../../config/testimonialsData";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const TestimonialsSection = () => {
  return (
    <div className=" mt-6 md:mt-10 lg:mt-44">
      <SectionLayout>
        <div className=" w-full md:w-[60%] me-auto mb-6 lg:mb-10">
          <h2 className="text-stone-950 !font-semibold text-3xl md:text-5xl mb-1 lg:mb-3 ">
            What our clients say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <ScrollMotionEffect effect="fade-up" duration="2000">
              <div
                key={index}
                className="bg-white p-6 md:p-8 lg:p-10 rounded-lg drop-shadow-[0px_0_5px_#595959] text-center"
              >
                <p className="text-lg font-semibold text-gray-700 mb-4">
                  {testimonial.review}
                </p>
                <div className="text-yellow-500 mb-2 text-xl">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="font-semibold text-gray-900 text-xl">
                  {testimonial.name}
                </p>
              </div>
            </ScrollMotionEffect>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default TestimonialsSection;
