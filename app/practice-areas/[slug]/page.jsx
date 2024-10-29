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
import { areaspracticeData, servicesData } from "@/config/data";
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

const page = async ({ params }) => {
  const servicesDetails = areaspracticeData?.filter(
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

      <PageHeroSectionforBlog
        image={servicesDetails[0]?.url}
        title={servicesDetails[0]?.title}
        description={
          "When the unexpected happens, we help individuals and businesses collect the money they deserve for their insurance claims."
        }
      />

      <section className="bg-white">
        <div className="container py-10 md:py-20">
          {servicesDetails?.map((services, index) => (
            <div className="">
              {/* <div className="mt-5 text-base">{parse(services?.details)}</div> */}
              {/* <div className="mt-5 text-base">{services?.description}</div> */}
              <div className="">
                <div className="md:flex md:space-x-6">
                  {/* Left Content Section */}
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      The US H-1B visa is a non-immigrant visa that allows US
                      companies to employ graduate-level workers in specialty
                      occupations that require theoretical or technical
                      expertise in specialized fields such as IT, finance,
                      accounting, architecture, engineering, mathematics,
                      science, medicine, etc. Any professional level job
                      requires you to have a bachelor’s degree or higher. If you
                      do not have a bachelor’s degree or higher you may be able
                      to show degree equivalence through work experience and/or
                      other qualifications.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      However, because of the visa cap it is unlikely that an
                      H-1B visa petition will be successful. The US employer
                      petitions for the H-1B Visa in the US which has a duration
                      of up to 6 years.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Applying for a non-immigrant visa is generally quicker
                      than applying for a US Green Card; therefore, the H-1B
                      visa is popular for companies wishing to bring in staff
                      for long-term assignment in the US.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Please note that individuals cannot apply directly for an
                      H-1B visa. Instead the employer must petition for entry of
                      the employee.
                    </p>
                  </div>

                  {/* Right Image Section */}
                  <div className="md:w-1/3 mt-6 md:mt-0">
                    <img
                      className="rounded-lg shadow-md"
                      src="/assets/areaspractice/Frame 4.jpg"
                      alt="Overview"
                    />
                  </div>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                    Eligibility: Specialty Occupation
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The US H-1B visa is designed to be used for staff in
                    specialty occupations. The job must meet one of the
                    following criteria to qualify as a specialty occupation:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
                    <li>
                      Have a minimum entry requirement of a Bachelor’s or higher
                      degree or its equivalent.
                    </li>
                    <li>
                      The degree requirement for the job is common to the
                      industry or the job is so complex or unique that it can be
                      performed only by an individual with a degree.
                    </li>
                    <li>
                      The employer normally requires a degree or its equivalent
                      for the position.
                    </li>
                    <li>
                      The nature of the specific duties is so specialized and
                      complex that the knowledge required to perform the duties
                      is usually associated with the attainment of a bachelor’s
                      or higher degree.
                    </li>
                  </ul>
                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                    Length of stay
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The H-1B visa is initially granted for up to three years,
                    but may then be extended to a maximum of six years.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Even though the H-1B visa is a non-immigrant visa, it is one
                    of the few US visa categories recognized as dual intent,
                    meaning the H-1B visa holder can apply for and obtain a US
                    Green Card while in the US on an H-1B visa. If you are in
                    the US on an H-1B visa and wish to remain in the US for more
                    than six years, you can apply for permanent residency in the
                    US to receive a Green Card. If you do not gain permanent
                    residency prior to the expiration of your H-1B visa, then
                    you must live outside the US for at least one year before
                    reapplying for another H-1B visa.
                  </p>
                </div>
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
