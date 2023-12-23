"use client";
import DashboardStore from "@/store/DashboardStore";
import { Pagination } from "@nextui-org/pagination";
import React from "react";
import { useSnapshot } from "valtio";

interface DashboardPaginationProps {}

export const DashboardPagination: React.FC<DashboardPaginationProps> = ({}) => {
  const dashboardStore = useSnapshot(DashboardStore);

  return (
    <Pagination
      isCompact
      showControls
      total={dashboardStore.weeksThatYear}
      page={dashboardStore.calendar.week}
      onChange={(e) => (DashboardStore.calendar.week = e)}
    />
  );

  // const renderItem = ({
  //   ref,
  //   key,
  //   value,
  //   isActive,
  //   isBefore,
  //   activePage,
  //   isNext,
  //   onNext,
  //   onPrevious,
  //   setPage,
  //   dotsJump,
  //   className,
  // }: PaginationItemRenderProps) => {
  //   if (value === PaginationItemType.NEXT) {
  //     return (
  //       <button
  //         key={key}
  //         className={cn(className, "h-8 w-8 min-w-8 bg-default-200/50")}
  //         onClick={onNext}
  //       >
  //         <FaChevronLeft className="rotate-180" />
  //       </button>
  //     );
  //   }

  //   if (value === PaginationItemType.PREV) {
  //     return (
  //       <button
  //         key={key}
  //         className={cn(className, "h-8 w-8 min-w-8 bg-default-200/50")}
  //         onClick={onPrevious}
  //       >
  //         <FaChevronLeft />
  //       </button>
  //     );
  //   }

  //   if (value === PaginationItemType.DOTS) {
  //     console.log(value, isBefore);
  //     return (
  //       <button
  //         key={key}
  //         className={className}
  //         onClick={() =>
  //           isBefore
  //             ? setPage(activePage - dotsJump)
  //             : setPage(activePage + dotsJump)
  //         }
  //       >
  //         ...
  //       </button>
  //     );
  //   }

  //   // cursor is the default item
  //   return (
  //     <button
  //       key={key}
  //       ref={ref as any}
  //       className={cn(
  //         className,
  //         isActive &&
  //           "bg-gradient-to-br from-indigo-500 to-pink-500 font-bold text-white",
  //       )}
  //       onClick={() => setPage(value!)}
  //     >
  //       {value}
  //     </button>
  //   );
  // };

  // return (
  //   <Pagination
  //     // showControls
  //     total={dashboardStore.weeksThatYear}
  //     initialPage={dashboardStore.calendar.week}
  //     // dotsJump={0}
  //     // siblings={0}
  //     // boundaries={5}
  //     className="gap-2"
  //     radius="full"
  //     renderItem={renderItem}
  //     variant="light"
  //   />
  // );

  // return (
  //   <ul className="mt-10 flex items-center">
  //     {range.map((page) => {
  //       if (page === PaginationItemType.NEXT) {
  //         return (
  //           <li key={page} aria-label="next page" className="h-4 w-4">
  //             <button
  //               className="h-full w-full rounded-full bg-default-200"
  //               onClick={onNext}
  //             >
  //               <FaChevronRight />
  //             </button>
  //           </li>
  //         );
  //       }

  //       if (page === PaginationItemType.PREV) {
  //         return (
  //           <li key={page} aria-label="previous page" className="h-4 w-4">
  //             <button
  //               className="h-full w-full rounded-full bg-default-200"
  //               onClick={onPrevious}
  //             >
  //               <FaChevronRight className="rotate-180" />
  //             </button>
  //           </li>
  //         );
  //       }

  //       if (page === PaginationItemType.DOTS) {

  //         return <li key={page} />;
  //       }

  //       return (
  //         <li key={page} aria-label={`page ${page}`} className="">
  //           <button
  //             className={cn(
  //               "flex min-h-8 min-w-8 items-center justify-center rounded-full bg-default-400 px-1.5 text-sm text-default-50 dark:text-white",
  //               activePage === page && "bg-primary",
  //             )}
  //             onClick={() => setPage(page)}
  //           >
  //             {page}
  //           </button>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
};
