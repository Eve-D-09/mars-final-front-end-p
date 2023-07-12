import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { selectScreenMode } from "../planetSlice";
import Home from "./Home";
import PicOfDay from "./PicOfDayAPI";
import Messengers from "./Messengers";
import RawImagesAPI from "./RawImagesAPI";
import BestImages from "./BestImages";

import Rovers from "./Rovers";
import Orbiters from "./Orbiters";
import Ingenuity from "./Ingenuity";
import Insight from "./Insight";

const Main = () => {
  const screenMode = useSelector(selectScreenMode);
  return (
    <div className="mainContainer">
      <div className="header">
        <Header />
      </div>
      <>
        {screenMode === 0 && <Home />}
        {screenMode === 1 && <PicOfDay />}
        {screenMode === 2 && <Messengers />}
        {screenMode === 3 && <RawImagesAPI />}
        {screenMode === 4 && <BestImages />}

        {screenMode === 5 && <Rovers />}
        {screenMode === 6 && <Orbiters />}
        <div className="ingenuityScreen">{screenMode === 7 && <Ingenuity />} </div>
        <div className="insightScreen">{screenMode === 8 && <Insight />}</div>
      </>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
