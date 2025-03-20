import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 6;

  const renderPaginationButton = (pageNumber) => {
    const isActive = pageNumber === currentPage;
    return (
      <button
        key={pageNumber}
        onClick={() => setCurrentPage(pageNumber)}
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          isActive
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-50"
        }`}
      >
        {pageNumber}
      </button>
    );
  };
  return (
    <div className="flex items-center justify-center gap-1 p-4 border-t">
      <button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-50"
      >
        <MdChevronLeft className="w-4 h-4" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
        renderPaginationButton
      )}

      <button
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-50"
      >
        <MdChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
