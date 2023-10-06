import React, { useState } from "react";
import ToggleFavoritePhoto from "../toggleFavorites/TogglefavoritePhoto";
import ButtonUp from "./ButtonUp";
import  ArrowRight  from "../../../img/svg/arrow-right-sm-svgrepo-com.svg";
import ArrowLeft from "../../../img/svg/arrow-left-sm-svgrepo-com.svg";

const LatestPhotos = (props) => {
  const [ pageNumber, setPageNumber ] = useState(1);
  const photos = [...props.photos];
  const resultsPerPage = 10;

  const numberOfPages = Math.floor(photos.length / resultsPerPage);

  const pages = new Array(numberOfPages - 1).fill("");

  const pageChange = (e) => {
    setPageNumber(Number(e.target.id));
  }

  const prev = (e) => {
    if (pageNumber - 1 < 1) return;
    setPageNumber(pageNumber -1);
  };

  const next = (e) => {
    if (pageNumber + 1 > pages.length) return;
    setPageNumber(pageNumber + 1);
  }

  return (
    <div className="rawImagesBox">
      <ul className="rawImagesList">
        <button onClick={prev}><img src={ArrowLeft} alt="arrow-left" /></button>
        {pages.map((item, index) => {
          return (
            <li className={pageNumber === index + 1 && "activePage"} onClick={pageChange} id={index + 1} key={index}>
              {index + 1}
            </li>
          )
        })}
        <button onClick={next}><img src={ArrowRight} alt="arrow-right" /></button>
      </ul>
      {photos.map((photo, index) => {
        const item = resultsPerPage * pageNumber;
        if (index < item || index > item + resultsPerPage - 1) return null;
        return (
          <>
            <div className="rawImagesContainer">
              <div className="rawImagesTitle">
                <ToggleFavoritePhoto
                  id={photo.id}
                  img={photo}
                  liked={photo.liked}
                  key={photo.id}
                />
                <p>Taken by: {photo.rover.name}</p>
                <p>On: {photo.earth_date}</p>
                <p>Camera: {photo.camera.full_name}</p>
              </div>

              <div className="rawImage">
                <img src={photo.img_src} alt="mars-images" />
              </div>
            </div>
          </>
        );
      })}
      <ButtonUp />
    </div>
  );
};

export default LatestPhotos;
