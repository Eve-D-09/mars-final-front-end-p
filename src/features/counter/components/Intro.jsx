import React from "react";
import { paragraphs } from "../../../myData/paragraphs";
import Accordion from "./Accordion";


const Intro = () => {
  return (
    <div className="introContainer">
      <h2>Who's exploring Mars? </h2>
      <div className="accordion">
        {paragraphs.map((paragraph, index) => {
          return <Accordion key={index} paragraph={paragraph} />;
        })}
      </div>
    </div>
  );
};

export default Intro;
