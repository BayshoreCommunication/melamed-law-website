import Career from "@/components/career/Career";
import HeroSection from "@/components/home/HeroSection";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>Career - Carter Injury Law.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="At Carter Injury Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients. "
        />
      </Head>
      <HeroSection />
      <Career />
    </>
  );
};

export default page;
