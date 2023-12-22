import NextIntlProvider from "@/components/NextIntlProvider";
import { ME } from "@/documents/query/auth";
import { redirect } from "@/navigation";
import { ssrHeaders, ssrUrl } from "@/utils/helpers/serverComponentsUtil";
import { customFetcherServer } from "@/utils/helpers/serverUtils";
import { Card } from "@nextui-org/card";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const { me } = await customFetcherServer(ME, undefined, ssrHeaders());
  const url = ssrUrl();

  if (me && url.pathname !== "/logout") redirect("/");

  return (
    <main className="flex min-h-[calc(100svh-4rem)]">
      <div className="m-auto max-w-[500px] md:w-2/5">
        <Card fullWidth>
          <NextIntlProvider tree="Auth">{children}</NextIntlProvider>
        </Card>
      </div>
    </main>
  );
}
