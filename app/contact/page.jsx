import ContactHeroSection from "@/components/contact-us/ContactHeroSection";
import GoogleMapSection from "@/components/contact-us/GoogleMapSection";
import CallToAction from "@/components/shared/CallToAction";
import Head from "next/head";

export const metadata = {
  title: "Melamed Law",
  description:
    "At Melamed Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients. Every client gets the personal cell phone number of the attorney.",
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
      <ContactHeroSection />
      <GoogleMapSection />
      <CallToAction />
    </>
  );
};

export default page;
