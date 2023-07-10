import React, { useState } from "react";

const Accordion = ({ paragraph }) => {
  const { title, content } = paragraph;

  const [isActive, setIsActive] = useState(false);
 

  return (
    <div>
      <div className="accordionBody" onClick={() => setIsActive (!isActive)}>
        <p>{title}</p>
        <p>{isActive ? "-" : "+"}</p>
        {/* {isActive && <div className="accordionContent">{content}</div>} */}
      </div>
      {isActive && <div className="accordionContent">{content}</div>}
    </div>
  );
};

export default Accordion;


