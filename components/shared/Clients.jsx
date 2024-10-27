import React from "react";
import SectionLayout from "./SectionLayout";
import { Bitter } from "next/font/google";
import { DoubleTabSection } from "./DoubleTabSection";
import Marquee from "react-fast-marquee";

const bitter = Bitter({ subsets: ["latin"] });

const Clients = () => {
  const clientsData = [
    {
      logo: "/assets/home/clients/clients-1.png",
    },
    {
      logo: "/assets/home/clients/clients-2.png",
    },
    {
      logo: "/assets/home/clients/clients-3.png",
    },
    {
      logo: "/assets/home/clients/clients-4.png",
    },
    {
      logo: "/assets/home/clients/clients-5.png",
    },
    {
      logo: "/assets/home/clients/clients-6.png",
    },
    {
      logo: "/assets/home/clients/clients-1.png",
    },
    {
      logo: "/assets/home/clients/clients-2.png",
    },
    {
      logo: "/assets/home/clients/clients-3.png",
    },
    {
      logo: "/assets/home/clients/clients-4.png",
    },
    {
      logo: "/assets/home/clients/clients-5.png",
    },
    {
      logo: "/assets/home/clients/clients-6.png",
    },
  ];

  return (
    <SectionLayout bg="bg-white px-8">
      <Marquee pauseOnHover={true} speed={80}>
        <div className="flex  justify-between items-center gap-8">
          {clientsData.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={`Client Logo ${index + 1}`}
              className=""
              width={180}
              height={60}
            />
          ))}
        </div>
      </Marquee>
    </SectionLayout>
  );
};

export default Clients;
