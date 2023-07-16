import React from "react";
import Main from "./features/counter/components/Main";
import "./styles/index.css";
// import Timer from "./features/counter/components/Timer";
import ToastComponent from "./features/counter/components/ToastComponent";



const App = () => {
  return (
    <>
      <Main />
      <ToastComponent />
     
    </>
  );
};

export default App;
