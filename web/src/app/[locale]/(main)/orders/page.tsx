"use client";

import { useUserMealHook } from "@/components/hooks/useUserMealHook";
import { MenuPagination } from "@/components/pages/dashboard/utils/MenuPagination";
import { useInitialDashboardStore } from "@/store/hooks/useInitialDashboardStore";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

interface OrdersPageProps {}

export default function OrdersPage({}: OrdersPageProps) {
  useInitialDashboardStore();

  const {} = useUserMealHook();

  return (
    <>
      <MenuPagination />
      <div className="container mx-auto">
        <Table aria-label="Example static collection table" className="mt-5">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
