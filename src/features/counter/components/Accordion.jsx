import React, { useState } from "react";
import { ReactComponent as PlusCircle } from "../../../img/svg/add-plus-circle-svgrepo-com.svg";

const Accordion = ({ paragraph }) => {
  const { title, content } = paragraph;

  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="accordionBody" onClick={() => setIsActive(!isActive)}>
        <p>{title}</p>
        {/* <p>{isActive ? "-" : "+"}</p> */}
        <p>
          {isActive ? (
            <PlusCircle
              style={{
                transform: "rotateZ(135deg)",
                transition: "0.5s ease-in",
              }}
            />
          ) : (
            <PlusCircle style={{ transform: "rotateZ(90deg)",transition: "0.5s ease-in"}}/>
          )}
        </p>
        {/* {isActive && <div className="accordionContent">{content}</div>} */}
      </div>
      {isActive && <div className="accordionContent"><p>{content}</p></div>}
    </div>
  );
};

export default Accordion;
