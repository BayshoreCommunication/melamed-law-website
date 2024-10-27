import ContactHeroSection from "@/components/contact-us/ContactHeroSection";
import GoogleMapSection from "@/components/contact-us/GoogleMapSection";
import AchievementSection from "@/components/shared/AchievementSection";
import CallToAction from "@/components/shared/CallToAction";
import TestimonialSlideSection from "@/components/shared/TestimonialSlideSection";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>Contact - Carter Injury Law</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="At Carter Injury Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients. "
        />
      </Head>
      <ContactHeroSection />
      <GoogleMapSection />
      <AchievementSection />
      <TestimonialSlideSection className={" d my-0 md:my-0 shadow-none"} />
      <CallToAction />
    </>
  );
};

export default page;
