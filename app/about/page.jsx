import AboutOurFirm from "@/components/about-us/AboutOurFirm";
import TeamSection from "@/components/about-us/TeamSection";
import HeroSection from "@/components/home/HeroSection";
import AchievementSection from "@/components/shared/AchievementSection";
import CallToAction from "@/components/shared/CallToAction";
import PracticeAreasSection from "@/components/shared/PracticeAreasSection";
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
      <HeroSection />
      <AboutOurFirm />
      <PracticeAreasSection />
      <AchievementSection />
      <TeamSection />
      <CallToAction />
    </>
  );
};

export default page;
