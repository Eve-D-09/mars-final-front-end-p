import React from "react";
import { insightData } from "../../../myData/insightData";

const Insight = () => {
  const { description, launch, landed, missionCompleted, explanation, quickFacts } =
    insightData;
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
    </div>
  );
};

export default Insight;
