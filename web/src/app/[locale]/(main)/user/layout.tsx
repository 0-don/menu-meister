import NextIntlProvider from "@/components/NextIntlProvider";

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return <NextIntlProvider tree={["User", "Allergens", "Enums"]}>{children}</NextIntlProvider>;
}
