"use client";

import { MainTable } from "@/components/MainTable";
import { DashboardPagination } from "@/components/pages/dashboard/utils/DashboardPagination";

interface DashboardPageProps {}

export default function DashboardPage({}: DashboardPageProps) {
  return (
    <>
      <DashboardPagination />
      <MainTable />
    </>
  );
}
