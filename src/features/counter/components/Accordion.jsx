import React from "react";
import { ReactComponent as PlusCircle } from "../../../img/svg/add-plus-circle-svgrepo-com.svg";

const Accordion = ({ paragraph, toggle, open }) => {
  const { title, content } = paragraph;

  return (
    <div>
      <div className="accordionBody" onClick={() => toggle(paragraph)}>
        <p>{title}</p>
       
        <p>
          { !open ? (
            <PlusCircle style={{ transform: "rotateZ(90deg)",transition: "0.5s ease-in"}}/>
          ) : (
            <PlusCircle
              style={{
                transform: "rotateZ(135deg)",
                transition: "0.5s ease-in",
              }}
            />
          )}
        </p>
       
      </div>
      { open && <div className="accordionContent"><p>{content}</p></div>}
    </div>
  );
};

export default Accordion;
