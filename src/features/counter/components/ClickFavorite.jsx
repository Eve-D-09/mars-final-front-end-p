import React from "react";
import { useDispatch } from "react-redux";
// import Heart from "../../../img/svg/heart-like-svgrepo-com.svg";
import { ReactComponent as HeartIcon } from "../../../img/svg/heart-like-svgrepo-com.svg";
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
       {/* { liked ? <p>Liked</p> : <img src={Heart} alt="heart-icon" /> } */}
        { liked ? (<HeartIcon  style={{ fill:"#fc037b" }}/>) : (<HeartIcon />)}
      </button>
    </div>
  );
};

export default ClickFavorite;

// { liked ? <p>Liked</p> : <img src={Heart} alt="heart-icon" /> }

//   {/* { liked ? (<img src={Heart} style={{fill:"#fc037b" }} alt="heart-icon"/>) : ( <img src={Heart} alt="heart-icon" />)} */}

