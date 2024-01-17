import { Card, CardBody, CardHeader, Input } from "@nextui-org/react";
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
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <Input type="email" label="Email" />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {/* <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        /> */}
      </CardBody>
    </Card>
    </MyPopover>
  );
};
