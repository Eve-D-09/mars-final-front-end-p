import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreenMode, selectScreenMode } from "../planetSlice";
import Main from "./Main";
import PicOfDay from "./PicOfDayAPI";
import Messengers from "./Messengers";
import RawImages from "./RawImagesAPI";
import BestImages from "./BestImages";

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
    // QQ - why we do not use button on click to open/close navigation?
    <>
      <div>
        <button onClick={onButtonClick}>{ isNavOpen ? 'Close' : 'Open'} Nav </button>
        { isNavOpen && (
          <nav>
          <a href="/#" onClick={onNavClick} id="0"> Main</a>
          <a href="/#" onClick={onNavClick} id="1"> Pic Of Day</a>
          <a href="/#" onClick={onNavClick} id="2"> Messengers</a>
          <a href="/#" onClick={onNavClick} id="3"> Raw Images</a>
          <a href="/#" onClick={onNavClick} id="4"> Best Images</a>
        </nav>
        )}
        {/* <nav>
          <a href="/#" onClick={onNavClick} id="0"> Main</a>
          <a href="/#" onClick={onNavClick} id="1"> Pic Of Day</a>
          <a href="/#" onClick={onNavClick} id="2"> Messengers</a>
          <a href="/#" onClick={onNavClick} id="3"> Raw Images</a>
          <a href="/#" onClick={onNavClick} id="4"> Best Images</a>
        </nav> */}
      </div>
      <>
        {screenMode === 0 && <Main />}
        {screenMode === 1 && <PicOfDay />}
        {screenMode === 2 && <Messengers />}
        {screenMode === 3 && <RawImages />}
        {screenMode === 4 && <BestImages />}
      </>
    </>
  );
};

export default Nav;


