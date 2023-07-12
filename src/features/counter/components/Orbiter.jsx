import React from "react";
import {useDispatch} from "react-redux";
import { setScreenMode} from "../planetSlice";

const Orbiter = (props) => {
  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };
  const orbiters = [...props.filtered];

  return (
    <>
      {orbiters.map((orbiter) => {
        return (
          <div className="orbiterInfo">
            <div className="orbiterPrimaryInfo">
              <h3>Here's {orbiter.name}</h3>
              <p>Was launched {orbiter.launch}</p>
              <p>{orbiter.mission}</p>
              <p>{orbiter.dimensions}</p>
              <p>{orbiter.description}</p>
            </div>
            <div className="orbiterFacts">
              <h3>Some facts about {orbiter.name}</h3>
               <ul>
                <li>{orbiter.facts.fact1}</li>
                <li>{orbiter.facts.fact2}</li>
                <li>{orbiter.facts.fact3}</li>
                <li>{orbiter.facts.fact4}</li>
                <li>{orbiter.facts.fact5}</li>
               </ul>
            </div>
            <div className="linkBack">
              <a href="/#" onClick={onNavClick} id="2"> Back to Messengers </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Orbiter;
