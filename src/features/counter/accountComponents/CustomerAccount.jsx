import React, { useCallback } from "react";
import { setScreenMode } from "../planetSlice";
import { useDispatch, useSelector } from "react-redux";

// 1.
import { selectToken } from "../planetSlice";
import { selectUser, setUser } from "../planetSlice";
import axios from "axios";
import { useEffect } from "react";
import Profile from "./Profile";

const CustomerAccount = () => {
  const dispatch = useDispatch();

  // 2.
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  // 3.
  const userData = useCallback(async () => {
    try {
      const { data } = await axios.get(`http://localhost:6001/account/users`, {
        headers: { token },
      });
      dispatch(setUser(data.results));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, token]);

  console.log(user);

  useEffect(() => {
    userData();
  }, [userData]);

  

  return (
    <div>
      <div>
        <h2>Welcome to account page</h2>
        <div>
          <a href="/#" className="underlineLink" > PROFILE</a>
          <a href="/#" onClick={onNavClick} id=""> WISHLIST</a>
        </div>
      </div>
      {user && <Profile user={user} />}
      
    </div>
  );
};

export default CustomerAccount;

// https://stackoverflow.com/questions/51586458/how-to-pass-header-jwt-token-with-axios-react
