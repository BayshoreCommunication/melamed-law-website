"use client"; // Explicitly mark this component as client-side

import React from "react";
import SectionLayout from "../shared/SectionLayout";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Link from "next/link";

const ProfileSection = () => {
  return (
    <div className="shadow-[rgba(0,0,0,0.15)_0px_13px_25px] mb-16">
      <SectionLayout>
        <div className="flex flex-col gap-6 lg:gap-10">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-20">
            <div className="w-full md:w-[60%]">
              <ScrollMotionEffect effect="fade-right" duration="2000">
                <div className="mb-6">
                  <h2 className="text-stone-950 !font-light text-3xl md:text-5xl mb-1 lg:mb-3 ">
                    David Carter
                  </h2>
                  <p className="font-light text-base md:text-xl mb-3 lg:mb-6 ">
                    David Carter is a skilled personal injury lawyer with 10+
                    years of experience, dedicated to helping clients recover
                    compensation for accidents, medical malpractice, and
                    wrongful death cases. Compassionate and results-driven.
                  </p>
                  <div className="text-white flex gap-2">
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
                <div>
                  <Accordion className="w-full">
                    <AccordionItem
                      key="1"
                      aria-label="Accordion 1"
                      indicator={({ isOpen }) =>
                        isOpen ? (
                          <IoIosArrowUp
                            color="#EC1D21"
                            className="!rotate-90"
                          />
                        ) : (
                          <IoIosArrowDown color="#EC1D21" />
                        )
                      }
                      title={
                        <span className="text-lg md:text-2xl font-medium">
                          PROFILE
                        </span>
                      }
                      className="text-lg text-[#4A4A4A] "
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia,
                      </p>
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Accordion 2"
                      indicator={({ isOpen }) =>
                        isOpen ? (
                          <IoIosArrowUp
                            color="#EC1D21"
                            className="!rotate-90"
                          />
                        ) : (
                          <IoIosArrowDown color="#EC1D21" />
                        )
                      }
                      title={
                        <span className="text-lg md:text-2xl font-medium">
                          EDUCATION
                        </span>
                      }
                      className="text-lg text-[#4A4A4A] "
                    >
                      <p>
                        molestiae quas vel sint commodi repudiandae consequuntur
                        voluptatum laborum
                      </p>
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      aria-label="Accordion 3"
                      indicator={({ isOpen }) =>
                        isOpen ? (
                          <IoIosArrowUp
                            color="#EC1D21"
                            className="!rotate-90"
                          />
                        ) : (
                          <IoIosArrowDown color="#EC1D21" />
                        )
                      }
                      title={
                        <span className="text-lg md:text-2xl font-medium">
                          ADMISSION
                        </span>
                      }
                      className="text-lg text-[#4A4A4A]   "
                    >
                      <p>
                        numquam blanditiis harum quisquam eius sed odit fugiat
                        iusto fuga praesentium
                      </p>
                    </AccordionItem>
                    <AccordionItem
                      key="4"
                      aria-label="Accordion 4"
                      indicator={({ isOpen }) =>
                        isOpen ? (
                          <IoIosArrowUp
                            color="#EC1D21"
                            className="!rotate-90"
                          />
                        ) : (
                          <IoIosArrowDown color="#EC1D21" />
                        )
                      }
                      title={
                        <span className="text-lg md:text-2xl font-medium">
                          AWARDS
                        </span>
                      }
                      className="text-lg text-[#4A4A4A] "
                    >
                      <p>
                        optio, eaque rerum! Provident similique accusantium nemo
                        autem.
                      </p>
                    </AccordionItem>
                  </Accordion>
                </div>
              </ScrollMotionEffect>
            </div>
            <div className="w-full md:w-[40%] mt-24">
              <ScrollMotionEffect effect="fade-left" duration="2000">
                <Image
                  src="/assets/profilepage/certer.png"
                  className="mx-auto"
                  width={500}
                  height={500}
                  alt="David Carter"
                />
              </ScrollMotionEffect>
            </div>
          </div>
          <div className="flex  flex-col md:flex-row  gap-6 lg:gap-20">
            <div className="w-full md:w-[60%]">
              <ScrollMotionEffect effect="fade-right" duration="2000">
                <div className="mb-6">
                  <h2 className="text-stone-950 !font-light text-3xl md:text-5xl mb-1 lg:mb-3 ">
                    Robert Johnson
                  </h2>
                  <p className="font-light text-base md:text-xl mb-3 lg:mb-6 ">
                    Robert Johnson is a skilled personal injury lawyer with 10+
                    years of experience, dedicated to helping clients recover
                    compensation for accidents, medical malpractice, and
                    wrongful death cases. Compassionate and results-driven.
                  </p>
                  <div className="text-white flex gap-2">
                    <Link
                      href="https://www.facebook.com/attorneyrobertjohnsonatlaw"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      href="/https://www.linkedin.com/company/robert-j-johnson-personal-injury-attorney-at-law/"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                    >
                      <FaLinkedinIn />
                    </Link>
                    <Link
                      href="https://x.com/robjohnsonlaw"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      href="https://www.instagram.com/attorneyrobertjohnsonatlaw"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      href="https://www.youtube.com/@RobJohnson-AttorneyAtLaw"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                    >
                      <FaYoutube />
                    </Link>
                  </div>
                </div>
                <div>
                  <Accordion className="w-full">
                    <AccordionItem
                      key="1"
                      aria-label="Accordion 1"
                      indicator={({ isOpen }) =>
                        isOpen ? (
                          <IoIosArrowUp
                            color="#EC1D21"
                            className="!rotate-90"
                          />
                        ) : (
                          <IoIosArrowDown color="#EC1D21" />
                        )
                      }
                      title={
                        <span className="text-lg md:text-2xl font-medium">
                          PROFILE
                        </span>
                      }
                      className="text-lg text-[#4A4A4A] "
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia,
                      </p>
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Accordion 2"
                      indicator={({ isOpen }) =>
                        isOpen ? (
                          <IoIosArrowUp
                            color="#EC1D21"
                            className="!rotate-90"
                          />
                        ) : (
                          <IoIosArrowDown color="#EC1D21" />
                        )
                      }
                      title={
                        <span className="text-lg md:text-2xl font-medium">
                          EDUCATION
                        </span>
                      }
                      className="text-lg text-[#4A4A4A] "
                    >
                      <p>
                        molestiae quas vel sint commodi repudiandae consequuntur
                        voluptatum laborum
                      </p>
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      aria-label="Accordion 3"
                      indicator={({ isOpen }) =>
                        isOpen ? (
                          <IoIosArrowUp
                            color="#EC1D21"
                            className="!rotate-90"
                          />
                        ) : (
                          <IoIosArrowDown color="#EC1D21" />
                        )
                      }
                      title={
                        <span className="text-lg md:text-2xl font-medium">
                          ADMISSION
                        </span>
                      }
                      className="text-lg text-[#4A4A4A]   "
                    >
                      <p>
                        numquam blanditiis harum quisquam eius sed odit fugiat
                        iusto fuga praesentium
                      </p>
                    </AccordionItem>
                    <AccordionItem
                      key="4"
                      aria-label="Accordion 4"
                      indicator={({ isOpen }) =>
                        isOpen ? (
                          <IoIosArrowUp
                            color="#EC1D21"
                            className="!rotate-90"
                          />
                        ) : (
                          <IoIosArrowDown color="#EC1D21" />
                        )
                      }
                      title={
                        <span className="text-lg md:text-2xl font-medium">
                          AWARDS
                        </span>
                      }
                      className="text-lg text-[#4A4A4A] "
                    >
                      <p>
                        optio, eaque rerum! Provident similique accusantium nemo
                        autem.
                      </p>
                    </AccordionItem>
                  </Accordion>
                </div>
              </ScrollMotionEffect>
            </div>
            <div className="w-full md:w-[40%]">
              <ScrollMotionEffect effect="fade-left" duration="2000">
                <Image
                  src="/assets/profilepage/rob.png"
                  className="mx-auto"
                  width={500}
                  height={500}
                  alt="David Carter"
                />
              </ScrollMotionEffect>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default ProfileSection;
