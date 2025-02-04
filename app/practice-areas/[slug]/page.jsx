import React from "react";
import parse from "html-react-parser";
import { Link } from "@nextui-org/react";
import SectionLayout from "@/components/shared/SectionLayout";
import Head from "next/head";
import { notFound } from "next/navigation";
import PracticeAreaSidebarCard from "@/components/practice-area/PracticeAreaSidebarCard";
import { servicesData, areaspracticeData } from "@/config/data";

import CallToAction from "@/components/shared/CallToAction";
import PageHeroSectionforBlog from "@/components/shared/PageHeroSectionforBlog";

const css = `
  h1{
    font-size: 40px;
    font-weight: 900;
    padding-top: 10px;
  }
  h2{
    padding-top: 10px;
    font-size: 26px;
    font-weight: 700;
  }
  p{
    padding-top: 2px;
    padding-bottom: 2px;
  }
  ul{
    list-style-type: disc;
    margin-left: 30px;
    
  }
  li{
    padding-top: 5px;
    padding-bottom: 5px;
  }
  br{
    padding-top: 1px;
    padding-bottom: 1px;
}
nav{
  padding-top: 12px;
}

`;

export async function generateMetadata({ params }) {
  const metaData = servicesData?.filter(
    (service) => service.slug === params.slug,
  );
  return {
    title: metaData[0].sortTitle,
    description: metaData[0].shortDescription,
    openGraph: {
      title: metaData[0].sortTitle,
      description: metaData[0].shortDescription,
      images: [metaData[0].url],
      url: `https://www.melamedlawpllc.com/practice-areas/${metaData[0]?.slug}`,
      type: "article",
      site_name: "Melamed Law",
    },
  };
}

const page = async ({ params }) => {
  const servicesDetails = servicesData?.filter(
    (service) => service.slug === params.slug,
  );

  if (!servicesDetails || servicesDetails.length === 0) {
    notFound();
  }
  // console.log("services", areaspracticeData);
  return (
    <>
      <Head>
        <title>{servicesDetails[0]?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </Head>

      <style>{css}</style>

      <PageHeroSectionforBlog
        image={servicesDetails[0]?.url}
        title={servicesDetails[0]?.title}
        description={
          "When the unexpected happens, we help individuals and businesses collect the money they deserve for their insurance claims."
        }
        calanderOff={true}
      />

      <section className="bg-white">
        <div className="container py-10 md:py-20">
          {servicesDetails?.map((services, index) => (
            <div key={index} className="">
              <div className="mt-5 text-base">
                {parse(services?.description)}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default page;
