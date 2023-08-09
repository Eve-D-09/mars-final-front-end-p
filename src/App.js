import React from "react";
import Main from "./features/counter/components/Main";
import "./styles/index.css";
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
