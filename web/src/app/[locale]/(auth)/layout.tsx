import NextIntlProvider from "@/components/NextIntlProvider";
import { ME } from "@/documents/query/auth";
import { redirect } from "@/navigation";
import { ssrHeaders, ssrUrl } from "@/utils/helpers/serverComponentsUtil";
import { customFetcherServer } from "@/utils/helpers/serverUtils";
import { UserRoleName } from "@/utils/types/enum";
import { Card } from "@nextui-org/card";
import { ResultOf } from "gql.tada";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const url = ssrUrl();
  let user: ResultOf<typeof ME>["me"] | undefined;

  try {
    user = (await customFetcherServer(ME, undefined, ssrHeaders()))?.me;
  } catch (_) {}

  if (user && url.pathname !== "/logout") {
    user.userRole?.some(
      ({ name }) => name === UserRoleName.Admin || name === UserRoleName.Mod,
    )
      ? redirect("/dashboard")
      : redirect("/menu");
  }

  return (
    <main className="flex min-h-[calc(100svh-4rem)]">
      <div className="m-auto max-w-[500px] md:w-2/5">
        <Card fullWidth>
          <NextIntlProvider tree={["Auth"]}>{children}</NextIntlProvider>
        </Card>
      </div>
    </main>
  );
}
