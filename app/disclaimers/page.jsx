import DisclaimersTermsOfUse from "@/components/disclaimers-and-terms-of-use/privacy-policy/DisclaimersTermsOfUse";
// import HeroSection from "@/components/disclaimers-and-terms-of-use/privacy-policy/HeroSection";
import Head from "next/head";

export const metadata = {
  title: `Windstorm Damage Claims lawyer in florida | Hurricane and Storm Damage Insurance Claims Florida Lawyer  | |Experieneced Florida hurricane claims insurance attorney| Expert Hurricane Damage Claim law firm in Florida`,
  description: `Need help with your storm damage claim? Our Windstorm Damage Claims lawyer in Florida is here to fight for your rights. As an Experienced Florida hurricane claims insurance attorney, we help homeowners and businesses recover from storm losses. Trust our Expert Hurricane Damage Claim law firm in Florida to handle your case. Contact us today for a free consultation with a Hurricane and Storm Damage Insurance Claims Florida Lawyer!`,
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
      {/* <HeroSection /> */}
      <DisclaimersTermsOfUse />
    </>
  );
};

export default page;
