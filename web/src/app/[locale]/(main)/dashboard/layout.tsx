import NextIntlProvider from "@/components/NextIntlProvider";
import { ME } from "@/documents/query/auth";
import { MeQuery, UserRoleName } from "@/gql/graphql";
import { getKey } from "@/utils/helpers/clientUtils";
import { prefetchQuery } from "@/utils/helpers/serverComponentsUtil";
import { redirect } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const { queryClient } = await prefetchQuery([{ document: ME }]);
  const data = queryClient.getQueryData<MeQuery>(getKey(ME));

  if (
    !data?.me?.UserRole?.map(
      ({ name }) => name === UserRoleName.Admin || name === UserRoleName.Mod,
    )
  )
    redirect("/");

  return <NextIntlProvider tree={"Dashboard"}>{children}</NextIntlProvider>;
}
