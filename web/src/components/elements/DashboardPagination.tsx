"use client   ";
import { PaginationItemType, usePagination } from "@nextui-org/pagination";
import { cn } from "@nextui-org/system";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import React from "react";

interface DashboardPaginationProps {}

export const DashboardPagination: React.FC<DashboardPaginationProps> = ({}) => {
  // const dashboardStore = useSnapshot(DashboardStore);

  const { activePage, range, setPage, onNext, onPrevious } = usePagination({
    total: 52,
    showControls: true,
    siblings: 0,
    boundaries: 1,
    loop: true,
    showShadow: true,
  });

  return (
    <ul className="mt-10 flex items-center">
      {range.map((page) => {
        if (page === PaginationItemType.NEXT) {
          return (
            <li key={page} aria-label="next page" className="h-4 w-4">
              <button
                className="h-full w-full rounded-full bg-default-200"
                onClick={onNext}
              >
                <FaChevronRight />
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
                <FaChevronRight className="rotate-180" />
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
          <li key={page} aria-label={`page ${page}`} className="">
            <button
              className={cn(
                "flex min-h-8 min-w-8 items-center justify-center rounded-full bg-default-400 px-1.5 text-sm text-default-50 dark:text-white",
                activePage === page && "bg-primary",
              )}
              onClick={() => setPage(page)}
            >
              {page}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
