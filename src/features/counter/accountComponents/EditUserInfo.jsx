import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setScreenMode } from "../planetSlice";
import { selectUser, selectToken } from "../planetSlice";
import { validate } from "../../../validation/index";
import { setToastMessage } from "../planetSlice";
import ToggleSubscribe from "./ToggleSubscribe";

const EditUserInfo = () => {
  // const [input, setInput] = useState({});

  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };
  // ----------------------------------------------------------
  //  for prepopulating users data: define default values and handle on change
  const [inputs, setInputs] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    subscriber: user.subscriber,
  });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  // ----------------------------------------------------------
  const updateUser = async (e) => {
    e.preventDefault();
    console.log(inputs);
    const errors = await validate(inputs, "updateUser");
    // console.log(results);
    if (!errors) {
      try {
        const { data } = await axios.patch(
          `http://localhost:6001/account/update`,
          inputs,
          { headers: { token } }
        );
        console.log(data);
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
          onSubmit={updateUser}
          onInput={(e) => {
            setInputs({ ...inputs, [e.target.name]: e.target.value });
          }}
        >
          <div className="formInputs">
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              placeholder=""
              value={inputs.firstName}
              required
            />
          </div>
          <div className="formInputs">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              placeholder=""
              value={inputs.lastName}
              required
            />
          </div>
          <div className="formInputs">
            <label>Email *</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder=""
              value={inputs.email}
              required
            />
          </div>
          <div className="registerButtons">
            <button onClick={onNavClick} id="11"> CANCEL </button>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
        {/* <form>
          <input type="checkbox"  checked={inputs.subscriber ? true : false}/>
        </form> */}
        <ToggleSubscribe />
      </div>
    </>
  );
};

export default EditUserInfo;
