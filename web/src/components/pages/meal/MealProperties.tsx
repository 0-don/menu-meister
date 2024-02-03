import { Card, CardBody } from "@nextui-org/react";
import React from "react";

interface MealPropertiesProps {
  items: { id: number; name: string }[] 
}

export const MealProperties: React.FC<MealPropertiesProps> = ({}) => {
  return (
    <Card>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card>
  );
};
