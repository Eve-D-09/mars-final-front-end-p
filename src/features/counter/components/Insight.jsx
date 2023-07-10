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
  } = insight;
  return (
    <div>
      <h2>Who is Insight Lander?</h2>
      <p>{description}</p>
      <div>
        <p>Launched:{launch}</p>
        <p>Landed:{landed}</p>
      </div>
      <div>
        <h2>What happened to Insight?</h2>
        <p>{missionCompleted}</p>
        <p>{explanation}</p>
      </div>
      <div>
        <h2>Quick facts</h2>
        <ul>
          <li>{quickFacts.fact1}</li>
          <li>{quickFacts.fact2}</li>
          <li>{quickFacts.fact3}</li>
          <li>{quickFacts.fact4}</li>
          <li>{quickFacts.fact5}</li>
          <li>{quickFacts.fact6}</li>
        </ul>
      </div>
      <ButtonUp />
    </div>
  );
};

export default Insight;
