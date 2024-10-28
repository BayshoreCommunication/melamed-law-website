import React from "react";
import GoogleMap from "../shared/GoogleMap";
import CardMotion from "../motion/CardMotion";

const GoogleMapSection = () => {
  return (
    <div className="bg-[#ffffff]">
      <div>
        <div className="relative h-[400px] lg:h-[600px] w-full">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default GoogleMapSection;
