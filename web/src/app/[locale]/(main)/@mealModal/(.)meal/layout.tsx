import NextIntlProvider from "@/components/NextIntlProvider";

interface MealIdLayoutProps {
  children: React.ReactNode;
}

export default function MealIdLayout({ children }: MealIdLayoutProps) {
  return (
    <>
      <NextIntlProvider tree={"Allergens"}>{children}</NextIntlProvider>
    </>
  );
}
