import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreenMode, selectUser, setToken } from "../planetSlice";
import LogoutIcon from "../../../img/svg/logout-svgrepo-com.svg";

const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  // console.log(user);

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  if (!user) return <p>Please, log in</p>;

  return (
    <>
      <div className="accountWrapper">
        <div className="account">
          <div className="accountLinks">
            <a href="/#" onClick={onNavClick} id="11" className="underlineLink">PROFILE</a>
            <a href="/#" onClick={onNavClick} id="14">WISHLIST</a>
          </div>
          <div className="customerConstacts">
            <div className="greeting">
              <h3>Hello, {user.firstName}! </h3>
              <button
                onClick={() => {
                  dispatch(setScreenMode(9));
                  dispatch(setToken(null));
                  localStorage.clear();
                }}>
                <img src={LogoutIcon} alt="logout-icon" />
              </button>
            </div>
            <div className="personalInfo">
              <div>
                <h4>First Name / Last Name :</h4>
                <p> {user.firstName} {user.lastName}</p>
              </div>
              <div>
                <p> <small>E-mail :</small> </p>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="customerAddress">
              <h4>Address :</h4>
              <p>User address</p>
            </div>
            <div className="editLink">
              <a href="/#" onClick={onNavClick} id="15"> EDIT
              </a>
            </div>
            <div className="personalSubscribes">
              <p> subscribe/unsubscribe</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
