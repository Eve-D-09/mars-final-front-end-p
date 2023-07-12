import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectInsight, setScreenMode } from "../planetSlice";
// import ButtonUp from "./ButtonUp";

const Insight = () => {
  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  const insight = useSelector(selectInsight);
  const {
    description,
    launch,
    landed,
    missionCompleted,
    explanation,
    quickFacts,
    imageUrl,
  } = insight;

  return (
    <div className="screenContainer">
      <div className="insightContainer">
        <h2>Who is Insight Lander?</h2>
        <div className="insightInfo">
          <p>{description}</p>
          <p>Launched:{launch}</p>
          <p>Landed:{landed}</p>
        </div>
        <div className="insightMission">
          <h3>What happened to Insight?</h3>
          <p>{missionCompleted}</p>
          <p>{explanation}</p>
        </div>
        <div className="insightQuickFacts">
          <h3>Quick facts</h3>
          <ul>
            <li>{quickFacts.fact1}</li>
            <li>{quickFacts.fact2}</li>
            <li>{quickFacts.fact3}</li>
            <li>{quickFacts.fact4}</li>
            <li>{quickFacts.fact5}</li>
            <li>{quickFacts.fact6}</li>
          </ul>
        </div>
        <div>
          <img src={imageUrl} alt="insight-lander" />
        </div>
        <div className="linkBack">
          <a href="/#" onClick={onNavClick} id="2">
            
            Back to Messengers
          </a>
        </div>
        {/* <ButtonUp /> */}
      </div>
    </div>
  );
};

export default Insight;
