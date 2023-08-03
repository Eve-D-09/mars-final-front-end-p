import React from "react";
import { setScreenMode } from "../planetSlice";
import { useDispatch } from "react-redux";

const CustomerAccount = () => {
  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  return (
    <div>
      <div>
        <h2>Welcome to account page</h2>

        <div>
          <a href="/#" className="underlineLink" onClick={onNavClick} id=""> PROFILE</a>
          <a href="/#" onClick={onNavClick} id=""> WISHLIST</a>
        </div>
        <h3>Hello , user name </h3>
        <button onClick={() => dispatch(setScreenMode(9))}> Logout</button>
      </div>
      <div>
        <h3>PROFILE component, where user should be able to edit his personal info</h3>
      </div>
      
      <div>
        SUBSCRIBE/UNSUBCRIBE from newsletters
      </div>
    </div>
  );
};

export default CustomerAccount;
