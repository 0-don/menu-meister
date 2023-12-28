import { GetAllMealSchedulesAdminQuery } from "@/gql/graphql";
import React from "react";

interface TableItemProps {
  schedule: NonNullable<
    GetAllMealSchedulesAdminQuery["getAllMealSchedulesAdmin"]
  >[number];
}

export const TableItem: React.FC<TableItemProps> = ({ schedule }) => {
  return (
    <span>
      {/* {schedule.meal.image && (
        <Image
          aria-label={schedule.meal.name}
          className="h-auto w-auto"
          src={`data:image/jpeg;base64,${schedule.meal.image}`}
          width={200}
          height={200}
          alt={schedule.meal.name}
        />
      )}
      <p>{schedule.meal?.name}</p> */}
    </span>
  );
};
