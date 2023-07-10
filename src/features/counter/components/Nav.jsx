import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreenMode, selectScreenMode } from "../planetSlice";

import MenuIcon from "../../../img/svg/menu-dots-svgrepo-com.svg";

const Nav = () => {
  

  // const [isNavOpen, setIsNavOpen ] = useState(false);

  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  // const onButtonClick = () => {
  //   setIsNavOpen(!isNavOpen);
  // };

  return (
    <>
     
      <div className="navigation">
        {/* <button onClick={onButtonClick}><img src={MenuIcon} alt="menuIcon" /></button> */}
        {/* { isNavOpen && ( */}
        <button>
          <img src={MenuIcon} alt="menuIcon" />
        </button>
        <nav>
          <a href="/#" onClick={onNavClick} id="0"> Home </a>
          <a href="/#" onClick={onNavClick} id="1"> Pic Of Day </a>
          <a href="/#" onClick={onNavClick} id="2"> Messengers</a>
          <a href="/#" onClick={onNavClick} id="3"> Raw Images </a>
          <a href="/#" onClick={onNavClick} id="4"> Best Images </a>
        </nav>
        {/* )} */}
      </div>
      
    </>
  );
};

export default Nav;


