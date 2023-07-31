import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { validate } from "../../../validation/index";
import { setToastMessage } from "../planetSlice";
import ArrowRight from "../../../img/svg/arrow-right-white-svgrepo-com.svg";

const Subscribe = () => {
  const [input, setInput] = useState({ email: "" });

  const dispatch = useDispatch();

  const subscribe = async (e) => {
    e.preventDefault();
    const results = await validate(input, "subscribe");
    if (results === null) {
      try {
        const { data } = await axios.post(
          `http://localhost:6001/account/subscribe`,
          input
        );
        if (data.status === 1) {
          dispatch(setToastMessage("Success"));
          setInput({ email: "" });
        } else {
          dispatch(setToastMessage("duplicate entry"));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(setToastMessage("Please, insert your email"));
    }
  };

  return (
    <div className="subscribeContainer">
      <h2>
        New to Messengers? Subscribe for our newsletter and get Pic of Day to
        your e-mail
      </h2>
      <form
        onSubmit={subscribe}
        onInput={(e) => {
          setInput({ ...input, [e.target.name]: e.target.value });
        }}
      >
        <div className="subscribeInput">
          <input
          //  to stop react from errors
            onChange={() => {}}
            type="text"
            name="email"
            value={input.email}
            placeholder="Email"
          />
          <button>
            <img src={ArrowRight} alt="arrow-right" />
          </button>
        </div>

        <div className="formPolicy">
          <p>
            By subscribing You agree to <a href="/">Terms&Conditions</a> and
            <a href="/"> Privacy Policy</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
