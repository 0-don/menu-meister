import { Card, Input } from "@nextui-org/react";
import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";
import React, { useState } from "react";
import { MyPopover } from "../../../elements/MyPopover";
import { ColorPalette } from "../utils/ColorPalette";

interface AddNewTableRowProps {}

export const AddNewTableRow: React.FC<AddNewTableRowProps> = ({}) => {
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<string>("#f44336");

  return (
    <MyPopover
      text="Add new row"
      Icon={FaRegPlusSquare}
      className="mt-5"
      backdrop="opaque"
      placement="top"
      showArrow
    >
      <Card className="p-4">
        <Input
          type="text"
          label="Gruppenname"
          className="mb-5"
          size="sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <ColorPalette value={color} onChange={setColor} />
      </Card>
    </MyPopover>
  );
};
