import { LOCALES } from "@/middleware";
import { localePath } from "@/utils/constants";
import {
  getMessageFallbackTranslation,
  onErrorTranslation,
} from "@/utils/helpers/translationHelper";
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";

interface NextIntlProviderProps {
  children: React.ReactNode;
  tree: (keyof Messages)[];
}

export default async function NextIntlProvider({
  children,
  tree,
}: NextIntlProviderProps) {
  const locale = cookies().get("NEXT_LOCALE")?.value || LOCALES[0];
  const messages = await localePath(locale);
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={tree.reduce((acc, t) => ({ ...acc, ...messages[t] }), {})}
      onError={onErrorTranslation}
      getMessageFallback={getMessageFallbackTranslation}
    >
      {children}
    </NextIntlClientProvider>
  );
}
