import { localePath } from "@/utils/constants";
import {
  getMessageFallbackTranslation,
  onErrorTranslation,
} from "@/utils/helpers/translationHelper";
import { NextIntlClientProvider } from "next-intl";

interface AuthLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function AuthLayout({
  children,
  params,
}: AuthLayoutProps) {
  return (
    <main className="flex h-[90vh]">
      <div className="m-auto p-5">
        <section className="bg-container max-w-[500px] rounded-lg p-5 shadow-xl md:p-10">
          <NextIntlClientProvider
            locale={params.locale}
            messages={(await localePath(params.locale)).Auth}
            onError={onErrorTranslation}
            getMessageFallback={getMessageFallbackTranslation}
          >
            {children}
          </NextIntlClientProvider>
        </section>
      </div>
    </main>
  );
}
