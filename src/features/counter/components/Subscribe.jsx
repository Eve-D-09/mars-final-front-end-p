import React, {useState} from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { validate } from "../../../validation/index";
import { setToastMessage } from "../planetSlice";

const Subscribe = () => {
   const [input, setInput] = useState({});

   const dispatch = useDispatch();

    
  const subscribe = async (e) => {
    e.preventDefault();
    const results = await validate(input, "subscribe");
    if (results === null) {
      try {
        const { data } = await axios.post(`http://localhost:6001/account/subscribe`, input);
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
        <h2>New to Messengers? Subscribe for our newsletter and Pic of Day to your e-mail.</h2>
        <form onSubmit={subscribe} onInput={(e) => {setInput({ ...input, [e.target.name]: e.target.value });}}>
            <div>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div>
               <label for="once">Once per week</label>
               <input type="radio" name="frequency" value="once" />
            </div>
            <div>
               <label for="three">Three times a week</label>
               <input type="radio" name="frequency" value="three" />
            </div>
            
            <button >Subscribe</button>
            <p>By subscribing You agree to <a href="/" >Terms&Conditions</a> and 
             <a href="/" >Privacy Policy</a> </p>
        </form>
    </div>
     );
}
 
export default Subscribe;