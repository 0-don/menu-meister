import { MyPopover } from "@/components/elements/MyPopover";
import { SWITCH_DATE_WEEKLY_MEAL_GRPOUP_ADMIN } from "@/documents/mutation/dashboard";
import { useGqlMutation } from "@/fetcher";
import { DashboardStore } from "@/store/DashboardStore";
import { catchErrorAlerts } from "@/utils/helpers/clientUtils";
import { Button, Card, Input } from "@nextui-org/react";
import { AiTwotoneCopy } from "@react-icons/all-files/ai/AiTwotoneCopy";
import { useTranslations } from "next-intl";
import React, { FormEvent, useState } from "react";
import { useSnapshot } from "valtio";

interface CopyTableWeekProps {}

export const CopyTableWeek: React.FC<CopyTableWeekProps> = ({}) => {
  const t = useTranslations<"Dashboard">();
  const dashboardStore = useSnapshot(DashboardStore);
  const [date, setDate] = useState<string>(dashboardStore.daysThatWeek[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { mutateAsync } = useGqlMutation(SWITCH_DATE_WEEKLY_MEAL_GRPOUP_ADMIN);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(dashboardStore.daysThatWeek[0], date);

      // await mutateAsync({
      //   dateFrom: dashboardStore.daysThatWeek[0],
      //   dateTo: date,
      // });
      // setIsOpen(false);
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
            defaultValue={"2014-02-09"}
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
