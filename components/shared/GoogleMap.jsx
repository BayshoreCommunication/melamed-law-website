import React from "react";

const GoogleMap = () => {
  return (
    <div className=" bg-[#1E2538]">
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4335.809366637745!2d-82.4678844!3d27.9723075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c3b1208be12d%3A0x4cce7467aad41864!2sCarter%20Injury%20Law!5e1!3m2!1sen!2sbd!4v1727682294974!5m2!1sen!2sbd"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
