import React from "react";
import { useDispatch } from "react-redux";
import { setScreenMode } from "../planetSlice";
import ArrowRight from "../../../img/svg/arrow-right-sm-svgrepo-com.svg";
import MenuIcon from "../../../img/svg/menu-dots-svgrepo-com.svg";

const Nav = () => {
  

  

  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

 

  return (
    <>
     
      <div className="navigation">
       
        
        <img src={MenuIcon} alt="menuIcon" />
        <nav>
       
          <a href="/#" onClick={onNavClick} id="0"> Home </a>
          <a href="/#" onClick={onNavClick} id="1"> Pic Of Day <img src={ArrowRight} alt="arrow-right"  /></a>
          <a href="/#" onClick={onNavClick} id="2"> Messengers <img src={ArrowRight} alt="arrow-right"  /></a>
          <a href="/#" onClick={onNavClick} id="3"> Raw Images <img src={ArrowRight} alt="arrow-right"  /></a>
          <a href="/#" onClick={onNavClick} id="4"> Best Images <img src={ArrowRight} alt="arrow-right"  /></a>
        </nav>
       
      </div>
      
    </>
  );
};

export default Nav;


