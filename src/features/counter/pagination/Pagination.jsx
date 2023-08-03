import React, { useState } from "react";
import Paginate from "./Paginate";

const Pagination = () => {
  const [rawImages, setRawImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(10);

  const indexOfLastPage = currentPage * imagesPerPage;
  const indexOfFirstPage = indexOfLastPage - imagesPerPage;
  const currentPages = rawImages.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
 };

 const previousPage = () => {
    if (currentPage !== 1) {
       setCurrentPage(currentPage - 1);
    }
 };

 const nextPage = () => {
    if (currentPage !== Math.ceil(rawImages.length / imagesPerPage)) {
       setCurrentPage(currentPage + 1);
    }
 };

  return (<>
    {rawImages ? (
            <div >
               <Paginate
                  imagesPerPage={imagesPerPage}
                  totalPages={rawImages.length}
                  paginate={paginate}
                  previousPage={previousPage}
                  nextPage={nextPage}
               />
            </div>
         ) : (
            <div className="loading">Loading...</div>
         )}
  </>);
};

export default Pagination;
