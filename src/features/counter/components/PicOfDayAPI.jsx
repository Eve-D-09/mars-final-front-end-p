
import React, {  useEffect, useCallback } from "react";
import { setPicture, selectPicture } from "../planetSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Picture from "./Picture";
import Loading from "./Loading";
import Logo from "./Logo";
import Header from "./Header";



// import "./App.css";

const PicOfDay = () => {
  
  const picture = useSelector(selectPicture);

   const dispatch = useDispatch();
  
  const getData = useCallback(async () => {
    try {
      const { data }  = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=Mmse3giht0jkNDr9PqbdtsAnvxXdRAo0fzrSXcB4`
      );
      
      dispatch(setPicture(data));
    } catch (error) {
      console.log(error);
    }
  }, [ dispatch ]);

  useEffect(() => {
    getData();
  }, [ getData  ] );

  console.log(picture);

  if (!picture) return <Loading /> 

  return (
    <>
      <Header />
      <Picture today={picture.date} title={picture.title} explanation={picture.explanation} img={picture.url}/>
      <Logo />
    </>
  );
};

export default PicOfDay;
