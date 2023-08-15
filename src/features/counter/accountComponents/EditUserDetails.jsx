import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setScreenMode } from "../planetSlice";
import { selectUser, selectToken } from "../planetSlice";
import { validate } from "../../../validation/index";
import { setToastMessage } from "../planetSlice";
import { url } from "../../../config";

const EditUserDetails = () => {
  // const [input, setInput] = useState({});
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  // ----------------------------------------------------------
  
  const [inputs, setInputs] = useState({
    addressLine1: user.address_line_1,
    addressLine2: user.address_line_2,
    city: user.city,
    postcode: user.postcode,
    country: user.country,
    phoneNumber: user.phone_number,
  });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  // ----------------------------------------------------------

  const updateDetails = async (e) => {
    e.preventDefault();
    console.log(inputs);
    const errors = await validate(inputs, "updateDetails");
    if (!errors) {
      try {
        const { data } = await axios.patch(
          `${url}/account/update_details`,
          inputs,
          { headers: { token } }
        );
        if (data.status === 1) {
          dispatch(setToastMessage("Success"));
          dispatch(setScreenMode(11));
        }
      } catch (error) {
        console.log(error);
        dispatch(setToastMessage("something is wrong"));
      }
    } else {
      dispatch(setToastMessage("Please, check your info"));
    }
  };
  return (
    <>
      <div className="formContainer">
        <form
          onSubmit={updateDetails}
          onInput={(e) => {
            setInputs({ ...inputs, [e.target.name]: e.target.value });
          }}
        >
          <div className="formInputs">
            <label>Address line 1</label>
            <input
              type="text"
              name="addressLine1"
              onChange={handleChange}
              placeholder=""
              value={inputs.addressLine1}
              
            />
          </div>
          <div className="formInputs">
            <label>Address line 2</label>
            <input
              type="text"
              name="addressLine2"
              onChange={handleChange}
              value={inputs.addressLine2}
              placeholder=""
            />
          </div>
          <div className="formInputs">
            <label>City</label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              value={inputs.city}
              placeholder=""
            />
          </div>
          <div className="formInputs">
            <label> Postcode</label>
            <input
              type="text"
              name="postcode"
              onChange={handleChange}
              value={inputs.postcode}
              placeholder=""
            />
          </div>
          <div className="formInputs">
            <label> Country</label>
            <input
              type="text"
              name="country"
              onChange={handleChange}
              value={inputs.country}
              placeholder=""
            />
          </div>
          <div className="formInputs">
            <label> Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              onChange={handleChange}
              value={inputs.phoneNumber}
              placeholder=""
            />
          </div>
          <div className="registerButtons">
            <button onClick={onNavClick} id="11">
             
              CANCEL
            </button>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditUserDetails;
