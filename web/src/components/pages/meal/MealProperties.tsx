import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";

interface MealPropertiesProps {
  title: string;
  items: { id: number; name: string }[];
  className?: string;
}

type MealPropertiesType =
  | "Allergens"
  | "Additives"
  | "Properties"
  | "Categories"
  | "Seasons"
  | "FoodForms"
  | "Kitchens";

export const MealProperties: React.FC<MealPropertiesProps> = (props) => {
  const t = useTranslations<MealPropertiesType>();

  return (
    <Card className={props.className}>
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <p className="font-bold uppercase">{props.title}</p>
      </CardHeader>
      <CardBody className="flex flex-row flex-wrap">
        {props.items.map((item) => (
          <Chip key={item.id} variant="flat" className="mb-1" size="sm">
            {t(item.name as keyof Messages[MealPropertiesType])}
          </Chip>
        ))}
      </CardBody>
    </Card>
  );
};
