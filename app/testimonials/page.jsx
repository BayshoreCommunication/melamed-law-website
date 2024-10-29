import CallToAction from "@/components/shared/CallToAction";
import PageHeroSection from "@/components/shared/PageHeroSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>Testimonials - Carter Injury Law</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`At Carter Injury Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients.`}
        />
      </Head>
      <PageHeroSection
        image={"/assets/shared/testimonials.jpg"}
        title={"Testimonials"}
        description={
          "When the unexpected happens, we help individuals and businesses collect the money they deserve for their insurance claims."
        }
      />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
};

export default page;
