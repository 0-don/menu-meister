import { useWeeklyMealGroupHook } from "@/components/hooks/useWeeklyMealGroupHook";
import { WeeklyMealGroupFragmentFragment } from "@/gql/graphql";
import DashboardStore from "@/store/DashboardStore";
import TableStore from "@/store/TableStore";
import { catchErrorAlerts } from "@/utils/helpers/clientUtils";
import { Button, Card, Input } from "@nextui-org/react";
import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";
import React, { FormEvent, useState } from "react";
import { useSnapshot } from "valtio";
import { MyPopover } from "../../../elements/MyPopover";
import { ColorPalette } from "../utils/ColorPalette";

interface AddNewTableRowProps {}

export const AddNewTableRow: React.FC<AddNewTableRowProps> = ({}) => {
  const { createWeeklyMealGroup } = useWeeklyMealGroupHook();
  const dashboardStore = useSnapshot(DashboardStore);
  const tableStore = useSnapshot(TableStore);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<string>("#f44336");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) return;

    try {
      const res = await createWeeklyMealGroup({
        data: {
          name,
          color,
          orderIndex: tableStore.mealsSorted.length,
          weekOfYear: dashboardStore.calendar.week,
          year: dashboardStore.calendar.year,
        },
      });

      TableStore.data.push(
        res.createWeeklyMealGroupAdmin as WeeklyMealGroupFragmentFragment,
      );

      setIsOpen(false);
      setName("");
    } catch (error) {
      catchErrorAlerts(error);
    }
  };

  return (
    <MyPopover
      text="Add new row"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      Icon={FaRegPlusSquare}
      className="my-5"
      backdrop="opaque"
      placement="top"
      showArrow
    >
      <Card className="p-4">
        <form onSubmit={onSubmit} className="flex flex-col space-y-5">
          <Input
            type="text"
            label="Gruppenname"
            required
            size="sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <ColorPalette value={color} onChange={setColor} />

          <Button color="primary" type="submit">
            Save Group
          </Button>
        </form>
      </Card>
    </MyPopover>
  );
};
