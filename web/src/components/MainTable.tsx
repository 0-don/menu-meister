"use client";

import { GET_ALL_WEEKLY_MEAL_GROUPS_ADMIN } from "@/documents/query/dashboard";
import { useGqlQuery } from "@/fetcher";
import DashboardStore from "@/store/DashboardStore";
import { useTranslations } from "next-intl";
import { useSnapshot } from "valtio";

interface DashboardPageProps {}

export function MainTable({}: DashboardPageProps) {
  const t = useTranslations<"Dashboard">();
  const dashboardStore = useSnapshot(DashboardStore);

  const { data } = useGqlQuery(GET_ALL_WEEKLY_MEAL_GROUPS_ADMIN, {
    where: {
      year: { equals: dashboardStore.calendar.year },
      weekOfYear: { equals: dashboardStore.calendar.week },
    },
  });

  console.log(data);

  return (
    <>
      {/* <Board items={data?.getAllMealSchedulesAdmin} /> */}

      {/* <MultipleContainers /> */}

      {/* <MultipleTrees2 /> */}

      {/* <BackupTree /> */}

      {/* <Backup3 /> */}
      {/* <Sorting /> */}
      {/* <SortableTree /> */}
      {/* <Sortable /> */}
      {/* <Table className="mt-5" aria-label="Table">
        <TableHeader>
          <TableColumn>{t("MONDAY")}</TableColumn>
          <TableColumn>{t("TUESDAY")}</TableColumn>
          <TableColumn>{t("WEDNESDAY")}</TableColumn>
          <TableColumn>{t("THURSDAY")}</TableColumn>
          <TableColumn>{t("FRIDAY")}</TableColumn>
          <TableColumn>{t("SATURDAY")}</TableColumn>
          <TableColumn>{t("SUNDAY")}</TableColumn>
        </TableHeader>
        <TableBody>
          <div></div>
          <TableRow>
            {Object.entries(groupedMealSchedules).map(
              ([weekday, schedules]) => (
                <TableCell key={weekday} className="align-top">
                  {schedules.map((schedule) => (
                    <TableItem key={schedule.id} schedule={schedule} />
                  ))}
                </TableCell>
              ),
            )}
          </TableRow>
        </TableBody>
      </Table> */}
    </>
  );
}
