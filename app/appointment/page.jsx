import Calendly from "@/components/appointment/Calendly";
// import PageHeroSection from "@/components/shared/PageHeroSection";

export const metadata = {
  title: `Roof Damage Insurance Claim Lawyer |  Florida Roof Damage Insurance Claim Lawyer | Vandalism & Theft Insurance Claims Lawyer in Florida | Melamed Law PLLC | Florida Public Adjuster | public adjuster firms near me `,
  description: `Melamed Law PLLC specializes in Roof Damage Insurance Claims, offering expert legal assistance as a trusted Florida Roof Damage Insurance Claim Lawyer. We also handle Vandalism & Theft Insurance Claims across Florida. If you're looking for Florida Public Adjusters or public adjuster firms near you, contact us today for reliable representation and support`,
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
        title={"Appointment"}
        description={
          "When the unexpected happens, we help individuals and businesses collect the money they deserve for their insurance claims."
        }
      /> */}

      <Calendly />
    </>
  );
};

export default page;
