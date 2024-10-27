import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { Edu_VIC_WA_NT_Beginner } from "next/font/google";

const edu = Edu_VIC_WA_NT_Beginner({ subsets: ["latin"] });
const AboutOurFirm = () => {
  return (
    <div className="mt-10 lg:mt-14">
      <div bg="container w-full lg:max-w-[60%] mx-auto pb-2">
        <h2
          className={`text-stone-950 !font-semibold text-3xl md:text-5xl mt-10 lg:mt-20 mb-10  text-center  uppercase`}
        >
          About Our Firm
        </h2>
      </div>
      <div className="shadow-[rgba(0,0,0,.5)_0px_0px_30px] mb-8">
        <SectionLayout>
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-stone-950  text-2xl md:text-3xl  mb-2">
                To our clients:
              </p>
              <h3 className="text-stone-950  text-2xl md:text-4xl font-semibold  ">
                You’re not just a number.
              </h3>
            </div>
            <p
              className={`text-stone-950  text-xl md:text-3xl ${edu.className} `}
            >
              At Carter Injury Law, you’re family. We offer open lines of
              communication to foster personal relationships and optimize case
              outcomes for our clients. Every client gets the personal cell
              phone number of the attorney.
            </p>
            <p
              className={`text-stone-950  text-xl md:text-3xl ${edu.className} `}
            >
              Above all else, we fight for you. Our goals are to take the stress
              of your injury off of you, to make sure all your questions are
              answered and you feel as comfortable as possible about the
              process, and to aggressively pursue maximum financial compensation
              for your case.
            </p>
            <div className="mt-6 flex justify-end  ">
              <Image
                src="/assets/aboutpage/david-carter-signature.png"
                alt="david-carter-signature"
                width={200}
                height={80}
                className="w-1/3 lg:w-full max-w-[180px]"
              />
            </div>
          </div>
        </SectionLayout>
      </div>
    </div>
  );
};

export default AboutOurFirm;
