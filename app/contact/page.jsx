import ContactHeroSection from "@/components/contact-us/ContactHeroSection";
import GoogleMapSection from "@/components/contact-us/GoogleMapSection";
import CallToAction from "@/components/shared/CallToAction";
import Head from "next/head";

export const metadata = {
  title: `Contact Melamed Law PLLC | Florida Property Damage Lawyer |  Florida Insurance Claims Attorney | Insurance attorney in Aventura, Florida`,
  description: `Contact Melamed Law PLLC, your trusted Florida Property Damage Lawyer, for expert legal representation. We specialize in property damage claims as a leading Florida Insurance Claims Attorney. If you need an experienced insurance attorney in Aventura, Florida, reach out to Melamed Law PLLC today for personalized guidance and a free consultation.`,
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
