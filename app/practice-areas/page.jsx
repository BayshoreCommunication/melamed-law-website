import LatedAndGretest from "@/components/home/LatedAndGretest";
import AreasPractice from "@/components/practice-area/AreasPractice";
import PageHeroSection from "@/components/shared/PageHeroSection";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: `Residential Home Property Damage Claims Attorney | Hurricane Damage Claims Attorney in ojus, fl |  Melamed Law PLLC |  Florida Insurance Claims Attorney | Insurance attorney in Aventura, Florida`,
  description: `Melamed Law PLLC specializes in Residential Home Property Damage Claims, offering expert legal representation for hurricane damage claims in Ojus, FL. As a trusted Florida Insurance Claims Attorney and Insurance Attorney in Aventura, Florida, we’re dedicated to protecting your rights and ensuring fair settlements. Contact us today for personalized support!`,
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
    <div>
      <PageHeroSection
        image={"/assets/shared/practicesareapage.jpg"}
        title={"Practice Areas"}
        description={
          "When the unexpected happens, we help individuals and businesses collect the money they deserve for their insurance claims."
        }
      />
      <AreasPractice />
      <LatedAndGretest />
    </div>
  );
};

export default page;
