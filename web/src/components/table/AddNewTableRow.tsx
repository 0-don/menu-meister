import TableStore from "@/store/TableStore";
import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";
import React, { useState } from "react";
import { MyPopover } from "../elements/MyPopover";

interface AddNewTableRowProps {}

export const AddNewTableRow: React.FC<AddNewTableRowProps> = ({}) => {
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<string>("");

  return (
    <MyPopover
      text="Add new row"
      Icon={FaRegPlusSquare}
      className="mt-5"
      backdrop="opaque"
      placement="top"
      showArrow
    >
      <div className="flex justify-center">
        <button
          className="w-full rounded-lg bg-primary-500 p-2 text-white"
          onClick={() => {
            TableStore.refetchWeeklyMealGroups();
            TableStore.refetchMeals();
          }}
        >
          asdas
        </button>
      </div>
    </MyPopover>
  );
};
