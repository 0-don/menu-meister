import { ME } from "@/documents/query/auth";
import { getKey } from "@/utils/helpers/clientUtils";
import { prefetchQuery } from "@/utils/helpers/serverComponentsUtil";
import { UserRoleName } from "@/utils/types/enum";
import { ResultOf } from "gql.tada";
import { redirect } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const { queryClient } = await prefetchQuery([{ document: ME }]);
  const data = queryClient.getQueryData<ResultOf<typeof ME>>(getKey(ME));

  if (
    !data?.me?.userRole?.map(
      ({ name }) => name === UserRoleName.Admin || name === UserRoleName.Mod,
    )
  )
    redirect("/");

  return <>{children}</>;
}
