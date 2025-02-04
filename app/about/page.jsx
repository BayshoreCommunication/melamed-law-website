import AboutDetails from "@/components/about-us/AboutDetails";
import GoogleMapSection from "@/components/about-us/GoogleMapSection";
import ProfessionalLawGroup from "@/components/about-us/ProfessionalLawGroup";
import LatedAndGretest from "@/components/home/LatedAndGretest";
import PageHeroSection from "@/components/shared/PageHeroSection";

export const metadata = {
  title: `Windstorm Damage Claims lawyer in florida | Hurricane and Storm Damage Insurance Claims Florida Lawyer | Florida Property Damage Experts
| Melamed Law PLLC | best public adjuster in florida |`,
  description: `Melamed Law PLLC provides expert legal representation for Windstorm Damage Claims in Florida. As trusted Florida Property Damage Experts, we specialize in Hurricane and Storm Damage Insurance Claims. Whether you need a loss adjuster in Aventura, Florida, or the best public adjuster in Florida, our team is here to secure the compensation you deserve.`,
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
      {/* <PageHeroSection
        image={"/assets/shared/aboutpage.jpg"}
        title={"About Us"}
        description={
          "When the unexpected happens, we help individuals and businesses collect the money they deserve for their insurance claims."
        }
      /> */}
      {/* <ProfessionalLawGroup /> */}
      <div className="mt-10 lg:mt-12">
        <AboutDetails />
      </div>
      {/* <LatedAndGretest />
      <GoogleMapSection /> */}
    </>
  );
};

export default page;
