import CallToAction from "@/components/shared/CallToAction";
import PageHeroSection from "@/components/shared/PageHeroSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "Melamed Law",
  description:
    "At Melamed Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients. Every client gets the personal cell phone number of the attorney.",
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
