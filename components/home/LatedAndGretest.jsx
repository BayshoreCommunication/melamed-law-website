"use client";
import React, { useState, useEffect } from "react";
import SectionLayout from "../shared/SectionLayout";
import { Button } from "@nextui-org/react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import CardMotion from "../motion/CardMotion";
import Image from "next/image";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin, BsTelephoneForwardFill } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import { TiHome } from "react-icons/ti";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const LatedAndGretest = () => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.message) {
      errors.message = "Question is required!";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Validate the form and set errors
    const errors = validate(emailForm);
    setFormErrors(errors);

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      send("service_21srltl", "template_regri0n", emailForm, "QQbwIXKpnJegj")
        .then((response) => {
          setLoading(false); // Stop loading
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. Your information has been successfully submitted. Our team will respond to your inquiry shortly.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setEmailForm({
              name: "",
              phone: "",
              email: "",
              message: "",
            });
          });
        })
        .catch((err) => {
          console.log("err", err);
          Swal.fire({
            icon: "error",
            text: "Something went wrong!",
          }).then(() => {
            setEmailForm({
              name: "",
              phone: "",
              email: "",
              message: "",
            });
            setLoading(false); // Stop loading
          });
        });
    } else {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section className="bg-primary">
      <div className="container py-10  md:py-20">
        <div className="max-w-[800px] mx-auto mb-10">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h1 className="font-black text-2xl md:text-5xl text-white text-center">
              SEE OUR LATEST AND GREATEST
            </h1>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-left" duration="2000">
            <p className="text-base md:text-lg text-white text-center mt-5">
              {`Professionally handling Property Damage Claims, we’re committed to protecting both your space and your peace of mind in times of need.`}
            </p>
          </ScrollMotionEffect>
        </div>
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-x-12 gap-x-0">
            <div className="">
              <Image
                src={"/assets/homepage/contactfrom.png"}
                alt="Custom Icon"
                width={600}
                height={200}
                className="w-[500px] h-auto"
              />
              <p className="text-md text-white mt-5">
                {`You may be able to reopen your claim up to five years from the date of loss, even if it has already been settled.`}
              </p>
              <div className="mt-4 mb-3">
                <h2 className="text-white font-medium text-2xl md:text-3xl text-center md:text-left">
                  Contact us 24/7
                </h2>
                <div className="flex items-center gap-x-2 mt-4 ">
                  <BsTelephoneForwardFill className="text-secondary size-4" />
                  <h6 className="text-white font-normal text-sm md:text-lg">
                    954-529-0695
                  </h6>
                </div>
                <div className="flex items-center gap-x-2 mt-2 mb-4">
                  <TiHome className="text-secondary size-4" />
                  <h6 className="text-white font-normal text-sm md:text-lg">
                    {` 20200 West Dixie Highway, Suite 902 Aventura, FL 33180`}
                  </h6>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-3 mt-6 md:mt-6 ">
                <Link
                  href="https://www.facebook.com/TripLawPA"
                  target="_blank"
                  className="hover:animate-pulse "
                >
                  <ImFacebook2 className="text-white size-8" />
                  <span className="sr-only">Facebook page</span>
                </Link>

                <Link
                  href="https://www.instagram.com/trip_law_/"
                  target="_blank"
                  className="hover:animate-pulse "
                >
                  <BsLinkedin className="text-white size-8" />
                  <span className="sr-only">Facebook page</span>
                </Link>
                <Link
                  href="https://www.youtube.com/@triplawpa"
                  target="_blank"
                  className="hover:animate-pulse"
                >
                  <FaSquareXTwitter className="text-white size-9 mt-[-2px]" />
                  <span className="sr-only">Youtube</span>
                </Link>
                <Link
                  href="https://www.youtube.com/@triplawpa"
                  target="_blank"
                  className="hover:animate-pulse"
                >
                  <FaInstagramSquare className="text-white size-9 mt-[-2px]" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col col-span-1 mt-12 lg:col-span-2 md:mt-0">
              <form className="w-full" onSubmit={handleSubmit}>
                <div class="mb-6 w-full">
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5"
                    placeholder="Your name"
                    required
                    type="text"
                    name="name"
                    value={emailForm.name}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        name: event.target.value,
                      });
                    }}
                  />
                  <span className="text-orange-600">{formErrors.name}</span>
                </div>

                <div class="mb-6">
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5"
                    placeholder="What's your email"
                    required
                    type="email"
                    name="email"
                    value={emailForm.email}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        email: event.target.value,
                      });
                    }}
                  />
                  <span className="text-orange-600">{formErrors.email}</span>
                </div>

                <div class="mb-6">
                  <input
                    id="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5"
                    placeholder="What's your phone"
                    required
                    type="tel"
                    name="phone"
                    value={emailForm.phone}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        phone: event.target.value,
                      });
                    }}
                  />
                  <span className="text-orange-600">{formErrors.phone}</span>
                </div>

                <div class="mb-6">
                  <input
                    id="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5"
                    placeholder="Office in Tampa"
                    required
                    type="text"
                    name="phone"
                    value={emailForm.phone}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        phone: event.target.value,
                      });
                    }}
                  />
                  <span className="text-orange-600">{formErrors.phone}</span>
                </div>

                <div class="mb-6">
                  <textarea
                    rows={4}
                    id="message"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5"
                    placeholder="Your question....."
                    required
                    name="message"
                    value={emailForm.message}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        message: event.target.value,
                      });
                    }}
                  />
                  <span className="text-orange-600">{formErrors.message}</span>
                </div>

                <p className="mt-2 mb-6  text-base md:text-lg text-center text-white md:text-left">
                  I hereby expressly consent to receive automated communications
                  including calls, texts, emails, and/or prerecorded messages.
                </p>

                <div className="flex justify-center md:justify-start">
                  {loading ? (
                    <Button
                      isLoading
                      className="text-white bg-secondary text-xl w-[300px] px-5 py-3 text-center !rounded-full"
                      radius="sm"
                      size="lg"
                    >
                      Sending...
                    </Button>
                  ) : (
                    <Button
                      className="text-white bg-secondary text-xl w-[300px] px-5 py-3 text-center !rounded-full"
                      radius="sm"
                      size="lg"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </CardMotion>
      </div>
    </section>
  );
};

export default LatedAndGretest;
