import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import ContactSection from "./ContactSection";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Image from "next/image";

const ContactHeroSection = () => {
  return (
    <div className="bg-[#1E2538]">
      <div className="relative w-full py-10 md:py-20 ">
        <Image
          className="absolute inset-0 object-cover bg-bottom w-full h-full opacity-65"
          src={"/assets/shared/aboutpage.jpg"}
          alt="Page Hero Image"
          layout="fill"
          priority
        />

        <div className="container relative flex flex-col items-center justify-center w-full h-full ">
          <div className="flex flex-col lg:flex-row text-white items-center gap-8">
            <div className="w-full flex-1 ">
              <ScrollMotionEffect effect="fade-right" duration="2000">
                <div className="flex flex-col gap-5">
                  <div>
                    <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl mb-2">
                      Contact Melamed
                    </h2>
                    <h4 className=" text-xl md:text-2xl lg:text-3xl">
                      Law Today
                    </h4>
                  </div>
                  <div className="video-container rounded-3xl overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/Zoyqx6B6v1o?si=8Dgos67WSxV-j6s-`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="USA Immigration Attorney Hardam Tripathi, Esq."
                      loading="lazy"
                      className="w-full h-64 md:h-96"
                    ></iframe>
                  </div>
                  <div>
                    <h3 className=" text-xl md:text-2xl font-semibold mb-2">
                      Contact us 24/7
                    </h3>
                    <ul className="flex  flex-wrap  items-center gap-3">
                      <li className="flex flex-wrap items-center gap-1">
                        <PiPhoneCallFill className="text-secondary size-6" />
                        <span>954-529-0695</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <IoMdHome className="text-secondary size-6" />
                        <span>
                          {` 20200 West Dixie Highway, Suite 902 Aventura, FL 33180`}
                        </span>
                      </li>
                    </ul>
                    <div className="text-white flex gap-2 mt-6">
                      <Link
                        href="https://www.facebook.com/CarterInjuryLaw/"
                        target="_blank"
                        className="inline-block p-2 rounded bg-secondary hover:bg-white hover:text-secondary  duration-300"
                      >
                        <FaFacebookF />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/carter-injury-law/"
                        target="_blank"
                        className="inline-block p-2 rounded bg-secondary hover:bg-white hover:text-secondary  duration-300"
                      >
                        <FaLinkedinIn />
                      </Link>
                      <Link
                        href="https://x.com/CarterInjuryLaw"
                        target="_blank"
                        className="inline-block p-2 rounded bg-secondary hover:bg-white hover:text-secondary  duration-300"
                      >
                        <FaTwitter />
                      </Link>
                      <Link
                        href="https://www.instagram.com/carterinjurylaw/"
                        target="_blank"
                        className="inline-block p-2 rounded bg-secondary hover:bg-white hover:text-secondary  duration-300"
                      >
                        <FaInstagram />
                      </Link>
                      <Link
                        href="https://www.youtube.com/@CarterInjuryLaw"
                        target="_blank"
                        className="inline-block p-2 rounded bg-secondary hover:bg-white hover:text-secondary duration-300"
                      >
                        <FaYoutube />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollMotionEffect>
            </div>
            <ScrollMotionEffect
              effect="fade-up"
              duration="2000"
            ></ScrollMotionEffect>

            <div className="w-full flex-1">
              <ScrollMotionEffect effect="fade-left" duration="2000">
                <ContactSection />
              </ScrollMotionEffect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroSection;
