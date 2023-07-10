import React from "react";

const RoverInfo = (props) => {
  const rovers = [...props.filtered];

  return (
    <>
      {rovers.map((rover) => {
        return (
          <div className="roverInfo" key={rover.name}>
            <div className="roverPrimaryInfo">
              <h3> Here's {rover.name}!</h3>
              <p> Was launched {rover.launch}</p>
              <p> Landed on Mars: {rover.landed}</p>
              <p> Rover drives max at {rover.speed}</p>
              <p> It's size is {rover.size.length} length,{rover.size.heigth} heigth, weigth's {rover.size.weigth} and is {rover.size.width} wide.</p>
              <p>He travelled {rover.distanceTravelled}.</p>
            </div>
            <div className="roverMission">
              <p>{rover.missionDescription}</p>
            </div>
            <div className="roverQuickFacts">
              <h3>Quick Facts about {rover.name}</h3>
              <ul>
                <li>{rover.quickFacts.fact1}</li>
                <li>{rover.quickFacts.fact2}</li>
                <li>{rover.quickFacts.fact3}</li>
                <li>{rover.quickFacts.fact4}</li>
                <li>{rover.quickFacts.fact5}</li>
              </ul>
            </div>
            <div className="roverTechSpec">
              <h3>Take a look what rover is equiped with:</h3>
              <p>{rover.techSpecs.cameras}</p>
              <p>{rover.techSpecs.wheels}</p>
              <p>{rover.techSpecs.software}</p>
              <p>{rover.techSpecs.powerSystem}</p>
              <p>{rover.techSpecs.instruments}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RoverInfo;
