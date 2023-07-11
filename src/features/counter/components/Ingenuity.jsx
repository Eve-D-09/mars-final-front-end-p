import React from "react";
import { useSelector } from "react-redux";
import { selectIngenuity } from "../planetSlice";

const Ingenuity = () => {
  const ingenuity = useSelector(selectIngenuity);
  const { mission, launch, landing, techSpecs, quickFacts, imageUrl } =
    ingenuity;

  return (
    <div className="helicopterContainer">
      <h2> Get to know better this small helicopter</h2>
      <div className="helicopterFirstInfo">
        <p>{mission}</p>
        <p>Launched: {launch}</p>
        <p>Landed: {landing}</p>
      </div>
      <div className="helicopterTechSpecs">
        <h3>Tech Specs</h3>
        <p>It can fly {techSpecs.flightAltitude}</p>
        <p>It's flight range is {techSpecs.flightRange}</p>
        <p>Powered: {techSpecs.power}</p>
        <p> It's weight is only {techSpecs.mass}</p>
        <p>{techSpecs.length}</p>
      </div>
      <div className="helicopterQuickFacts">
        <h3>Quick facts</h3>
        <ul>
          <li>{quickFacts.fact1}</li>
          <li>{quickFacts.fact2}</li>
          <li>{quickFacts.fact3}</li>
          <li>{quickFacts.fact4}</li>
          <li>{quickFacts.fact5}</li>
        </ul>
      </div>
      <div className="helicopterImage">
        <img src={imageUrl} alt="helicopter" />
      </div>
    </div>
  );
};

export default Ingenuity;
