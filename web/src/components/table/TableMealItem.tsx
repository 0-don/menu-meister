import { Meal } from "@/gql/graphql";
import { WeekDay } from "@/utils/types";
import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";

interface TableMealItemProps {
  meal: Meal;
  day: WeekDay;
  group: UniqueIdentifier;
}

export const TableMealItem: React.FC<TableMealItemProps> = ({
  meal,
  day,
  group,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${group}#${day}#${meal.id}`,
    data: { day, group, meal },
  });
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;
  return (
    <Card className="py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <p className="text-tiny font-bold uppercase">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="text-large font-bold">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="rounded-xl object-cover"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
};
