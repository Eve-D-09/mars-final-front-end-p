import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { selectScreenMode } from "../screenSlice";
import Home from "./Home";
import PicOfDay from "./PicOfDayAPI";
import Messengers from "./Messengers";
import RawImagesAPI from "./RawImagesAPI";
import BestImages from "./BestImages";
import Rovers from "./Rovers";
import Orbiters from "./Orbiters";
import Ingenuity from "./Ingenuity";
import Insight from "./Insight";
import Login from "../accountComponents/Login";
import Register from "../accountComponents/Register";
import RegisterDetails from "../accountComponents/RegisterDetails";
import CustomerAccount from "../accountComponents/CustomerAccount";
import Wishlist from "../accountComponents/Wishlist";
// import Profile from "../accountComponents/Profile";
import EditUserInfo from "../accountComponents/EditUserInfo";
import EditUserDetails from "../accountComponents/EditUserDetails";
import FavoritesSection from "../toggleFavorites/FavoritesSection";


const Main = (props) => {
  
  const screenMode = useSelector(selectScreenMode);
  // console.log(screenMode);
  return (
    <div className="mainContainer">
      <div className="header">
        <Header domClick={props.domClick} />
      </div>
      <>
        <div className="homeScreen">{screenMode === 0 && <Home />}</div>
        <div className="picOfDayScreen">{screenMode === 1 && <PicOfDay />}</div>
        <div className="messengersScreen">{screenMode === 2 && <Messengers />}</div>
        <div className="rawImagesScreen">{screenMode === 3 && <RawImagesAPI />}</div>
        {screenMode === 4 && <BestImages />}

        {screenMode === 5 && <Rovers />}
        {screenMode === 6 && <Orbiters />}
        <div className="ingenuityScreen">{screenMode === 7 && <Ingenuity />} </div>
        <div className="insightScreen">{screenMode === 8 && <Insight />}</div>
        {screenMode === 9 && <Login />}
        {screenMode === 10 && <Register />}
        {screenMode === 12 && <RegisterDetails />}
        {screenMode === 11 && <CustomerAccount />}
        {/* {screenMode === 13 && <Profile />} */}
        {screenMode === 14 && <Wishlist />}
        {screenMode === 15 && <EditUserInfo />}
        {screenMode === 16 && <EditUserDetails />}
        <div className="favoriteImagesScreen">{screenMode === 17 && <FavoritesSection />}</div>
      </>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
