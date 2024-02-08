"use client";

import { MenuPagination } from "@/components/pages/dashboard/utils/MenuPagination";
import { OrdersGroupedCount } from "@/components/pages/orders/OrdersGroupedCount";
import { OrdersGroupedUsers } from "@/components/pages/orders/OrdersGroupedUsers";
import { useInitialDashboardStore } from "@/store/hooks/useInitialDashboardStore";

interface OrdersPageProps {}

export default function OrdersPage({}: OrdersPageProps) {
  useInitialDashboardStore();

  return (
    <>
      <MenuPagination />
      <main className="mt-5 w-full max-w-3xl rounded-lg bg-default-50 p-5">
        <OrdersGroupedCount />
        <OrdersGroupedUsers />
      </main>
    </>
  );
}
