import { localePath } from "@/utils/constants";
import {
  getMessageFallbackTranslation,
  onErrorTranslation,
} from "@/utils/helpers/translationHelper";
import { NextIntlClientProvider, useLocale } from "next-intl";

interface NextIntlProviderProps {
  children: React.ReactNode;
  tree: keyof Messages;
}

export default async function NextIntlProvider({
  children,
  tree,
}: NextIntlProviderProps) {
  const locale = useLocale();
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={(await localePath(locale))[tree]}
      onError={onErrorTranslation}
      getMessageFallback={getMessageFallbackTranslation}
    >
      {children}
    </NextIntlClientProvider>
  );
}
