import React from "react";
import { useDispatch } from "react-redux";
import Heart from "../../../img/svg/heart-like-svgrepo-com.svg";
import { toggleClicked } from "../planetSlice";


const ClickFavorite = (props) => {

    const dispatch = useDispatch();
    
    
    const { id , liked } = props;
  
    const onHeartClick = () => {
      dispatch(toggleClicked(id));
     
    };

    const color  =  liked ? "#fc037b" : "#0352fc";

   console.log(liked, id);
  return (
    <div className="heartButton">
      <button  onClick={onHeartClick} >
        { liked ? <p>Liked</p> : <img src={Heart} alt="heart-icon" fill= {{ color }}/> }
        
      </button>
    </div>
  );
};

export default ClickFavorite;

// {clicked ? "#fc037b" : "#0352fc"} #24a0c9

// { liked ? <p>Liked</p> : <img src={Heart} alt="heart-icon" style= {{ color }}/> }
// const color = toggleClicked.includes(id) ? "#fc037b" : "#0352fc";
