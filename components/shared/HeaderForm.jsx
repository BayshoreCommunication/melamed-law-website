"use client";
import React, { useState, useEffect } from "react";
import SectionLayout from "../shared/SectionLayout";
import { Button } from "@nextui-org/react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import { MdArrowOutward } from "react-icons/md";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const HeaderForm = ({ className }) => {
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
      errors.message = "Message is required!";
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
      send(
        "service_du7590l",
        "template_gkqbvb9",
        emailForm,
        "igJ5_f7vinFq47loI"
      )
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
    <div>
      <ScrollMotionEffect effect="fade-up" duration="2000">
        <div
          className={` ${className} max-w-[500px] rounded-[22px] pt-5 mx-auto`}
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#EC1D21] leading-none">
              Hurt?
            </h1>
            <h1 className="text-4xl md:text-6xl  font-bold text-[#EC1D21] leading-none">
              We Can Help!
            </h1>
            <p className="text-[16px] md:text-[20px] font-bold py-3">
              FREE CONFIDENTIAL CASE EVALUATION
            </p>
          </div>
          <div className="rounded-2xl p-2 bg-[#0D3E8A] mt-2 shadow-lg md:shadow-2xl">
            <div className="bg-white p-4 rounded-xl border-5 border-[#1E2538] shadow-2xl">
              <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      autocomplete="off"
                      type="text"
                      name="name"
                      value={emailForm.name}
                      onChange={(event) => {
                        setEmailForm({
                          ...emailForm,
                          name: event.target.value,
                        });
                      }}
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#0D3E8A] peer pl-2 active:bg-transparent"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="peer-focus:font-medium absolute text-lg font-medium text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0D3E8A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                    <span className="text-primary text-xs">
                      {formErrors.name}
                    </span>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      autocomplete="off"
                      type="text"
                      name="phone"
                      value={emailForm.phone}
                      onChange={(event) => {
                        setEmailForm({
                          ...emailForm,
                          phone: event.target.value,
                        });
                      }}
                      id="floating_last_name"
                      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#0D3E8A] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-lg font-medium text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0D3E8A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
                    >
                      Phone
                    </label>
                    <span className="text-primary text-xs">
                      {formErrors.phone}
                    </span>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    autocomplete="off"
                    type="email"
                    name="email"
                    value={emailForm.email}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        email: event.target.value,
                      });
                    }}
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#0D3E8A] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-lg font-medium  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0D3E8A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                  <span className="text-primary text-xs">
                    {formErrors.email}
                  </span>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <textarea
                    autocomplete="off"
                    id="message"
                    rows="2"
                    type="text"
                    name="message"
                    value={emailForm.message}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        message: event.target.value,
                      });
                    }}
                    className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#0D3E8A] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_password"
                    className="peer-focus:font-medium absolute text-lg font-medium text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0D3E8A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
                  >
                    How may we help you?
                  </label>
                  <span className="text-primary text-xs">
                    {formErrors.message}
                  </span>
                </div>

                <div className="flex justify-center md:justify-start w-full">
                  {/* <button
                    type="submit"
                    className="text-white bg-[#EC1D21]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-10 py-2 text-center uppercase space-x-4 tracking-[.3em] mx-auto "
                  >
                    Submit
                  </button> */}
                  {loading ? (
                    <Button
                      isLoading
                      className="text-white bg-[#EC1D21]  focus:ring-4 focus:outline-none focus:text-[#EC1D21] font-medium rounded-lg text-base w-full sm:w-auto px-10 py-2 text-center uppercase space-x-4 tracking-[.3em] mx-auto hover:scale-105  transition duration-300"
                      radius="sm"
                      size="lg"
                    >
                      Sending...
                    </Button>
                  ) : (
                    <Button
                      className="text-white bg-[#EC1D21]  focus:ring-4 focus:outline-none focus:ring-[#EC1D21] font-medium rounded-lg text-base w-full sm:w-auto px-10 py-2 text-center uppercase space-x-4 tracking-[.3em] mx-auto hover:scale-105  transition duration-300"
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
        </div>
      </ScrollMotionEffect>
    </div>
  );
};

export default HeaderForm;
