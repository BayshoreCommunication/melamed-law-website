// import PracticeAreaHeader from "@/components/practice-area/PracticeAreaHeader";
// import PracticeAreaMain from "@/components/practice-area/PracticeAreaMain";
// import CallToAction from "@/components/shared/CallToAction";
// import Head from "next/head";
// import React from "react";

// const page = () => {
//   return (
//     <>
//       <Head>
//         <title>Practice Areas - Carter Injury Law</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta
//           name="description"
//           content={`At Carter Injury Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients.`}
//         />
//       </Head>
//       <PracticeAreaHeader />
//       <PracticeAreaMain />
//       <CallToAction />
//     </>
//   );
// };

// export default page;

import React from "react";
import parse from "html-react-parser";
import { Link } from "@nextui-org/react";
import SectionLayout from "@/components/shared/SectionLayout";
import Head from "next/head";
import { notFound } from "next/navigation";
import PracticeAreaHeader from "@/components/practice-area/PracticeAreaHeader";
import { allServiceData } from "@/config/serviceData";
import PracticeAreaSidebarCard from "@/components/practice-area/PracticeAreaSidebarCard";
import PracticeAreaDetailsHeader from "@/components/practice-area/PracticeAreaDetailsHeader";

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

const page = async ({ params }) => {
  const servicesDetails = allServiceData?.filter(
    (service) => service.slug === params.slug
  );

  if (!servicesDetails || servicesDetails.length === 0) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{servicesDetails[0]?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </Head>
      <style>{css}</style>
      <PracticeAreaDetailsHeader title={servicesDetails[0]?.title} />
      <div>
        <SectionLayout bg="bg-white">
          <div className="grid gap-16 gird-col-1 sm:grid-cols-3">
            {servicesDetails?.map((services, index) => (
              <div className="col-span-2">
                <div className="mt-5 text-base">{parse(services?.details)}</div>
              </div>
            ))}

            <div className="hidden md:block">
              <PracticeAreaSidebarCard allServiceData={allServiceData} />
            </div>
          </div>
        </SectionLayout>
      </div>
    </>
  );
};

export default page;
