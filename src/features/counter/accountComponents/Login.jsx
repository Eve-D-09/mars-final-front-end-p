import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setScreenMode } from "../planetSlice";
import { validate } from "../../../validation/index";
import { setToastMessage, setToken } from "../planetSlice";
import EyeIcon from "../../../img/svg/view-eye-interface-symbol-svgrepo-com.svg";
import { url } from "../../../config";

const Login = () => {
  const [input, setInput] = useState({});

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }

  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  const login = async (e) => {
    e.preventDefault();
    const results = await validate(input, "login");

    if (results === null) {
      try {
        const { data } = await axios.post(`${url}/account/login`, input);
        if (data.status === 1) {
          // dispatch(setToastMessage("Success"));
          dispatch(setScreenMode(11));
          dispatch(setToken(data.token));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(setToastMessage("Please, check your e-mail or password"));
    }
  };

  return (
    <div className="formContainer">
      <form
        onSubmit={login}
        onInput={(e) => {
          setInput({ ...input, [e.target.name]: e.target.value });
        }}
      >
        <div className="formLinks">
          <a href="/#" className="underlineLink" onClick={onNavClick} id="9">LOG IN</a>
          <a href="/#" onClick={onNavClick} id="10"> REGISTER </a>
        </div>
        <div className="formInputs">
          <label>E-mail *</label>
          <input type="text" name="email" placeholder="email" />
        </div>
        <div className="formInputs">
          <div className="passwordEye">
            <label>Password *</label>
            <button type="button" onClick={togglePassword}><img src={EyeIcon} alt="eye-icon" /></button>
          </div>
          <input  name="password" placeholder="password" type={passwordShown ? "text" : "password"}  />
        </div>
        <div className="submitButton">
          <button type="submit">Login</button>
        </div>
        <div className="forgotPasswordLink">
          <a href="/#">Password Forgotten?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
