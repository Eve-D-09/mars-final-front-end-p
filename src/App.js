import React from "react";
// import Logo from "./features/counter/components/Logo";
import Main from "./features/counter/components/Main";
import Loading from "./features/counter/components/Loading";
// import BestImages from "./features/counter/components/BestImages";


const App = () => {

  if (!App) return <Loading />;
  
  return (
    <>
      <Main />
      <p>Something nice is about to happen</p>
      {/* <BestImages /> */}
    </>
  );
};

export default App;
