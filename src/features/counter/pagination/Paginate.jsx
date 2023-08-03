import React from "react";

const Paginate = ({ imagesPerPage, totalPages, previousPage, nextPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div >
        <ul >
          <li onClick={previousPage} > Prev </li>
          {pageNumbers.map((number) => (
            <li key={number} onClick={() => paginate(number)}>
              {number}
            </li>
          ))}
          <li onClick={nextPage} > Next </li>
        </ul>
      </div>
    </>
  );
};

export default Paginate;
