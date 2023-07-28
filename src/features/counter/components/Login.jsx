import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setScreenMode } from "../planetSlice";
import { validate} from "../../../validation/index";
import { setToastMessage } from "../planetSlice";


const Login = () => {
  const [input, setInput] = useState({});

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
        const { data } = await axios.post(`http://localhost:6001/user`, input);
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
      {/*Q1-- a form or just a div? */}
      <form onSubmit={login} onInput={(e) => {setInput({ ...input, [e.target.name]: e.target.value });}} >
        <div className="formLinks">
          <a href="/#" onClick={onNavClick} id="9"> LOG IN</a>
          <a href="/#" onClick={onNavClick} id="10"> REGISTER</a>
        </div>
        <div>
          <label>E-mail *</label>
          <input type="text" name="email" placeholder="email" />
        </div>
        <div>
          <label>Password *</label>
          <input type="password" name="password" placeholder="password" />
        </div>

        <button type="submit" >LOGIN</button>
        {/* Q2 -- button or a take to Account component? can I pass both functions here ? */}
       
      </form>
    </div>
  );
};

export default Login;
