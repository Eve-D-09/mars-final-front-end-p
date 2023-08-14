import React, { useCallback } from "react";
// import { setScreenMode } from "../planetSlice";
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

  // 3.
  const userData = useCallback(async () => {
    try {
      const { data } = await axios.get(`http://localhost:6001/account/users`, {
        headers: { token },
      });
      // console.log("token", token, "data", data);
      dispatch(setUser(data.results));
      //  or just data ? 
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, token]);

  console.log(user);

  useEffect(() => {
    userData();
    console.log("getting data");
  }, [userData]);

  

  return (
    <>
      <Profile user={user} />
    </>
  );
};

export default CustomerAccount;


