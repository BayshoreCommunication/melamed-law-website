import AboutDetails from "@/components/about-us/AboutDetails";
import GoogleMapSection from "@/components/about-us/GoogleMapSection";
import ProfessionalLawGroup from "@/components/about-us/ProfessionalLawGroup";
import LatedAndGretest from "@/components/home/LatedAndGretest";
import PageHeroSection from "@/components/shared/PageHeroSection";

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
      <PageHeroSection
        image={"/assets/shared/aboutpage.jpg"}
        title={"About Us"}
        description={
          "When the unexpected happens, we help individuals and businesses collect the money they deserve for their insurance claims."
        }
      />
      <ProfessionalLawGroup />
      <AboutDetails />
      <LatedAndGretest />
      <GoogleMapSection />
    </>
  );
};

export default page;
