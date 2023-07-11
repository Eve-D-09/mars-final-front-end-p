import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import {  selectScreenMode } from "../planetSlice";
import Home from "./Home";
import PicOfDay from "./PicOfDayAPI";
import Messengers from "./Messengers";
import RawImagesAPI from "./RawImagesAPI";
import BestImages from "./BestImages";



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
      </>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
