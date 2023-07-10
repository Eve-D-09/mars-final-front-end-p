import React, { useState }from "react";
import { useDispatch } from "react-redux";
import Heart from "../../../img/svg/heart-like-svgrepo-com.svg";
import { toggleClicked } from "../planetSlice";


const ClickFavorite = (props) => {

    const dispatch = useDispatch();
    
    
    const { id , liked } = props;
  
    const onHeartClick = () => {
      dispatch(toggleClicked(id));
     
    };

   console.log(liked, id);
  return (
    <div className="heartButton">
      <button  onClick={onHeartClick} >
        { liked ? <p>Liked</p> : <img src={Heart } alt="heart-icon" /> }
      </button>
    </div>
  );
};

export default ClickFavorite;

// {clicked ? "#fc037b" : "#0352fc"}
