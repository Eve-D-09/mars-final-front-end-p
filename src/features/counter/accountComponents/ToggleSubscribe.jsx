import React, { useState, useCallback } from "react";
import { selectToken, selectUser, setUser } from "../planetSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setToastMessage } from "../planetSlice";
import { validate } from "../../../validation/index";

const ToggleSubscribe = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  

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

  const handleChange = async (e) => {
    console.log(e.target.checked);

    if (e.target.checked === true) {
      try {
        await axios.post(`http://localhost:6001/account/subscribe`, {
          email: user.email,
        });
        dispatch(setToastMessage("You successfully subscribed"));
        userData();
      } catch (error) {
        dispatch(setToastMessage("something went wrong"));
      }
    } else {
      try {
        await axios.delete(`http://localhost:6001/account/subscribe`, {
          headers: { token },
        });
        dispatch(setToastMessage("You successfully unsubscribed"));
        userData();
      } catch (error) {
        dispatch(setToastMessage("something went wrong"));
      }
    }
  };

  return (
    <div className="toggleSubscribeBox">
      <h3>Subscribtion to newsletter:</h3>

      <div className="subscriberBox">
        <label> {user.subscriber ? "Subscribed :" : "Unsubscribed"}</label>
        <input
          type="checkbox"
          checked={user.subscriber ? true : false}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ToggleSubscribe;
