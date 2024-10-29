import SectionLayout from "./SectionLayout";
import { PiPhoneCallFill } from "react-icons/pi";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Link from "next/link";
import { BsTelephoneForwardFill } from "react-icons/bs";

const CallToAction = () => {
  return (
    <section className="w-full bg-primary">
      <div className="container py-10 md:py-20">
        <div className="flex flex-col  items-center justify-center lg:flex-row md:justify-between gap-4">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h2
              className={`text-white font-semibold text-2xl md:text-4xl text-center lg:text-start uppercasetext-center md:text-left`}
            >
              Let Melamed Law Lead the Way—
            </h2>
            <p className="text-white font-normal text-lg md:text-xl mt-2 text-center md:text-left">
              Contact Us for Trusted Guidance!
            </p>
          </ScrollMotionEffect>

          <div className="w-fit">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <Link
                href="tel:954-529-0695"
                className="text-white font-normal text-lg bg-secondary px-12 py-2 rounded-full hover:bg-orange-400 w-full flex flex-col justify-center"
              >
                <p className="text-white text-[12px]  2xl:text-md">
                  Call For A Free Consultation
                </p>
                <div className="flex items-center gap-x-2 mt-[-8px]">
                  <BsTelephoneForwardFill className="text-white size-4" />
                  <h6 className="text-white font-bold text-lg">954-529-0695</h6>
                </div>
              </Link>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
