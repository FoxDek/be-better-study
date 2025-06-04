import React from "react";
import { cva } from "class-variance-authority";

const pagination = cva("flex gap-2 p-3");

const paginationItem = cva(
  "px-2 border border-gray-400 rounded-md transition-all ease-in-out",
  {
    variants: {
      active: {
        true: "bg-[#8C90D7] text-white",
        false: "bg-white text-black hover:bg-[#8C90D7]/30 cursor-pointer",
      },
    },
  }
);

function Pagination({ currentPage, pageSize, totalPages, onChange }: {currentPage: number, pageSize: number, totalPages: number, onChange: (newPage: number, pageSize: number) => void}) {
  const handleChangePage = (newPage: number) => {
    onChange(newPage, pageSize);
  };

  return (
    <ul className={pagination()}>
      {totalPages <= 5 ? (
        [...Array(totalPages)].map((_, i) => (
          <li
            key={i}
            className={paginationItem({ active: i + 1 === currentPage })}
            onClick={() => handleChangePage(i + 1)}
          >
            {i + 1}
          </li>
        ))
      ) : (
        <>
          {currentPage > 2 && (
            <li
              className={paginationItem({ active: false })}
              onClick={() => handleChangePage(1)}
            >
              1
            </li>
          )}

          {currentPage > 3 && (
            <li className={paginationItem({ className: "border-none !px-0" })}>
              ...
            </li>
          )}

          {currentPage > 1 && (
            <li
              className={paginationItem({ active: false })}
              onClick={() => handleChangePage(currentPage - 1)}
            >
              {currentPage - 1}
            </li>
          )}

          <li className={paginationItem({ active: true })}>{currentPage}</li>

          {currentPage < totalPages && (
            <li
              className={paginationItem({ active: false })}
              onClick={() => handleChangePage(currentPage + 1)}
            >
              {currentPage + 1}
            </li>
          )}

          {currentPage === 1 && currentPage + 2 <= totalPages && (
            <li
              className={paginationItem({ active: false })}
              onClick={() => handleChangePage(currentPage + 2)}
            >
              {currentPage + 2}
            </li>
          )}

          {currentPage < totalPages - 2 && (
            <li className={paginationItem({ className: "border-none !px-0" })}>
              ...
            </li>
          )}

          {currentPage < totalPages - 1 && (
            <li
              className={paginationItem({ active: false })}
              onClick={() => handleChangePage(totalPages)}
            >
              {totalPages}
            </li>
          )}
        </>
      )}
    </ul>
  );
}

export default Pagination;
