import React from "react";
import { useDispatch } from "react-redux";
import { setScreenMode } from "../planetSlice";
import LogoutIcon from "../../../img/svg/logout-svgrepo-com.svg";

const Profile = ({user}) => {
  const dispatch = useDispatch();

  // const {  email, firstName, lastname } = user;
  console.log(user);
  
  let firstName = user[0].first_name;
  let email = user[0].email;
  let lastName = user[0].last_name;
  
  console.log(email, firstName, lastName);
  
  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

//  https://devsheet.com/loop-through-an-object-using-map-in-react/   
//   <div> 
//   {Object.entries(user).map(([key, value]) => 
//     <div key={key}> {key}: {value} </div>
//   )} 
// </div>
  
  return (
    <>
     
      <div className="accountWrapper">
        <div className="account">
          <div className="accountLinks">
            <a href="/#" onClick={onNavClick} id="13" className="underlineLink">PROFILE</a>
            <a href="/#" onClick={onNavClick} id="14"> WISHLIST </a>
          </div>
          <div className="customerConstacts">
            <div className="greeting">
              <h3>Hello, {firstName} ! </h3>
              <button onClick={() => dispatch(setScreenMode(9))}>
                <img src={LogoutIcon} alt="logout-icon" />
              </button>
            </div>
            <div className="personalInfo">
              <div>
                <h4>First Name / Last Name :</h4>
                {/* <p>Daniela Jones</p> */}
                <p>{firstName} {lastName}</p>
              </div>
              <div>
                <p> <small>E-mail :</small></p>
                {/* <p>daniela@gmail.com</p> */}
                <p>{email}</p>
              </div>
            </div>
            <div className="customerAddress">
              <h4>Address :</h4>
              <p>Avenue Marcel Thiery 215-5, 1200 Brussels</p>
            </div>
            <div className="editLink">
              <a href="/#" id="">EDIT</a>
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
