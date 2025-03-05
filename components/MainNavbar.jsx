"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { LuUser2 } from "react-icons/lu";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Orbitron } from "next/font/google";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

import Image from "next/image";
import { areaspracticeData } from "@/config/data";

const orbitron = Orbitron({ subsets: ["latin"] });

// Debounce function to limit the rate of calling the handleScroll function
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

const MainNavbar = () => {
  useEffect(() => {
    var prevScrollpos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = window.scrollY;

      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
      } else {
        document.querySelector(".navbar").style.top = "-200px";
      }
      prevScrollpos = currentScrollPos;
    };
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const menuItems = useMemo(
    () => [
      { title: "Home", slug: "/" },
      { title: "About Us", slug: "/about" },
      { title: "Practice Areas", slug: "/practice-areas" },
      // { title: "Se Habla Español", slug: "" },
      { title: "Testimonials", slug: "/testimonials" },
      { title: "Blog", slug: "/blog" },
    ],
    []
  );

  const navLogoList = useMemo(
    () => [
      { title: "Home", slug: "/" },
      { title: "About Us", slug: "/about" },
      { title: "Practice Areas", slug: "/practice-areas" },
      // { title: "Se Habla Español", slug: "" },
      { title: "Testimonials", slug: "" },
      { title: "Blog", slug: "/blog" },
    ],
    []
  );

  const handleScroll = useCallback(
    debounce(() => {
      setNavbarColor(window.scrollY >= 100);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const setPathSlug = areaspracticeData?.some(
    (el) => pathname === `/practice-areas/${el?.slug}`
  );

  return (
    <section className={"relative z-50 "}>
      <div className="bg-primary w-full navbar ">
        {/* <div className="hidden lg:block">
          <div className="container flex justify-between">
            <div className="bg-secondary  py-2 px-5">
              <p className="text-white text-[10px]  xl:text-lg">
                Call For A Free Consultation
              </p>
              <div className="flex items-center gap-x-2">
                <BsTelephoneForwardFill className="text-white size-4 xl:size-5" />
                <h6 className="text-white font-bold text-base  xl:text-2xl">
                  954-529-0695
                </h6>
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-4">
              <div className="flex items-center gap-x-1">
                <HiOutlineMail className="text-white size-4 xl:size-6" />
                <h6 className="text-white font-normal text-base xl:text-lg">
                  {` info@melamedlaw.com`}
                </h6>
              </div>
              <div className="flex items-center gap-x-1">
                <IoLocationSharp className="text-white size-4 xl:size-6" />
                <h6 className="text-white font-normal text-base xl:text-lg">
                  {` 3040 NE 190th St APT 303, Aventura, FL 33180, United States`}
                </h6>
              </div>
            </div>
          </div>
        </div> */}
        <div className="bg-white hidden md:block">
          <div className="flex items-center container  justify-between">
            <div className=" flex items-center gap-x-10 2xl:gap-x-16">
              <Link href={"/"}>
                <Image
                  src="/assets/site-logo/logo.png"
                  alt="footer logo"
                  width={500}
                  height={500}
                  className="cursor-pointer w-[180px] xl:w-[300px]  h-auto mt-2 mb-2"
                />
              </Link>
            </div>

            <div className="">
              <div className="flex items-center justify-stretch gap-x-2  xl:gap-x-8">
                {menuItems.map((el, index) =>
                  el?.title === "Practice Areas" ? (
                    <div
                      key={index}
                      className="relative inline-block"
                      onMouseEnter={toggleDropdown}
                      onMouseLeave={toggleDropdown}
                    >
                      <div className="group">
                        <div className="flex items-center gap-1 ">
                          <Link
                            href={el?.slug}
                            // className={`flex text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black ${pathname === el?.slug ? "border-b-2 border-solid border-[#0B7788] text-[#0B7788]" : ""}`}
                            className={`flex items-center gap-x-1 cursor-pointer text-black text-sm xl:text-[16px] font-medium capitalize hover:text-secondary ${pathname === el.slug || setPathSlug ? " border border-secondary rounded-full text-secondary py-1 lg:py-2 px-2 lg:px-5" : ""} `}
                          >
                            Practice Areas
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className={`size-4 font-black transform transition-transform duration-200 ${isDropdownVisible ? "rotate-0" : "rotate-180"}`}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </Link>
                        </div>
                        {/* <div className="absolute hidden group-hover:block bg-white shadow-lg rounded p-6  overflow-y-scroll w-[300px] max-h-[400px]">
                          <ul className="py-2 list-none ml-0">
                            {areaspracticeData?.map((el, index) => (
                              <li key={index}>
                                <Link
                                  href={`/practice-areas/${el.slug}`}
                                  className={`py-2 flex  text-base xl:text-[16px] hover:text-secondary  ${pathname === `/practice-areas/${el?.slug}` ? " text-secondary " : "text-slate-900"}`}
                                >
                                  {el.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={el.slug}
                      href={`${el.slug}`}
                      className={`cursor-pointer text-black text-sm xl:text-[16px] font-medium capitalize hover:text-secondary ${pathname === el.slug ? " border border-secondary rounded-full text-secondary py-1 lg:py-2 px-2 lg:px-5" : ""} `}
                    >
                      {el.title}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="">
              {/* <Link
                href={"/contact"}
                className="text-white font-normal text-lg bg-secondary px-2 xl:px-16 py-2 xl:py-4 rounded-full hover:bg-orange-400"
              >
                Contact Us
              </Link> */}
              <div className="bg-secondary  py-2  md:px-1 lg:px-1 xl:px-2">
                <Link
                  href="tel:954-529-0695"
                  className="flex flex-col justify-center"
                >
                  <p className="text-white text-[6px]  xl:text-[12px] text-center">
                    CONTACT US FOR A FREE CONSULTATION <br />
                    (Se Habla Español)
                  </p>
                  <div className="flex items-center justify-center gap-x-0 xl:gap-x-2">
                    <BsTelephoneForwardFill className="text-white size-4  xl:size-5" />
                    <h6 className="text-white font-bold text-sm lg:text-base xl:text-xl">
                      954-529-0695
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden ">
          <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={`!mx-0 !px-0 pb-0 pt-0  md:pb-3 md:pt-4 bg-white`}
          >
            <NavbarContent>
              <NavbarBrand>
                <Link href="/">
                  <Image
                    src="/assets/site-logo/logo.png"
                    alt="footer logo"
                    width={500}
                    height={500}
                    className="w-[200px] h-auto"
                  />
                </Link>
              </NavbarBrand>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden text-black"
              />
            </NavbarContent>

            <NavbarMenu className="overflow-hidden">
              {menuItems.map((el, index) => (
                <NavbarMenuItem key={el.slug} className="flex flex-row">
                  <Link
                    className={`w-full text-black text-center !text-xl font-medium py-1 ${pathname === el.slug ? "!text-primary" : ""} ${index === 0 ? "mt-6" : ""}`}
                    href={el.slug}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {el.title}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
        </div>
      </div>
    </section>
  );
};

export default MainNavbar;
