import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScreenMode } from "../screenSlice";
import ArrowRight from "../../../img/svg/arrow-right-sm-svgrepo-com.svg";
import MenuIcon from "../../../img/svg/menu-dots-svgrepo-com.svg";
// import UserIcon from "../../../img/svg/user-svgrepo-com.svg";
import { ReactComponent as UserIcon } from "../../../img/svg/user-svgrepo-com.svg";

const Nav = (props) => {
  // ----------------------------------------------------------
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 990;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const dispatch = useDispatch();

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log(props.domClick);
    if (isOpen) {
      setIsOpen(false);
    }
  }, [props.domClick]);

  //  --------------------------------------------------------------------------------------
  const onNavClick = (e) => {
    console.log("nav clicked");
    e.preventDefault();
    dispatch(setScreenMode(Number(e.currentTarget.id)));
    // setIsOpen(false);
  };
  console.log(isOpen);
  // dispatch(setScreenMode(Number(e.target.id))); this works if only a tag is a text-based
  //  e.currentTarget.id - covers  image inside link to be clickable

  return (
    <>
      <div className="navigation" ref={navRef}>
        <button onClick={toggleOpen}>
          <img src={MenuIcon} alt="menuIcon" />
        </button>

        {(isOpen || width > breakpoint) && (
          <nav>
            <a href="/#" onClick={onNavClick} id="0">
              Home
            </a>
            <a href="/#" onClick={onNavClick} id="1">
              Pic Of Day <img src={ArrowRight} alt="arrow-right" />
            </a>
            <a href="/#" onClick={onNavClick} id="2">
              Messengers <img src={ArrowRight} alt="arrow-right" />
            </a>
            <a href="/#" onClick={onNavClick} id="3">
              Raw Images <img src={ArrowRight} alt="arrow-right" />
            </a>
            <a href="/#" onClick={onNavClick} id="4">
              Best Images <img src={ArrowRight} alt="arrow-right" />
            </a>
            <a href="/#" onClick={onNavClick} id="9">
              Login/Register
            </a>
            <a href="/#" onClick={onNavClick} id="11">
              <UserIcon />
            </a>
          </nav>
        )}
      </div>

      {/*  original version - navigation on hover */}
      {/* <div className="navigation" >
        <img src={MenuIcon} alt="menuIcon" />
        <nav >
          <a href="/#" onClick={onNavClick} id="0"> Home </a>
          <a href="/#" onClick={onNavClick} id="1"> Pic Of Day <img src={ArrowRight} alt="arrow-right"  /></a>
          <a href="/#" onClick={onNavClick} id="2"> Messengers <img src={ArrowRight} alt="arrow-right"  /></a>
          <a href="/#" onClick={onNavClick} id="3"> Raw Images <img src={ArrowRight} alt="arrow-right"  /></a>
          <a href="/#" onClick={onNavClick} id="4"> Best Images <img src={ArrowRight} alt="arrow-right"  /></a>
          <a href="/#" onClick={onNavClick} id="9">Login/Register</a>
          <a href="/#" onClick={onNavClick} id="11"><UserIcon /></a>
        </nav>
      </div> */}
    </>
  );
};

export default Nav;
