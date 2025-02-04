import AboutDetails from "@/components/about-us/AboutDetails";
import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import LatedAndGretest from "@/components/home/LatedAndGretest";
import LegalPracticeAreas from "@/components/home/LegalPracticeAreas";
import NewsSection from "@/components/home/NewsSection";
import ToOurClients from "@/components/home/ToOurClients";
import WhatPeopleSay from "@/components/home/WhatPeopleSay";
import CallToAction from "@/components/shared/CallToAction";

export const metadata = {
  title: `Property Damage Attorney in Florida | Insurance attorney in Ojus, Florida | property damage lawyer in ojus, florida | Melamed Law PLLC
| Florida Insurance Claims & Property Damage Lawyers | insurance bad faith attorney`,
  description: `Melamed Law PLLC is your trusted Property Damage Attorney in Florida, specializing in insurance claims. Whether you need an Insurance Attorney in Ojus, Florida, or a Property Damage Lawyer in Ojus, Florida, we’re here to help. Our Florida Insurance Claims & Property Damage Lawyers, including experienced loss adjuster lawyers in Florida, ensure your rights are protected.`,
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

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <LegalPracticeAreas />
      {/* <ToOurClients /> */}
      <WhatPeopleSay />
      <CallToAction />
      {/* <NewsSection /> */}
      <AboutDetails />
      <LatedAndGretest />
    </main>
  );
}
