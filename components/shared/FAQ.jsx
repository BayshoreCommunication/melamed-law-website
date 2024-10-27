"use client";
import React from "react";
import SectionLayout from "./SectionLayout";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  return (
    <SectionLayout bg="py-4 lg:py-0">
      <div className="w-full lg:w-[80%]  mx-auto">
        <h2
          className={`text-stone-950 !font-semibold text-3xl md:text-5xl mb-5   text-center uppercase`}
        >
          FAQ
        </h2>

        <Accordion className="w-full" dividerProps={"border-red"}>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                Lorem ipsum dolor sit amet consectetur
              </span>
            }
            className="text-lg text-[#4A4A4A]   "
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 5"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Accordion 6"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                Lorem ipsum dolor sit amet consectetur
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
          </AccordionItem>
          <AccordionItem
            key="7"
            aria-label="Accordion 7"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                Lorem ipsum dolor sit amet
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </SectionLayout>
  );
};

export default FAQ;
