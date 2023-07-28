import React, {useState} from 'react';
import axios from "axios";

const Subscribe = () => {
   const [input, setInput] = useState({});

    
  const subscribe = async () => {
    try {
      const { data } = await axios.post(`server url`, input);
      if (data.status) {
        console.log("ok");
      } else {
        console.log("issue");
      }
    } catch (error) {
      console.log(error);
    }
  };


    return ( 
    <div>
        <h2>New to Messengers? Subscribe for our newsletter and Pic of Day to your e-mail.</h2>
        <div onInput={(e) => {setInput({ ...input, [e.target.name]: e.target.value });}}>
            <div>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div>
               <label for="once">Once per week</label>
               <input type="checkbox" name="frequency" value="once" />
            </div>
            <div>
               <label for="three">Three times a week</label>
               <input type="checkbox" name="frequency" value="three" />
            </div>
            
            <button onClick={subscribe}>Subscribe</button>
            <p>By subscribing You agree to <a href="/" >Terms&Conditions</a> and 
             <a href="/" >Privacy Policy</a> </p>
        </div>
    </div>
     );
}
 
export default Subscribe;