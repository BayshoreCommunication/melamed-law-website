"use client";
import React, { useState, useEffect } from "react";
import SectionLayout from "../shared/SectionLayout";
import { Button } from "@nextui-org/react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import CardMotion from "../motion/CardMotion";
import { MdArrowOutward } from "react-icons/md";

const ContactSection = () => {
  const [emailForm, setEmailForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    zipCode: "",
    email: "",
    caseType: "",
    message: "",
    flag: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }

    if (!values.zipCode) {
      errors.zipCode = "Zipcode is required!";
    }
    if (!values.caseType) {
      errors.caseType = "Case Type is required!";
    }

    if (!values.flag) {
      errors.flag = "Accept Terms & acknowledge our Privacy Policy.";
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
        "template_9ql7ubi",
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
              firstName: "",
              lastName: "",
              phone: "",
              zipCode: "",
              email: "",
              caseType: "",
              message: "",
              flag: "",
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
              firstName: "",
              lastName: "",
              phone: "",
              zipCode: "",
              email: "",
              caseType: "",
              message: "",
              flag: "",
            });
            setLoading(false); // Stop loading
          });
        });
    } else {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-5 w-full flex flex-col md:flex-row gap-5">
          {/* First Name */}
          <div className=" w-full">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
              placeholder="First Name"
              required
              type="text"
              name="firstName"
              value={emailForm.firstName}
              onChange={(event) => {
                setEmailForm({
                  ...emailForm,
                  firstName: event.target.value,
                });
              }}
            />
            <span className="text-primary">{formErrors.firstName}</span>
          </div>
          {/* Last Name */}
          <div className=" w-full">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
              placeholder="Last Name"
              required
              type="text"
              name="lastName"
              value={emailForm.lastName}
              onChange={(event) => {
                setEmailForm({
                  ...emailForm,
                  lastName: event.target.value,
                });
              }}
            />
            <span className="text-primary">{formErrors.lastName}</span>
          </div>
        </div>
        <div className="mb-5 w-full flex flex-col md:flex-row gap-5">
          {/* Phone Number */}
          <div className=" w-full">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
              placeholder="Phone Number"
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
            <span className="text-primary">{formErrors.phone}</span>
          </div>
          {/* Zip Code */}
          <div className=" w-full">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
              placeholder="Zip Code"
              required
              type="text"
              name="zipCode"
              value={emailForm.zipCode}
              onChange={(event) => {
                setEmailForm({
                  ...emailForm,
                  zipCode: event.target.value,
                });
              }}
            />
            <span className="text-primary">{formErrors.zipCode}</span>
          </div>
        </div>
        {/* Email */}
        <div className="mb-5">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
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
          <span className="text-primary">{formErrors.email}</span>
        </div>
        {/* Case Type */}

        <div className="mb-5">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
            required
            type="Case Type"
            name="caseType"
            value={emailForm.caseType}
            onChange={(event) => {
              setEmailForm({
                ...emailForm,
                caseType: event.target.value,
              });
            }}
          >
            <option className="text-base" value="" disabled selected>
              - Case Type -
            </option>
            <option className="text-base" value="auto-accidents">
              Auto Accidents
            </option>
            <option className="text-base" value="personal-injury">
              Personal Injury
            </option>
            <option className="text-base" value="slip-and-fall">
              Slip and Fall
            </option>
            <option className="text-base" value="medical-malpractice">
              Medical Malpractice
            </option>
            <option className="text-base" value="wrongful-death">
              Wrongful Death
            </option>
            <option className="text-base" value="motorcycle-accidents">
              Motorcycle Accidents
            </option>
            <option className="text-base" value="truck-accidents">
              Truck Accidents
            </option>
            <option className="text-base" value="dog-bites">
              Dog Bites
            </option>
            <option className="text-base" value="premises-liability">
              Premises Liability
            </option>
            <option className="text-base" value="boating-accidents">
              Boating Accidents
            </option>
            <option className="text-base" value="dui-injuries">
              DUI Injuries
            </option>
            <option className="text-base" value="product-liability">
              Product Liability
            </option>
            <option className="text-base" value="nursing-home-abuse">
              Nursing Home Abuse
            </option>
            <option className="text-base" value="construction-accidents">
              Construction Accidents
            </option>
            <option className="text-base" value="insurance-claims">
              Insurance Claims
            </option>
          </select>
          <span className="text-primary">{formErrors.caseType}</span>
        </div>

        {/* Text Area */}
        <div className="mb-5">
          <textarea
            rows={4}
            id="message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
            placeholder="Please describe what happened"
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
          <span className="text-primary">{formErrors.message}</span>
        </div>

        <div className="mb-5">
          <div className="flex">
            <div className="flex items-center h-5">
              <input
                id="helper-checkbox"
                required
                aria-describedby="helper-checkbox-text"
                type="checkbox"
                checked={emailForm.flag} // Use checked instead of value
                onChange={(event) => {
                  setEmailForm({
                    ...emailForm,
                    flag: event.target.checked, // Toggle true/false using checked
                  });
                }}
                className="w-5 h-5 text-white bg-white border-gray-300 rounded"
              />
            </div>
            <div className="ms-2 text-base">
              <label
                htmlFor="helper-checkbox"
                className="font-medium text-white "
              >
                I hereby expressly consent to receive automated communications
                including calls, texts, emails, and/or prerecorded messages.
              </label>
              <p
                id="helper-checkbox-text"
                className="text-base font-normal text-white mt-3"
              >
                By submitting this form, you agree to our Terms & acknowledge
                our Privacy Policy.
              </p>
            </div>
          </div>
          <span className="text-primary mt-4 ml-6 text-center">
            {formErrors.flag}
          </span>
        </div>
        {loading ? (
          <button
            type="submit"
            className="text-white bg-[#EC1D21]    font-medium  text-base w-full rounded  cursor-pointer px-5 py-2 xl:py-5  text-center uppercase   "
          >
            Sending
          </button>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-[#EC1D21]    font-medium  text-base w-full rounded  cursor-pointer px-5 py-2 xl:py-5 text-center uppercase   "
          >
            <div className=" flex items-center justify-center">
              <div>
                <p className="text-xl xl:text-2xl font-bold">Submit Form</p>
                <span className="text-sm underline">FREE CASE EVALUATION</span>
              </div>
              <MdArrowOutward className="text-3xl xl:text-5xl" />
            </div>
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactSection;
