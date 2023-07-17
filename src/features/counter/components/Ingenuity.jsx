import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIngenuity, setScreenMode } from "../planetSlice";
import ThreeDots from "../../../img/svg/threedots-svgrepo-com-horizontal.svg";

const Ingenuity = () => {
  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  const ingenuity = useSelector(selectIngenuity);
  const { mission, launch, landing, techSpecs, quickFacts, imageUrl } =
    ingenuity;

  return (
    <div className="helicopterWrapper">
      <div className="helicopterContainer">
        <h2> Get to know better this small helicopter!</h2>
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
            <li>
              <img src={ThreeDots} alt="three-dots" />
              {quickFacts.fact1}
            </li>
            <li>
              <img src={ThreeDots} alt="three-dots" />
              {quickFacts.fact2}
            </li>
            <li>
              <img src={ThreeDots} alt="three-dots" />
              {quickFacts.fact3}
            </li>
            <li>
              <img src={ThreeDots} alt="three-dots" />
              {quickFacts.fact4}
            </li>
            <li>
              <img src={ThreeDots} alt="three-dots" />
              {quickFacts.fact5}
            </li>
          </ul>
        </div>
        <div className="helicopterImage">
          <img src={imageUrl} alt="helicopter" />
        </div>
        <div className="linkBack">
          <a href="/#" onClick={onNavClick} id="2">
            {" "}
            Back to Messengers{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ingenuity;
