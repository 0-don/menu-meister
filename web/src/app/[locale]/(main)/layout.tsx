import { localePath } from "@/utils/constants";
import {
  getMessageFallbackTranslation,
  onErrorTranslation,
} from "@/utils/helpers/translationHelper";
import { NextIntlClientProvider } from "next-intl";

interface HomeLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function HomeLayout({
  children,
  params,
}: HomeLayoutProps) {


  

  return (
    <>
      <NextIntlClientProvider
        locale={params.locale}
        messages={(await localePath(params.locale)).Main}
        onError={onErrorTranslation}
        getMessageFallback={getMessageFallbackTranslation}
      >
        {children}
      </NextIntlClientProvider>
    </>
  );
}
