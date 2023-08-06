import React from 'react';
import { useDispatch } from "react-redux";
import { setScreenMode } from "../planetSlice";

const Wishlist = () => {

    const dispatch = useDispatch();



    const onNavClick = (e) => {
        e.preventDefault();
        dispatch(setScreenMode(Number(e.target.id)));
    };

    return ( <>
    <div className="account">
        <div className="accountLinks">
          <a href="/#" onClick={onNavClick} id="13" className="underlineLink"> PROFILE</a>
          <a href="/#" onClick={onNavClick} id="14"> WISHLIST</a>
        </div>
        <p>This should be wishlist </p>
      </div>
    
    </> );
}
 
export default Wishlist;