import NextIntlProvider from "@/components/NextIntlProvider";
import { ME } from "@/documents/query/auth";
import { MeQuery, UserRoleName } from "@/gql/graphql";
import { redirect } from "@/navigation";
import { getKey } from "@/utils/helpers/clientUtils";
import { prefetchQuery } from "@/utils/helpers/serverComponentsUtil";

interface MenuLayoutProps {
  children: React.ReactNode;
}

export default async function MenuLayout({ children }: MenuLayoutProps) {
  const { queryClient } = await prefetchQuery([{ document: ME }]);
  const data = queryClient.getQueryData<MeQuery>(getKey(ME));

  if (!data?.me?.userRole?.map(({ name }) => name === UserRoleName.User))
    redirect("/");

  return <NextIntlProvider tree={"Menu"}>{children}</NextIntlProvider>;
}
