// import HeroSection from "@/components/home/HeroSection";
import HeroSection from "@/components/home/HeroSection";
import CallToAction from "@/components/shared/CallToAction";
import TermsOfService from "@/components/terms-of-service/TermsOfService";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - Carter Injury Law, Esq.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`At Carter Injury Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients. `}
        />
      </Head>
      <HeroSection />
      <TermsOfService />
      <CallToAction />
    </>
  );
};

export default page;
