import CallToAction from "@/components/shared/CallToAction";
import TestimonialsHeader from "@/components/testimonials/TestimonialsHeader";
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
      <TestimonialsHeader />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
};

export default page;
