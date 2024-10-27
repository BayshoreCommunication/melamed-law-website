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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  const menuItems = useMemo(
    () => [
      { title: "Home", slug: "/" },
      { title: "Areas of practice", slug: "areas-of-practice" },
      { title: "About Us", slug: "/about" },
      { title: "Testimonials", slug: "/testimonials" },
      { title: "Blog", slug: "/blog" },
    ],
    []
  );

  const navLogoList = useMemo(
    () => [{ title: "Areas of practice", url: "" }],
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

  return (
    <section className={"relative z-50"}>
      <div className="bg-primary">
        <div className="hidden md:block">
          {" "}
          <div className="container flex justify-between">
            <div className="bg-secondary  py-2 px-5 ">
              <p className="text-white text-[12px]  2xl:text-lg">
                Call For A Free Consultation
              </p>
              <div className="flex items-center gap-x-2">
                <BsTelephoneForwardFill className="text-white size-5" />
                <h6 className="text-white font-bold text-2xl">954-529-0695</h6>
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-4">
              <div className="flex items-center gap-x-1">
                <HiOutlineMail className="text-white size-6" />
                <h6 className="text-white font-normal text-lg">
                  {` info@melamedlaw.com`}
                </h6>
              </div>
              <div className="flex items-center gap-x-1">
                <IoLocationSharp className="text-white size-5" />
                <h6 className="text-white font-normal text-lg">
                  {` 20200 West Dixie Highway, Suite 902 Aventura, FL 33180`}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-3 hidden md:block">
          <div className="flex items-center container mx-auto justify-between">
            <div className="flex items-center gap-x-10 2xl:gap-x-16">
              <Link href={"/"}>
                <Image
                  src="/assets/site-logo/logo.png"
                  alt="footer logo"
                  width={500}
                  height={500}
                  className="cursor-pointer w-[300px]  h-auto"
                />
              </Link>
            </div>

            <div className="">
              <div className="flex items-center justify-end gap-x-4  xl:gap-x-8">
                {menuItems.map((el) => (
                  <Link
                    key={el.slug}
                    href={el.slug}
                    className={`cursor-pointer text-black text-md md:text-[16px] font-medium capitalize ${pathname === el.slug ? " border border-secondary rounded-full text-secondary py-2 px-5" : ""} `}
                  >
                    {el.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="">
              <Link
                href={"/"}
                className="text-white font-normal text-lg bg-secondary px-16 py-4 rounded-full hover:bg-orange-400"
              >
                Contact Us
              </Link>
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

export default React.memo(MainNavbar);
