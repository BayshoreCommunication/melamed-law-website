import React from "react";

import GetAllPostData from "@/lib/GetAllPostData";
import Head from "next/head";
import CallToAction from "@/components/shared/CallToAction";
import PageHeroSection from "@/components/shared/PageHeroSection";
import BlogMainSection from "@/components/blog/BlogMainSection";

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
      <PageHeroSection
        image={"/assets/shared/blogs.jpg"}
        title={"Blogs"}
        description={
          "When the unexpected happens, we help individuals and businesses collect the money they deserve for their insurance claims."
        }
      />
      <BlogMainSection blogPostData={blogPostData} />
      <CallToAction />
    </>
  );
};

export default page;
