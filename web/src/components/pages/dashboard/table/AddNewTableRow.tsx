import { useMealHook } from "@/components/hooks/useMealHook";
import { useWeeklyMealGroupHook } from "@/components/hooks/useWeeklyMealGroupHook";
import { WeeklyMealGroupFragmentFragment } from "@/gql/graphql";
import { DashboardStore } from "@/store/DashboardStore";
import TableStore from "@/store/TableStore";
import { catchErrorAlerts } from "@/utils/helpers/clientUtils";
import { Button, Card, Input } from "@nextui-org/react";
import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";
import { useTranslations } from "next-intl";
import React, { FormEvent, useState } from "react";
import { useSnapshot } from "valtio";
import { MyPopover } from "../../../elements/MyPopover";
import { ColorPalette } from "../utils/ColorPalette";

interface AddNewTableRowProps {}

export const AddNewTableRow: React.FC<AddNewTableRowProps> = ({}) => {
  const t = useTranslations<"Dashboard">();
  const { meals } = useMealHook();
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
          mealBoardPlanId: Number(dashboardStore.activeMealBoardPlan?.id),
          name,
          color,
          orderIndex: (meals || []).length,
          weekOfYear: dashboardStore.calendar.week,
          year: dashboardStore.calendar.year,
        },
      });

      console.log(res);

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

          <ColorPalette value={color} onChange={setColor} />

          <Button color="primary" type="submit">
            {t("SAVE_GROUP")}
          </Button>
        </form>
      </Card>
    </MyPopover>
  );
};
