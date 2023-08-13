import React, { useState } from "react";
import { selectToken, selectUser } from "../planetSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setToastMessage } from "../planetSlice";

const ToggleSubscribe = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);

    const [input, setInput] = useState({
    subscriber: user.subscriber,
    email: user.email,
  });

  const [ subscriber, setSubscriber ] = useState();


  const toggleSubscribe = async (e) => {
    
    e.preventDefault();

    if (subscriber === true) {
      try {
        const { data } = await axios.delete(
          `http://localhost:6001/account/subscribe`,input,{ headers: { token } });
          if (data.status === 1) {
            dispatch(setToastMessage("You successfully unsubscribed"));
          }
      } catch (error) {
        console.log(error);
      }
    } else if (subscriber === false) {
      try {
        const { data } = await axios.post(
          `http://localhost:6001/account/subscribe`, input, { headers: { token } });
          if ( data) {
            dispatch(setToastMessage("You successfully subscribed"));
          }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={toggleSubscribe} >
        <input type="text" name="email" placeholder="" value={input.email} required
        />
        <label> {input.subscriber ? "Subscribed" : "Unsubscribed"}</label>
        <input type="checkbox" checked={input.subscriber ? true : false} />
      </form>
    </>
  );
};

export default ToggleSubscribe;
