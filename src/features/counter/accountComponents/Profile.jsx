import React from "react";
import { useDispatch } from "react-redux";
import { setScreenMode } from "../planetSlice";

const Profile = (props) => {
  const dispatch = useDispatch();

  const { user } = props;
  // const { email, firstName, lastName } = props;
  console.log(typeof user);

  return (
    <>
      {user.map((u) => {
        return (
          <>
            <div>
              <h3>Hello, {u.firstName}</h3>
              <button onClick={() => dispatch(setScreenMode(9))}>Logout</button>
            </div>
            <div>
              <p>{u.lastName}</p>
              <p>{u.email}</p>
            </div>
            <div>
              <a href="/#" id="">
                EDIT
              </a>
              <div>SUBSCRIBE/UNSUBCRIBE from newsletters</div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Profile;
