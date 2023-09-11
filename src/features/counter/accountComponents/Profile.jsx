import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setToken } from "../planetSlice";
import { setScreenMode } from "../screenSlice";
import LogoutIcon from "../../../img/svg/logout-svgrepo-com.svg";

const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  // console.log(user);

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  
  if (!user) return (<div className="unlogedUser">
                          <p>Looks like you're not loged in...</p>
                               </div>);

  return (
    <>
      <div className="accountWrapper">
        <div className="account">
          <div className="accountLinks">
            <a href="/#" onClick={onNavClick} id="11" className="underlineLink">PROFILE</a>
            <a href="/#" onClick={onNavClick} id="14">WISHLIST</a>
          </div>
          <div className="customerContacts">
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
              <div className="editLink">
                <a href="/#" onClick={onNavClick} id="15"> EDIT</a>
              </div>
            </div>
            <div className="customerAddress">
              <h4>Address :</h4>
              <p>{user.address_line_1} {user.address_line_2}, {user.postcode} {user.city}, {user.country}</p>
            </div>
            <div className="customerAddress">
              <h4>Phone Number :</h4>
              <p>{user.phone_number}</p>
            </div>
            <div className="editLink">
              <a href="/#" onClick={onNavClick} id="16"> EDIT
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
