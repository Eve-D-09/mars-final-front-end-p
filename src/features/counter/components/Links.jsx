import React from "react";
// import { intro } from "../../../myData/intro";
import { setScreenMode } from "../screenSlice";
import { useDispatch } from "react-redux";
import RoverImg from "../../../img/img-for-interval/perseverance-rover.jpg";

const Links = () => {
  const dispatch = useDispatch();
  // const { title, img } = intro;

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  return (
    <div className="linksContainer">
     
      <p>Perseverance Rover</p>
      <img src={RoverImg} alt="" />
      <a href="/#" className="overlayLink" onClick={onNavClick} id="5">.</a>
      <p className="hoverable">Perseverance, our newest rover on Mars</p>
    </div>
  );
};

export default Links;


