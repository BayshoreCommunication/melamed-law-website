import AboutDetails from "@/components/about-us/AboutDetails";
import GoogleMapSection from "@/components/about-us/GoogleMapSection";
import ProfessionalLawGroup from "@/components/about-us/ProfessionalLawGroup";
import LatedAndGretest from "@/components/home/LatedAndGretest";
import PageHeroSection from "@/components/shared/PageHeroSection";

import Head from "next/head";

const page = () => {
  return (
    <>
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
        image={"/assets/shared/aboutpage.jpg"}
        title={"About Us"}
        description={
          "When the unexpected happens, we help individuals and businesses collect the money they deserve for their insurance claims."
        }
      />
      <ProfessionalLawGroup />
      <AboutDetails />
      <LatedAndGretest />
      <GoogleMapSection />
    </>
  );
};

export default page;
