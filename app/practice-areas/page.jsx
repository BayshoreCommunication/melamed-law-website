import LatedAndGretest from "@/components/home/LatedAndGretest";
import AreasPractice from "@/components/practice-area/AreasPractice";
import PageHeroSection from "@/components/shared/PageHeroSection";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <div>
      <Head>
        <title>About The Firm - Carter Injury Law - </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`At Carter Injury Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients. `}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
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
