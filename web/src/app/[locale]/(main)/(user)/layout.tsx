import NextIntlProvider from "@/components/NextIntlProvider";

interface UserLayoutProps {
  children: React.ReactNode;
  userModal: React.ReactNode;
}

export default function UserLayout({ children, userModal }: UserLayoutProps) {
  return (
    <NextIntlProvider tree={["User", "Allergens", "Enums"]}>
      {children}
      {userModal}
    </NextIntlProvider>
  );
}
