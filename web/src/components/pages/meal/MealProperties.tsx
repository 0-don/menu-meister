import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import React from "react";

interface MealPropertiesProps {
  title: string;
  items: { id: number; name: string }[];
  className?: string;
}

export const MealProperties: React.FC<MealPropertiesProps> = (props) => {
  const initialFruits = ["Apple", "Banana", "Cherry", "Watermelon", "Orange"];
  const [fruits, setFruits] = React.useState(initialFruits);

  const handleClose = (fruitToRemove: string) => {
    setFruits(fruits.filter((fruit) => fruit !== fruitToRemove));
    if (fruits.length === 1) {
      setFruits(initialFruits);
    }
  };
  return (
    <Card className={props.className}>
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <p className="font-bold uppercase">{props.title}</p>
      </CardHeader>
      <CardBody className="flex">
        {fruits.map((fruit, index) => (
          <Chip key={index} onClose={() => handleClose(fruit)} variant="flat">
            {fruit}
          </Chip>
        ))}
      </CardBody>
    </Card>
  );
};
