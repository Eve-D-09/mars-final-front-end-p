import React from "react";
import { ingenuityData } from "../../../myData/ingenuityData";

const Helicopter = () => {
  const { mission, launch, landing, techSpecs, quickFacts, imageUrl } =
    ingenuityData;

  return (
    <>
      <div>
        <h2> Get to know better this small helicopter</h2>
        <div>
          <h3> Mission: </h3>
          <p>{mission}</p>
        </div>
        <div>
          <h3>Launched:</h3>
          <p>{launch}</p>
          <h3>Landed:</h3>
          <p>{landing}</p>
        </div>
        <div>
          <h3>Tech Specs</h3>
          <ul>
            <li>{techSpecs.flightAltitude}</li>
            <li>{techSpecs.flightRange}</li>
            <li>{techSpecs.power}</li>
            <li>{techSpecs.mass}</li>
            <li>{techSpecs.length}</li>
          </ul>
        </div>
        <div>
          <h3>Quick facts</h3>
          <p>{quickFacts.fact1}</p>
          <p>{quickFacts.fact2}</p>
          <p>{quickFacts.fact3}</p>
          <p>{quickFacts.fact4}</p>
          <p>{quickFacts.fact5}</p>
        </div>
      </div>
    </>
  );
};

export default Helicopter;
