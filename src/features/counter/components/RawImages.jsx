import React, { useState } from "react";
import ButtonUp from "./ButtonUp";

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
  console.log(pageNumber);
  return (
    <div className="rawImagesBox">
      <ul>
        <li onClick={prev}>Prev</li>

        {pages.map((item, index) => {
          // console.log(index);
          return (
            <li
              className={pageNumber === index + 1 && "activePage"}
              onClick={pageChange}
              id={index + 1}
            >
              {index + 1}
            </li>
          );
        })}
        <li onClick={next}>Next</li>
      </ul>
      {rawImages.map((image, index) => {
        const item = resultsPerPage * pageNumber;
        if (index < item || index > item + resultsPerPage - 1) return null;
        return (
          <>
            <div className="rawImagesContainer">
              <div className="rawImagesTitle">
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
  );
};

export default RawImages;
