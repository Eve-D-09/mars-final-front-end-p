// import React from "react";
// import { useEffect, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { selectLatestPhotos, setLatestPhotos } from "../latestPhotosSlice";
// import LatestPhotos from "./LatestPhotos";

// const LatestPhotosAPI = () => {
//   const dispatch = useDispatch();
//   const latestPhotos = useSelector(selectLatestPhotos);

//   const getPhotos = useCallback(async () => {
//     try {
//       const { data } = await axios.get(
//         `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=Mmse3giht0jkNDr9PqbdtsAnvxXdRAo0fzrSXcB4`
//       );
//       dispatch(setLatestPhotos(data));
//     } catch (error) {
//       console.log(error);
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     getPhotos();
//   }, [getPhotos]);

//   console.log(latestPhotos);

//   return <></>;
// };

// export default LatestPhotosAPI;
