import { ThemeSwitcher } from "@/components/utils/ThemeSwitcher";
import { GET_ALL_USERS } from "@/documents/queries/user";
import { useGqlQuery } from "@/fetcher";
import { Link } from "@/navigation";
import { Button } from "@nextui-org/react";

export default function Home() {
  const { data } = useGqlQuery(GET_ALL_USERS);
  data?.getAllUsersUser?.[0].id
  return (
    <main className="flex min-h-screen items-center justify-center space-x-5">
      <Link href="/login">
        <Button>Login</Button>
      </Link>
      <Link href="/register">
        <Button>Register</Button>
      </Link>
      <ThemeSwitcher />
    </main>
  );
}
