import React, { useState } from "react";
import { paragraphs } from "../../../myData/paragraphs";
import Accordion from "./Accordion";



const Intro = () => {

  const [ openKey, setOpenKey ] = useState();
  const handleToggle = key => {
    setOpenKey( openKey !== key ? key : null)
  }
  //  pass down toggle={handleToggle} and open={openKey === paragraph}

  return (
    <div className="introContainer">
      <h2>Who's exploring Mars? </h2>
      <div className="accordion">
        {paragraphs.map((paragraph, index) => {
          return <Accordion key={index} paragraph={paragraph} toggle={handleToggle} open={openKey === paragraph}/>;
        })}
      </div>

      
    </div>
  );
};

export default Intro;
