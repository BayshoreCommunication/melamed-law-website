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

const ContactHeroSection = () => {
  return (
    <div className="bg-[#1E2538]">
      <SectionLayout>
        <div className="flex flex-col lg:flex-row text-white items-center gap-8">
          <div className="w-full flex-1 ">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl mb-2">
                    $20 Billion
                  </h2>
                  <h4 className=" text-xl md:text-2xl lg:text-3xl">
                    Recovered for Clients
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
                      <PiPhoneCallFill color="#EC1D21" size="24" />{" "}
                      <span>(813) 922-0228,</span>
                      <span>(727) 955-1922</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <IoMdHome color="#EC1D21" size="24" />
                      <span>3114 N. BOULEVARD TAMPA, FL 33603</span>
                    </li>
                  </ul>
                  <div className="text-white flex gap-2 mt-6">
                    <Link
                      href="https://www.facebook.com/CarterInjuryLaw/"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/carter-injury-law/"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                    >
                      <FaLinkedinIn />
                    </Link>
                    <Link
                      href="https://x.com/CarterInjuryLaw"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      href="https://www.instagram.com/carterinjurylaw/"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      href="https://www.youtube.com/@CarterInjuryLaw"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
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
              {" "}
              <ContactSection />
            </ScrollMotionEffect>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default ContactHeroSection;
