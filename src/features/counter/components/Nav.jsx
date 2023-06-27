import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreenMode, selectScreenMode } from "../planetSlice";
import Main from "./Main";
// import PicOfDay from "./PicOfDayAPI";
import Messengers from "./Messengers";
// import RawImages from "./RawImagesAPI";
import BestImages from "./BestImages";

const Nav = () => {
  const screenMode = useSelector(selectScreenMode);

  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  return (
    // QQ - why we do not use button on click to open/close navigation?
    <>
      <div>
        <nav>
          <a href="/#" onClick={onNavClick} id="0"> Main</a>
          <a href="/#" onClick={onNavClick} id="1"> Pic Of Day</a>
          <a href="/#" onClick={onNavClick} id="2"> Messengers</a>
          <a href="/#" onClick={onNavClick} id="3"> Raw Images</a>
          <a href="/#" onClick={onNavClick} id="4"> Best Images</a>
        </nav>
      </div>
      <>
        {screenMode === 0 && <Main />}
        {screenMode === 1 && <p>Should be Pic Of Day</p>}
        {screenMode === 2 && <Messengers />}
        {screenMode === 3 && <p>Should be Raw Images component</p>}
        {screenMode === 4 && <BestImages />}
      </>
    </>
  );
};

export default Nav;


