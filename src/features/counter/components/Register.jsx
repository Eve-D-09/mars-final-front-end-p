import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setScreenMode } from "../planetSlice";
import { validate } from "../../../validation/index";
import { setToastMessage } from "../planetSlice";

const Register = () => {
  const [input, setInput] = useState({});

  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  const register = async (e) => {
    e.preventDefault();
    const results = await validate(input, "register");
    console.log(results);
    if (results === null) {
      try {
        const { data } = await axios.post(`http://localhost:6001/account/register`, input);
        if ( data.status === 1) {
          dispatch(setToastMessage("Success"));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(setToastMessage("check your inputs")) ;
    }
    
  };
  return (
    <div>
      <form onSubmit={register}
        onInput={(e) => {
          setInput({ ...input, [e.target.name]: e.target.value });
        }}
      >
        <div className="formLinks">
          <a href="/#" onClick={onNavClick} id="9">LOG IN</a>
          <a href="/#" onClick={onNavClick} id="10">REGISTER </a>
        </div>
        <div>
          <label>First Name *</label>
          <input type="text" name="firstName" placeholder="" required />
        </div>
        <div>
          <label>Last Name *</label>
          <input type="text" name="lastName" placeholder="" required />
        </div>
        <div>
          <label>Email *</label>
          <input type="text" name="email" placeholder="" required />
        </div>
        <div>
          <label>Confirm e-mail *</label>
          <input type="text" name="email" placeholder="" required />
        </div>
        <div>
            <label>Password *</label>
            <input type="text" name="password" placeholder="" required />
        </div>
        <div>
            <label>Confirm Password *</label>
            <input type="text" name="password" placeholder="" required />
        </div>
        <button type="submit" onClick={onNavClick} id="12" >REGISTER</button>
        
        <p>By creating an account I agree to <a href="/" >Terms & Conditions</a> and 
        <a href="/" >Privacy Policy</a> </p>
      </form>
    </div>
  );
};

export default Register;
