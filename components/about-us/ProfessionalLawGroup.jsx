import Image from "next/image";
import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const aboutData = [
  {
    title: "Who We Are",
    content:
      "We Have A Strong Understanding Of How Insurance Companies Operate. We Help Clients With New, Delayed, Underpaid, And Denied Insurance Claims. Our Attorneys And Full Team Of Experts Are The Only Professionals That You Need For Your Claim.",
    image: "/assets/aboutpage/imageone.jpg",
  },
  {
    title: "Our Mission",
    content:
      "Our Mission Is To Help People Whose Lives Or Businesses Have Been Disrupted By Property Damage From An Insured Event. We Do This Through Strategic And Aggressive Claim Management So Clients Can Recover A Fair Settlement, Fix Their Damage, And Get Back To Normal.",
    image: "/assets/aboutpage/imagetwo.jpg",
  },
  {
    title: "Our Clients",
    content:
      "Our Clients Include People, Businesses And Organizations Who Have Suffered An Insured Loss And Who Want To Be Treated Fairly By Their Insurance Company So That They Can Recover The Money To Which They Are Entitled Under Their Insurance Policy. Our Clients Are Property Owners, Business Owners, Mortgage Lenders, Investors, And Associations. We Even Assist Public Adjusters.",
    image: "/assets/aboutpage/imagethree.jpg",
  },
];

const ProfessionalLawGroup = () => {
  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20">
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <h2 className="font-black text-3xl md:text-5xl text-black text-center ">
            About The Professional Law Group
          </h2>
        </ScrollMotionEffect>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
          {aboutData?.map((el, index) => (
            <ScrollMotionEffect effect="fade-up" duration="2000" key={index}>
              <div>
                <Image
                  src={el?.image}
                  className="mx-auto"
                  width={500}
                  height={500}
                  alt="David Carter"
                />
                <h2 className="font-black text-xl md:text-2xl text-black text-center mt-5">
                  {el?.title}
                </h2>
                <p className="mt-2 md:mt-3 text-[16px] md:text-[20px] font-normal text-black  text-center leading-tight max-w-[800px]">
                  {el?.content}
                </p>
              </div>
            </ScrollMotionEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalLawGroup;
