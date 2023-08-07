import React, { useState } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setScreenMode } from "../planetSlice";
import { validate } from "../../../validation/index";
import { setToastMessage } from "../planetSlice";

//  after form is filled - go back to screenMode 11

const EditUserInfo = () => {
  const [input, setInput] = useState({});

  const dispatch = useDispatch();

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  const updateUser = async (e) => {
    e.preventDefault();
    const results = await validate(input, "updateUser");
    if (results === null) {
        try {
          const { data } = await axios.post(`http://localhost:6001/account/update`, input);
          if ( data.status === 1) {
            dispatch(setToastMessage("Success"));
            dispatch(setScreenMode(11));
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        dispatch(setToastMessage("Please, check your info")) ;
      }
  }

    return ( 
    <>
      <div className="formContainer">
      <form  onSubmit={updateUser} onInput={(e) => {setInput({ ...input, [e.target.name]: e.target.value }); }}>
        
        <div className="formInputs">
          <label>First Name *</label>
          <input type="text" name="firstName" placeholder="" required />
        </div>
        <div className="formInputs">
          <label>Last Name *</label>
          <input type="text" name="lastName" placeholder="" required />
        </div>
        <div className="formInputs">
          <label>Email *</label>
          <input type="text" name="email" placeholder="" required/>
        </div>
        <div className="formInputs">
          <label>Address line 1</label>
          <input type="text" name="addressLine1" placeholder="" />
        </div>
        <div className="formInputs">
            <label>Address line 2</label>
            <input type="text" name="addressLine2" placeholder=""  />
        </div>
        <div className="formInputs">
            <label>City</label>
            <input type="text" name="city" placeholder="" />
        </div>
        <div className="formInputs">
          <label> Postcode</label>
          <input type="text" name="postcode" placeholder=""  />
        </div>
        <div className="formInputs">
          <label> Country</label>
          <input type="text" name="country" placeholder=""  />
        </div>
        <div className="formInputs">
          <label> Phone Number</label>
          <input type="text" name="phoneNumber" placeholder=""  />
        </div>
        <div className="registerButtons">
        <button onClick={onNavClick} id="11">CANCEL</button>
           <button type="submit"  >SUBMIT</button>
        </div>
      </form>
    </div>
    </> );
}
 
export default EditUserInfo;