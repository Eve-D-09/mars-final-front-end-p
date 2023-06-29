import React from "react";

import Header from "./features/counter/components/Header"
// import Main from "./features/counter/components/Main";
import Footer from "./features/counter/components/Footer";
import Loading from "./features/counter/components/Loading";



const App = () => {

  if (!App) return <Loading />;
  
  return (
    <>
      <Header />
      
      {/* <Main /> */}
      {/* <p>How app is rendering Main if it's not imported here? </p> */}
      <Footer />
    </>
  );
};

export default App;


//  Removed Main component, problems when loading in browser