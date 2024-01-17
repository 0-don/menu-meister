import { Button } from "@nextui-org/button";
import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";
import React from "react";

interface AddNewRowProps {}

export const AddNewRow: React.FC<AddNewRowProps> = ({}) => {
  return (
    <Button className="mt-5">
      <p className="mr-2">Add new row</p>
      <FaRegPlusSquare />
    </Button>
  );
};
