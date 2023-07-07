import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreenMode, selectScreenMode } from "../planetSlice";
import Home from "./Home";
import PicOfDay from "./PicOfDayAPI";
import Messengers from "./Messengers";
import RawImagesAPI from "./RawImagesAPI";
import BestImages from "./BestImages";
import MenuIcon from "../../../img/svg/menu-dots-svgrepo-com.svg";
import "../../../styles/index.css";

const Nav = () => {
  const screenMode = useSelector(selectScreenMode);

  const [isNavOpen, setIsNavOpen ] = useState(false);

  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  const onButtonClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="navigation">
        <button onClick={onButtonClick}><img src={MenuIcon} alt="menuIcon" /></button>
        { isNavOpen && (
          <nav>
          <a href="/#" onClick={onNavClick} id="0"> Home</a>
          <a href="/#" onClick={onNavClick} id="1"> Pic Of Day</a>
          <a href="/#" onClick={onNavClick} id="2"> Messengers</a>
          <a href="/#" onClick={onNavClick} id="3"> Raw Images</a>
          <a href="/#" onClick={onNavClick} id="4"> Best Images</a>
        </nav>
        )}
       
      </div>
      <>
        {screenMode === 0 && <Home />}
        {screenMode === 1 && <PicOfDay />}
        {screenMode === 2 && <Messengers />}
        {screenMode === 3 && <RawImagesAPI />}
        {screenMode === 4 && <BestImages />}
      </>
    </>
  );
};

export default Nav;

// { isNavOpen ? 'Close' : 'Open'} Nav 

