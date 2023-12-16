import { ThemeSwitch } from "@/components/utils/ThemeSwitch";
import { Link } from "@/navigation";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center space-x-5">
      <Button>Test</Button>
      <Link href="/login">
        <Button>Login</Button>
      </Link>
      <Link href="/register">
        <Button>Register</Button>
      </Link>
      <ThemeSwitch />
    </main>
  );
}
