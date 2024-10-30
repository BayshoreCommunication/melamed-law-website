import AboutDetails from "@/components/about-us/AboutDetails";
import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import LatedAndGretest from "@/components/home/LatedAndGretest";
import LegalPracticeAreas from "@/components/home/LegalPracticeAreas";
import NewsSection from "@/components/home/NewsSection";
import ToOurClients from "@/components/home/ToOurClients";
import WhatPeopleSay from "@/components/home/WhatPeopleSay";
import CallToAction from "@/components/shared/CallToAction";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <LegalPracticeAreas />
      {/* <ToOurClients /> */}
      {/* <WhatPeopleSay /> */}
      <CallToAction />
      {/* <NewsSection /> */}
      <AboutDetails />
      <LatedAndGretest />
    </main>
  );
}
