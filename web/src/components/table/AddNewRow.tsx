import React from "react";

import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";

interface AddNewRowProps {}

export const AddNewRow: React.FC<AddNewRowProps> = ({}) => {
  return (
    <button className="poin mt-5 flex items-center rounded-full bg-default-100 p-2 hover:bg-default-400">
      <p className="mr-2">Add new row</p>
      <FaRegPlusSquare />
    </button>
  );
};
