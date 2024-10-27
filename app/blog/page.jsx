import React from "react";

import GetAllPostData from "@/lib/GetAllPostData";

import Head from "next/head";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogMainSection from "@/components/blog/BlogMainSection";
import CallToAction from "@/components/shared/CallToAction";

const page = async () => {
  const blogPostData = await GetAllPostData();

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <>
      <Head>
        <title>Blog - Carter Injury Law</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`At Carter Injury Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients. `}
        />
      </Head>
      <BlogHeroSection />
      <BlogMainSection blogPostData={blogPostData} />
      <CallToAction />
    </>
  );
};

export default page;
