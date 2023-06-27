import React, {  useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPlanet, selectPlanet } from "../planetSlice";
import Loading from "./Loading";

import Header from "./Header";

const RawImages = () => {
 
  const planet = useSelector(selectPlanet);

  // const [planet, setPlanet] = useState();


  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    try {
      const { data } = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=Mmse3giht0jkNDr9PqbdtsAnvxXdRAo0fzrSXcB4`);

      dispatch(setPlanet(data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [ getData ] );

  console.log(planet);

  if (!planet) return <Loading />;

  return (
    <>
      <Header />
      <div>
        <h2> Search raw unprocessed photos</h2>
      </div>
      <div>
        <label>Search by rover</label>
        <select >
        <option value=""></option>
        <option value="perseverance">Perseverance</option>
        <option value="curiosity">Curiosity</option>
        <option value="opportunity">Opportunity</option>
        <option value="spirit">Spirit</option>
        </select>
      </div>
      <div>
        <label>Search by date</label>
        <input type="date" id="searchDate"/>
      </div>
    </>
  );
};

export default RawImages;


// onSelect={(e) => dispatch(setSelect(e.target.value))}