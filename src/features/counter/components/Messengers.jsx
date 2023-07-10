import React, { useState } from "react";
import Rovers from "./Rovers";
import Orbiters from "./Orbiters";
import Ingenuity from "./Ingenuity";
import Insight from "./Insight";

const Messengers = () => {
  const [roverScreen, setRoverScreen] = useState();

  const onNavClick = (e) => {
    e.preventDefault();
    setRoverScreen(Number(e.target.id));
  };

  return (
    <div className="messengersComp">
      <h2>Messengers screen</h2>
      <div className="messengersNav">
        
        <nav>
          <a href="/#" onClick={onNavClick} id="5">
            Rovers
          </a>    
          <a href="/#" onClick={onNavClick} id="6">
            Orbiters
          </a>
          <a href="/#" onClick={onNavClick} id="7">
            Ingenuity helicopter
          </a>
          <a href="/#" onClick={onNavClick} id="8">
            Insight
          </a>
        </nav>
      </div>
      {roverScreen === 5 && <Rovers />}
      {roverScreen === 6 && <Orbiters />}
      {roverScreen === 7 && <Ingenuity />}
      {roverScreen === 8 && <Insight />}
    </div>
  );
};

export default Messengers;
