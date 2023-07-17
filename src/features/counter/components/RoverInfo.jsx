import React from "react";
import ThreeDots from "../../../img/svg/threedots-svgrepo-com-horizontal.svg";
// import Messengers from "./Messengers";
import {  useDispatch } from "react-redux";
import { setScreenMode } from "../planetSlice";

const RoverInfo = (props) => {
  // const screenMode = useSelector(selectScreenMode);
  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

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
              <p>
                
                It's size is {rover.size.length} length,{rover.size.heigth}
                heigth, weigth's {rover.size.weigth} and is {rover.size.width}
                wide.
              </p>
              <p>It travelled {rover.distanceTravelled}.</p>
            </div>
            <div className="roverMission">
              <p>{rover.missionDescription}</p>
            </div>
            <div className="roverQuickFacts">
              <h3>Quick Facts about {rover.name}</h3>
              <ul>
                <li><img src={ThreeDots} alt="three-dots" />{rover.quickFacts.fact1}</li>
                <li><img src={ThreeDots} alt="three-dots" />{rover.quickFacts.fact2}</li>
                <li><img src={ThreeDots} alt="three-dots" />{rover.quickFacts.fact3}</li>
                <li><img src={ThreeDots} alt="three-dots" />{rover.quickFacts.fact4}</li>
                <li><img src={ThreeDots} alt="three-dots" />{rover.quickFacts.fact5}</li>
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

            {/* <button onClick={screenMode === 2 && <Messengers />}>get back to messengers</button> */}
            <div className="linkBack">
              <a href="/#" onClick={onNavClick} id="2"> Back to Messengers </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RoverInfo;
