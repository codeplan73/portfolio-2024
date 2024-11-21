import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="flex items-center justify-center bg-slate-600">
      <p className="px-8 py-6 text-center text-white bg-slate-600">
        &copy; {date} <span className=" text-primaryColor">Globe-Raven</span>{" "}
        All Rights Reserved, Inc
      </p>
    </div>
  );
};

export default Footer;
