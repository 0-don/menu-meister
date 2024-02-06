import { MainTable } from "@/components/MainTable";
import { MenuPagination } from "@/components/pages/dashboard/utils/MenuPagination";

interface UserPageProps {}

export default function UserPage({}: UserPageProps) {
  return (
    <>
      <MenuPagination />
      <MainTable />
    </>
  );
}
