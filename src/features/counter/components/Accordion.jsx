import React, { useState } from "react";

const Accordion = ({ paragraph }) => {
  const { title, content } = paragraph;

  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="accordionTitle" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordionContent">{content}</div>}
    </div>
  );
};

export default Accordion;
