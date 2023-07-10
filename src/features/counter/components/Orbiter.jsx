import React from "react";

const Orbiter = (props) => {
  const orbiters = [...props.filtered];

  return (
    <>
      {orbiters.map((orbiter) => {
        return (
          <div className="orbiterInfo">
            <div className="orbiterPrimaryInfo">
              <p>Here's {orbiter.name}</p>
              <p>Was launched {orbiter.launch}</p>
              <p>{orbiter.mission}</p>
              <p>{orbiter.dimensions}</p>
              <p>{orbiter.description}</p>
            </div>
            <div className="orbiterFacts">
              <p>Some facts about {orbiter.name}</p>
               <ul>
                <li>{orbiter.facts.fact1}</li>
                <li>{orbiter.facts.fact2}</li>
                <li>{orbiter.facts.fact3}</li>
                <li>{orbiter.facts.fact4}</li>
                <li>{orbiter.facts.fact5}</li>
               </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Orbiter;
