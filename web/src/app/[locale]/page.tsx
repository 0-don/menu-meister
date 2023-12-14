import { ThemeSwitcher } from "@/components/utils/ThemeSwitcher";
import { Link } from "@/navigation";
import { Button } from "@nextui-org/react";

export default function Home() {
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
