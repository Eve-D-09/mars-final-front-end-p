import React, { useState } from "react";
import ButtonUp from "./ButtonUp";
import ArrowRight from "../../../img/svg/arrow-right-sm-svgrepo-com.svg";
import ArrowLeft from "../../../img/svg/arrow-left-sm-svgrepo-com.svg";
import ToggleFavoriteButton from "../toggleFavorites/ToggleFavoriteButton";

const RawImages = (props) => {
  const [pageNumber, setPageNumber] = useState(1);

  const rawImages = [...props.rawImages];
  const resultsPerPage = 10;

  const numberOfPages = Math.floor(rawImages.length / resultsPerPage);
  // console.log(numberOfPages, rawImages.length, pageNumber);
  const pages = new Array(numberOfPages - 1).fill("");

  const pageChange = (e) => {
    setPageNumber(Number(e.target.id));
  };

  const prev = (e) => {
    if (pageNumber - 1 < 1) return;
    setPageNumber(pageNumber - 1);
  };
  const next = (e) => {
    if (pageNumber + 1 > pages.length) return;
    setPageNumber(pageNumber + 1);
  };
  // console.log(pageNumber);
  return (
    <div className="boxWrapper">
      <div className="rawImagesBox">
        <ul className="rawImagesList">
          <button onClick={prev}>
            <img src={ArrowLeft} alt="arrow-left" />
          </button>
          {pages.map((item, index) => {
            // console.log(index);
            return (
              <li
                className={pageNumber === index + 1 && "activePage"}
                onClick={pageChange}
                id={index + 1}
                key={index}
              >
                {index + 1}
              </li>
            );
          })}
          <button onClick={next}>
            <img src={ArrowRight} alt="arrow-right" />
          </button>
        </ul>
        {rawImages.map((image, index) => {
          const item = resultsPerPage * pageNumber;
          if (index < item || index > item + resultsPerPage - 1) return null;
          return (
            <>
              <div className="rawImagesContainer">
                <div className="rawImagesTitle">
                  <ToggleFavoriteButton
                    id={image.id}
                    img={image}
                    liked={image.liked}
                  />
                  <p>Taken by: {image.rover.name}</p>
                  <p>On: {image.earth_date}</p>
                  <p>Camera: {image.camera.full_name}</p>
                </div>

                <div className="rawImage">
                  <img src={image.img_src} alt="mars-images" />
                </div>
              </div>
            </>
          );
        })}
        <ButtonUp />
      </div>
    </div>
  );
};

export default RawImages;
