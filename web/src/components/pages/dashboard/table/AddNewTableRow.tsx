import { MyAutocomplete } from "@/components/elements/MyAutocomplete";
import { useMealHook } from "@/components/hooks/useMealHook";
import { useWeeklyMealGroupHook } from "@/components/hooks/useWeeklyMealGroupHook";
import { TimeOfDay, WeeklyMealGroupFragmentFragment } from "@/gql/graphql";
import { DashboardStore } from "@/store/DashboardStore";
import { TableStore } from "@/store/TableStore";
import { catchErrorAlerts } from "@/utils/helpers/clientUtils";
import { Button, Card, Input } from "@nextui-org/react";
import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";
import { useTranslations } from "next-intl";
import React, { FormEvent, useState } from "react";
import { useSnapshot } from "valtio";
import { MyPopover } from "../../../elements/MyPopover";
import { COLORS, ColorPalette } from "../utils/ColorPalette";

interface AddNewTableRowProps {}

export const AddNewTableRow: React.FC<AddNewTableRowProps> = ({}) => {
  const t = useTranslations<"Meals" | "Enums">();
  const { meals } = useMealHook();
  const { createWeeklyMealGroup } = useWeeklyMealGroupHook();
  const dashboardStore = useSnapshot(DashboardStore);
  const tableStore = useSnapshot(TableStore);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(TimeOfDay.Any);
  const [color, setColor] = useState<string>(COLORS[0].value);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !timeOfDay) return;

    try {
      const res = await createWeeklyMealGroup({
        data: {
          mealBoardPlanId: Number(dashboardStore.activeMealBoardPlan?.id),
          timeOfDay: timeOfDay as TimeOfDay,
          name,
          color,
          orderIndex: tableStore.dataSorted.length,
          weekOfYear: dashboardStore.calendar.week,
          year: dashboardStore.calendar.year,
        },
      });

      if (res.createWeeklyMealGroupAdmin) {
        TableStore.data.push(
          res.createWeeklyMealGroupAdmin as WeeklyMealGroupFragmentFragment,
        );
      }

      setIsOpen(false);
      setName("");
    } catch (error) {
      catchErrorAlerts(error, t);
    }
  };

  const items = [
    TimeOfDay.Any,
    TimeOfDay.Morning,
    TimeOfDay.Forenoon,
    TimeOfDay.Noon,
    TimeOfDay.Afternoon,
    TimeOfDay.Evening,
    TimeOfDay.Night,
  ];

  return (
    <MyPopover
      text={t("ADD_NEW_GROUP")}
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
            label={t("GROUPNAME")}
            required
            size="sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <MyAutocomplete
            label={t("TIME_OF_DAY")}
            value={t(timeOfDay)}
            items={items.map((key) => ({
              id: key,
              name: t(key),
            }))}
            clearButtonProps={{ className: "invisible" }}
            onSelectionChange={(key) => setTimeOfDay(key as TimeOfDay)}
          />

          <ColorPalette value={color} onChange={setColor} />

          <Button color="primary" type="submit">
            {t("SAVE_GROUP")}
          </Button>
        </form>
      </Card>
    </MyPopover>
  );
};
