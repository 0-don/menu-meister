import { MainTable } from "@/components/MainTable";
import { MenuPagination } from "@/components/pages/dashboard/utils/MenuPagination";

interface DashboardPageProps {}

export default function DashboardPage({}: DashboardPageProps) {
  return (
    <>
      <MenuPagination />
      <MainTable />
    </>
  );
}
