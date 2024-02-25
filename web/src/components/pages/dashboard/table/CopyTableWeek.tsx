import { MyPopover } from "@/components/elements/MyPopover";
import { SWITCH_DATE_WEEKLY_MEAL_GRPOUP_ADMIN } from "@/documents/mutation/dashboard";
import { useGqlMutation } from "@/fetcher";
import { DashboardStore } from "@/store/DashboardStore";
import { TableStore } from "@/store/TableStore";
import { catchErrorAlerts } from "@/utils/helpers/clientUtils";
import { Button, Card, Input } from "@nextui-org/react";
import { AiTwotoneCopy } from "react-icons/ai";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import React, { FormEvent, useEffect, useState } from "react";
import { useSnapshot } from "valtio";

interface CopyTableWeekProps {}

export const CopyTableWeek: React.FC<CopyTableWeekProps> = ({}) => {
  const t = useTranslations<"Meals">();

  const dashboardStore = useSnapshot(DashboardStore);
  const [date, setDate] = useState<string>(dashboardStore.daysThatWeek[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { mutateAsync } = useGqlMutation(SWITCH_DATE_WEEKLY_MEAL_GRPOUP_ADMIN);

  useEffect(() => {
    setDate(dayjs(dashboardStore.daysThatWeek[0]).format("YYYY-MM-DD"));
  }, [dashboardStore.daysThatWeek]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await mutateAsync({
        dateFrom: dashboardStore.daysThatWeek[0],
        dateTo: date,
      });

      setIsOpen(false);
      DashboardStore.setCalendar(date);

      setTimeout(TableStore.refetchWeeklyMealGroups, 1000);
    } catch (error) {
      catchErrorAlerts(error, t);
    }
  };

  return (
    <MyPopover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      Icon={AiTwotoneCopy}
      backdrop="opaque"
      placement="top"
      varient="light"
      color="default"
      title={t("COPY_WEEK")}
      showArrow
    >
      <Card className="p-4">
        <form onSubmit={onSubmit} className="flex flex-col space-y-5">
          <Input
            type="date"
            label={t("WEEK")}
            labelPlacement="outside-left"
            required
            size="sm"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Button color="primary" type="submit">
            {t("COPY")}
          </Button>
        </form>
      </Card>
    </MyPopover>
  );
};
