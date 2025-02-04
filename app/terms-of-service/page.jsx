// import HeroSection from "@/components/home/HeroSection";
import HeroSection from "@/components/home/HeroSection";
import CallToAction from "@/components/shared/CallToAction";
import TermsOfService from "@/components/terms-of-service/TermsOfService";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: `Residential Home Property Damage Claims Attorney | Hurricane Damage Claims Attorney in ojus, fl  |  Expert Hurricane Damage Claim law firm in Florida`,
  description: `Need a Residential Home Property Damage Claims Attorney? Our Hurricane Damage Claims Attorney in Ojus, FL specializes in providing expert legal assistance for hurricane-related property damage. As an Expert Hurricane Damage Claim law firm in Florida, we offer dedicated representation to help you secure the compensation you deserve. Contact us today for a consultation`,
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
      <HeroSection />
      <TermsOfService />
      <CallToAction />
    </>
  );
};

export default page;
