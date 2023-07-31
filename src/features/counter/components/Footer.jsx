import React from "react";
import Logo from "./Logo";
import Subscribe from "./Subscribe";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footerContainer">
      <div className="subscribe">
        <Subscribe />
      </div>
      <div className="logo">
        <p>Copyright&copy; {year} Eve&NasaAPI </p>
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
