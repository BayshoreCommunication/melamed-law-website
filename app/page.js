import AboutSection from "@/components/home/AboutSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import LatedAndGretest from "@/components/home/LatedAndGretest";
import LegalPracticeAreas from "@/components/home/LegalPracticeAreas";
import NewsSection from "@/components/home/NewsSection";
import ToOurClients from "@/components/home/ToOurClients";
import WhatPeopleSay from "@/components/home/WhatPeopleSay";
import AchievementSection from "@/components/shared/AchievementSection";
import CallToAction from "@/components/shared/CallToAction";
import PracticeAreasSection from "@/components/shared/PracticeAreasSection";
import TestimonialSlideSection from "@/components/shared/TestimonialSlideSection";

export default function Home() {
  return (
    <main className="w-full">
      {/* hero section  */}
      <HeroSection />
      <AboutSection />
      <LegalPracticeAreas />
      <ToOurClients />
      <WhatPeopleSay />
      <CallToAction />
      <NewsSection />
      <LatedAndGretest />
    </main>
  );
}
