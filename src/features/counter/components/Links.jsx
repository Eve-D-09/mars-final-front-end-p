import React from "react";
// import { intro } from "../../../myData/intro";
import { setScreenMode } from "../planetSlice";
import { useDispatch } from "react-redux";
import RoverImg from "../../../img/img-for-interval/perseverance-rover.jpg";

const Links = () => {
  const dispatch = useDispatch();
  // const { title, img } = intro;

  const onNavClick = (e) => {
    e.preventDefault();
    dispatch(setScreenMode(Number(e.target.id)));
  };

  return (
    <div className="linksContainer">
      {/* <a href="/#" className="overlayLink" onClick={onNavClick} id="5"> */}
      <p>Perseverance Rover</p>
      <img src={RoverImg} alt="" />
      <a href="/#" className="overlayLink" onClick={onNavClick} id="5">
        .
      </a>
      <p className="hoverable">Perseverance, our newest rover on Mars</p>
    </div>
  );
};

export default Links;

// {intro.map((i) => {
//   // return <LinksTags introLink={i} />
//   return (
//     <div className="linksContainer">
//       <a href="/#"  onClick={onNavClick}  >
//         <p>{i.title}</p>
//         <img src={i.img} alt={i.title} />
//       </a>
//     </div>
//   );
// })}

// if ( title === "Rerseverance Rover") {
//   dispatch(setScreenMode(5));
// } else if (title === "Ingenuity helicopter") {
//   dispatch(setScreenMode(7));
// };
