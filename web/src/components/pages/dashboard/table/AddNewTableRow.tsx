import { Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";
import React, { useState } from "react";
import { MyPopover } from "../../../elements/MyPopover";
import { ColorPalette } from "../utils/ColorPalette";

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
      <Card className="py-4">
        <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
          <Input type="text" label="Gruppenname" size="sm" />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <ColorPalette />
        </CardBody>
      </Card>
    </MyPopover>
  );
};
