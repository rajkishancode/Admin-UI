import React from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleFirstPage}
        className="first-page px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
      >
        First
      </button>
      <button
        onClick={handlePreviousPage}
        className="previous-page px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-2 py-1 rounded ${
            currentPage === index + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        className="next-page px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
      >
        Next
      </button>
      <button
        onClick={handleLastPage}
        className="last-page px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
