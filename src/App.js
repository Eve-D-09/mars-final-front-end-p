import React, { useState} from "react";
import Main from "./features/counter/components/Main";
import "./styles/index.css";
import ToastComponent from "./features/counter/components/ToastComponent";



const App = () => {
  const [ domClick, setDomClick ] = useState(0);
  return (
    <div onMouseUp={() => {setDomClick(domClick + 1)} }>
      <Main domClick={domClick}/>
      <ToastComponent />
    </div>
  );
};

export default App;
