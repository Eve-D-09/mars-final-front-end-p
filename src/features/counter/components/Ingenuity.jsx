import React from "react";
import { useSelector} from "react-redux";
import { selectIngenuity } from "../planetSlice";

const Ingenuity = () => {

  const ingenuity = useSelector(selectIngenuity);
  const { mission, launch, landing, techSpecs, quickFacts, imageUrl } =
    ingenuity;

  return (
    <>
      <div>
        <h2> Get to know better this small helicopter</h2>
        <div>
          <h3> Mission: </h3>
          <p>{mission}</p>
        </div>
        <div>
          <p>Launched: {launch}</p>
          <p>Landed: {landing}</p>
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

export default Ingenuity;
