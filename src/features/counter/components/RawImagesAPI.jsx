import React from "react";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectRawImages } from "../planetSlice";
import { getData } from "../../../controllers/dataControllers";
import {
  setSearch,
  selectSearch,
  setCalendar,
  selectCalendar,
} from "../planetSlice";
import RawImages from "./RawImages";
import Loading from "./Loading";

const RawImagesAPI = () => {
  const today = new Date();
  const month =
    today.getMonth() > 9 ? today.getMonth() + 1 : "0" + (today.getMonth() + 1);
  const day = today.getDate() > 9 ? today.getDate() : "0" + today.getDate();
  console.log(day);

  const dateRanges = {
    perseverance: ["2021-02-18", `${today.getFullYear()}-${month}-${day}`],
    curiosity: ["2012-08-06", `${today.getFullYear()}-${month}-${day}`],
    opportunity: ["2004-01-25", "2018-06-10"],
    spirit: ["2004-01-04", "2010-03-01"],
  };
  console.log(dateRanges);
  const rawImages = useSelector(selectRawImages);

  const dispatch = useDispatch();

  const search = useSelector(selectSearch);
  const calendar = useSelector(selectCalendar);

  const gettingData = () => {
    if (search && calendar) {
      console.log(`getting new data`);
      getData(
        `rawImages`,
        `get`,
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${search}/photos?earth_date=${calendar}&api_key=Mmse3giht0jkNDr9PqbdtsAnvxXdRAo0fzrSXcB4`
      );
    }
  };

  console.log( rawImages);

  if (!gettingData) return <Loading />;

  return (
    <>
      <div className="searchWrapper">
        <div className="searchContainer">
          <div>
            <h2> Search raw unprocessed photos</h2>
          </div>
          <div className="searchInputContainer">
            <label>Search by rover</label>
            <select onChange={(e) => dispatch(setSearch(e.target.value))}>
              <option value=""></option>
              <option value="perseverance">Perseverance</option>
              <option value="curiosity">Curiosity</option>
              <option value="opportunity">Opportunity</option>
              <option value="spirit">Spirit</option>
            </select>
          </div>
          <div className="searchInputContainer">
            <label>Search by date</label>
            {search && (
              <input
                onChange={(e) => dispatch(setCalendar(e.target.value))}
                type="date"
                id="searchDate"
                min={dateRanges[search][0]}
                max={dateRanges[search][1]}
              />
            )}
            {calendar && search && (
              <button onClick={gettingData}>Search</button>
            )}
          </div>
         
        </div>
      </div>
      {rawImages && <RawImages rawImages={rawImages} key={rawImages.id} />}
      
    </>
  );
};

export default RawImagesAPI;

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=Mmse3giht0jkNDr9PqbdtsAnvxXdRAo0fzrSXcB4

// https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=2021-6-3&api_key=Mmse3giht0jkNDr9PqbdtsAnvxXdRAo0fzrSXcB4
