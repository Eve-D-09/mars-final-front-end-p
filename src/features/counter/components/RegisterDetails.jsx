import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setScreenMode } from "../planetSlice";
import { validate } from "../../../validation/index";
import { setToastMessage } from "../planetSlice";

const RegisterDetails = () => {
  const [input, setInput] = useState({});

  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  const registerDetails = async (e) => {
    e.preventdefault();
    const results = await validate(input, "registerDetails");
    if (results === null) {
        try {
          const { data } = await axios.post(`http://localhost:6001/account/details`, input);
          if ( data.status === 1) {
            dispatch(setToastMessage("Success"));
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        dispatch(setToastMessage("??")) ;
      }

  }

  return (
    <div className="formContainer">
      <h2>Please, fill the next bit</h2>
      <form onSubmit={registerDetails} onInput={(e) => {setInput({...input, [e.target.value]: e.target.value})}}>
        <div className="formInputs">
          <label> Address line 1</label>
          <input type="text" name="addressLine1" placeholder="" required />
        </div>
        <div className="formInputs">
          <label> Address line 2</label>
          <input type="text" name="addressLine2" placeholder="" required />
        </div>
        <div className="formInputs">
          <label> City</label>
          <input type="text" name="city" placeholder="" required />
        </div>
        <div className="formInputs">
          <label> Postcode</label>
          <input type="text" name="postcode" placeholder="" required />
        </div>
        <div className="formInputs">
          <label> Country</label>
          <input type="text" name="country" placeholder="" required />
        </div>
        <div className="formInputs">
          <label> Phone Number</label>
          <input type="text" name="phoneNumber" placeholder="" required />
        </div>
        <div className="registerButtons">
          <button onClick={onNavClick} id="11">Submit</button>
          <button onClick={onNavClick} id="11">Skip</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterDetails;
