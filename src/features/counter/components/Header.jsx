import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <div >
      <Logo />
      <h1> Mars Messengers </h1>
      {/* <Lang /> */}
      <Nav />
    </div>
  );
};

export default Header;
