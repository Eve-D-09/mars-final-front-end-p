import React from "react";
import { useSelector } from "react-redux";
import { selectInsight } from "../planetSlice";
import ButtonUp from "./ButtonUp";

const Insight = () => {
  const insight = useSelector(selectInsight);
  const {
    description,
    launch,
    landed,
    missionCompleted,
    explanation,
    quickFacts,
    imageUrl
  } = insight;
  return (
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
        <h2>Quick facts</h2>
        <ul>
          <li>{quickFacts.fact1}</li>
          <li>{quickFacts.fact2}</li>
          <li>{quickFacts.fact3}</li>
          <li>{quickFacts.fact4}</li>
          <li>{quickFacts.fact5}</li>
          <li>{quickFacts.fact6}</li>
        </ul>
        <div>
          <img src={imageUrl} alt="insight-lander-image" />
        </div>
      </div>
      <ButtonUp />
    </div>
  );
};

export default Insight;
