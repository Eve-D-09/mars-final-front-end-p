import React from "react";
import Logo from "./Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footerContainer">
      <p>Copyright&copy; {year} Eve&NasaAPI </p>
      <Logo />
    </div>
  );
};

export default Footer;
