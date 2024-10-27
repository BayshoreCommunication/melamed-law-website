import HeroSection from "@/components/home/HeroSection";
import ProfileSection from "@/components/profile/ProfileSection";
import CallToAction from "@/components/shared/CallToAction";
import FAQ from "@/components/shared/FAQ";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title> Profile - Carter Injury Law </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`At Carter Injury Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients. `}
        />
      </Head>
      <HeroSection />
      <ProfileSection />
      <FAQ />
      <CallToAction />
    </>
  );
};

export default page;
