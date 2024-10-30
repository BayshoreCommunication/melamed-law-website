import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import LatedAndGretest from "@/components/home/LatedAndGretest";
import LegalPracticeAreas from "@/components/home/LegalPracticeAreas";
import NewsSection from "@/components/home/NewsSection";
import ToOurClients from "@/components/home/ToOurClients";
import WhatPeopleSay from "@/components/home/WhatPeopleSay";
import CallToAction from "@/components/shared/CallToAction";
import Link from "next/link";

import { FaTools } from "react-icons/fa";

export default function Home() {
  return (
    <main className="w-full">
      {/* <HeroSection />
      <AboutSection />
      <LegalPracticeAreas />
      <ToOurClients />
      <WhatPeopleSay />
      <CallToAction />
      <NewsSection />
      <LatedAndGretest /> */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <div className="text-yellow-500 animate-bounce text-6xl mb-4 flex justify-center">
            <FaTools />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Site Under Construction
          </h1>
          <p className="text-gray-600 mb-6">
            {`We’re working hard to bring you a great experience. Please check
            back soon!`}
          </p>
          <Link
            href="mailto:info@melamedlaw.com"
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
