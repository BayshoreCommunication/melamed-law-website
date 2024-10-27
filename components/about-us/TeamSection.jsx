import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/aboutpage/team-section.png"
        alt="Team Section Bg"
        width={2400}
        height={1240}
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2
          className={`text-white !font-semibold text-3xl md:text-5xl lg:text-[80px]  text-center uppercase drop-shadow-[1px_0_10px_#000000]`}
        >
          meet the Team
        </h2>
      </div>
    </div>
  );
};

export default TeamSection;
