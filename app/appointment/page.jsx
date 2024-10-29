import Calendly from "@/components/appointment/Calendly";
import PageHeroSection from "@/components/shared/PageHeroSection";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>Appointment - Attorney Hardam Tripathi, Esq.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </Head>
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
