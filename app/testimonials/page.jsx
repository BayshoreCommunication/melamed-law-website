import CallToAction from "@/components/shared/CallToAction";
import PageHeroSection from "@/components/shared/PageHeroSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: `Florida Insurance Claims & Property Damage Lawyers |  Florida Insurance Claims Attorney | Insurance attorney in Aventura, Florida`,
  description: `Melamed Law PLLC offers expert legal representation as a trusted Insurance attorney lawyer in Florida. Our team specializes in property damage cases and serves as Florida Insurance Claims & Property Damage Lawyers. If you need a dedicated Florida Insurance Claims Attorney or an insurance attorney in Aventura, Florida, contact us today for skilled and reliable legal support.`,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

const page = () => {
  return (
    <>
      <PageHeroSection
        image={"/assets/shared/testimonials.jpg"}
        title={"Testimonials"}
        description={
          "When the unexpected happens, we help individuals and businesses collect the money they deserve for their insurance claims."
        }
      />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
};

export default page;
