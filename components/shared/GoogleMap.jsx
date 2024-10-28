import React from "react";

const GoogleMap = () => {
  return (
    <div className=" bg-[#1E2538]">
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40580.023208911836!2d-80.17213525576426!3d25.974559529838224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ac5e74403639%3A0x487bf5a8937d27c5!2s20200%20W%20Dixie%20Hwy%20%23902%2C%20Miami%2C%20FL%2033180%2C%20USA!5e0!3m2!1sen!2sbd!4v1730089590512!5m2!1sen!2sbd"
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
