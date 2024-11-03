"use client";
import React, { useState, useEffect } from "react";
import SectionLayout from "../shared/SectionLayout";
import { Button } from "@nextui-org/react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import CardMotion from "../motion/CardMotion";
import { MdArrowOutward } from "react-icons/md";
import { areaspracticeData } from "@/config/data";

const ContactSection = () => {
  const addAreaspracticeData = [...areaspracticeData, { title: "others" }];

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

  const [othersValue, setOthersValue] = useState("");

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

    if (emailForm.caseType === "others") {
      emailForm.caseType = othersValue;
    }

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      send(
        "service_wj7yeey",
        "template_u74l3rr",
        emailForm,
        "2kczyCyop9k9pMsa-"
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
            <span className="text-red-500">{formErrors.lastName}</span>
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
            <span className="text-red-500">{formErrors.phone}</span>
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
            <span className="text-red-500">{formErrors.zipCode}</span>
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
          <span className="text-red-500">{formErrors.email}</span>
        </div>
        {/* Case Type */}
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
            {addAreaspracticeData?.map((el, index) => (
              <option className="text-base" value={el?.title}>
                {el?.title}
              </option>
            ))}
          </select>
          {emailForm.caseType === "others" ? (
            <div className="mt-5">
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
                placeholder="Type..."
                required
                type="Case Type"
                name="caseType"
                value={othersValue}
                onChange={(event) => {
                  setOthersValue(event.target.value);
                }}
              />
            </div>
          ) : (
            ""
          )}
          <span className="text-red-500">{formErrors.caseType}</span>
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
          <span className="text-red-500">{formErrors.message}</span>
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
                By submitting this form, you agree to our Terms & Aacknowledge
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
            className="text-white bg-secondary     font-medium  text-base w-full rounded  cursor-pointer px-5 py-2 xl:py-5  text-center uppercase  flex items-center gap-x-2 justify-center "
          >
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            Sending...
          </button>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-secondary   font-medium  text-base w-full rounded  cursor-pointer px-5 py-2 xl:py-5 text-center uppercase   "
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
