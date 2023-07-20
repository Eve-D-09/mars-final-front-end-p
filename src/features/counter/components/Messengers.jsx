import React from "react";
import MoreInfo from "../../../img/svg/more-grid-small-svgrepo-com.svg";

import Timer from "./Timer";

import {useDispatch} from "react-redux";
import { setScreenMode} from "../planetSlice";

const Messengers = () => {
  
  
  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };
 

  return (
    <div className="messengersComp">
      <h2>Operating on Mars</h2>
      <Timer />
      <div className="messengersNav">
        <nav>
          <a href="/#" onClick={onNavClick} id="5">Rovers <img src={MoreInfo} alt="dots-for-more-info" /> </a>    
          <a href="/#" onClick={onNavClick} id="6"> Orbiters  <img src={MoreInfo} alt="dots-for-more-info" /></a>
          <a href="/#" onClick={onNavClick} id="7"> Ingenuity helicopter  <img src={MoreInfo} alt="dots-for-more-info" /> </a>
          <a href="/#" onClick={onNavClick} id="8"> Insight  <img src={MoreInfo} alt="dots-for-more-info" /> </a>
        </nav>
      </div>
     
    </div>
  );
};

export default Messengers;
