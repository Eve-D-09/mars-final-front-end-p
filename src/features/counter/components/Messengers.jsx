import React from "react";
// import Rovers from "./Rovers";
// import Orbiters from "./Orbiters";
// import Ingenuity from "./Ingenuity";
// import Insight from "./Insight";
import MoreInfo from "../../../img/svg/more-grid-small-svgrepo-com.svg";
import Interval from "./Interval";
import Timer from "./Timer";

import {useDispatch} from "react-redux";
import { setScreenMode} from "../planetSlice";

const Messengers = () => {
  // const [roverScreen, setRoverScreen] = useState();

  // const onNavClick = (e) => {
  //   e.preventDefault();
  //   setRoverScreen(Number(e.target.id));
  // };

  // ------------------------------------------------------------------------
  // remove this between if does not work
  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };
  // ------------------------------------------------------------------------

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
      {/* {roverScreen === 5 && <Rovers />}
      {roverScreen === 6 && <Orbiters />}
      {roverScreen === 7 && <Ingenuity />}
      {roverScreen === 8 && <Insight />} */}
      <div className="intervalModul">
        <Interval />
      </div>
    </div>
  );
};

export default Messengers;
