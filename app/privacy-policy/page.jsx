import HeroSection from "@/components/home/HeroSection";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
import CallToAction from "@/components/shared/CallToAction";
import Head from "next/head";

export const metadata = {
  title: `Florida Insurance Claims Attorney | Insurance attorney in Aventura, Florida | Best windstorm damage insurance attorney florida | Experienced windstorm damage claim attoreny florida |`,
  description: `Looking for a Florida Insurance Claims Attorney? Our expert Insurance attorney in Aventura, Florida specializes in handling windstorm damage claims. As one of the Best windstorm damage insurance attorneys in Florida, we offer experienced legal support to ensure your claims are handled with care and precision. Contact us today to speak with an Experienced windstorm damage claim attorney in Florida.`,
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
const page = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Carter Injury Law</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="At Carter Injury Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients. "
        />
      </Head>
      <HeroSection />
      <PrivacyPolicy />
      <CallToAction />
    </>
  );
};

export default page;
