import { PaginationItemType, usePagination } from "@nextui-org/pagination";
import React from "react";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

interface DashboardPaginationProps {}

export const DashboardPagination: React.FC<DashboardPaginationProps> = ({}) => {
  const { activePage, range, setPage, onNext, onPrevious } = usePagination({
    total: 6,
    showControls: true,
    siblings: 10,
    boundaries: 10,
  });

  return (
    <div className="flex flex-col gap-2">
      <p>Active page: {activePage}</p>
      <ul className="flex items-center gap-2">
        {range.map((page) => {
          if (page === PaginationItemType.NEXT) {
            return (
              <li key={page} aria-label="next page" className="h-4 w-4">
                <button
                  className="h-full w-full rounded-full bg-default-200"
                  onClick={onNext}
                >
                  <FaChevronRight className="rotate-180" />
                </button>
              </li>
            );
          }

          if (page === PaginationItemType.PREV) {
            return (
              <li key={page} aria-label="previous page" className="h-4 w-4">
                <button
                  className="h-full w-full rounded-full bg-default-200"
                  onClick={onPrevious}
                >
                  <FaChevronRight />
                </button>
              </li>
            );
          }

          if (page === PaginationItemType.DOTS) {
            return (
              <li key={page} className="h-4 w-4">
                ...
              </li>
            );
          }

          return (
            <li key={page} aria-label={`page ${page}`} className="h-4 w-4">
              <button
                className={`h-full w-full rounded-full bg-default-300 ${activePage === page && "bg-secondary"}`}
                onClick={() => setPage(page)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
