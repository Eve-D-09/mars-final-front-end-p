import React from "react";

import Nav from "./Nav";


const Header = (props) => {
  return (
    <div className="headerContainer">
      <h1> Mars Messengers </h1>
      <Nav domClick={props.domClick}/>
    </div>
  );
};

export default Header;
