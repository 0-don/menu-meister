import { Link } from "@/navigation";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Link href="/login">
        <Button>Login</Button>
      </Link>
      <Link href="/register">Signup</Link>
    </main>
  );
}
