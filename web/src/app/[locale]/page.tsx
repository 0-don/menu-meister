import { Link } from "@/navigation";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <main className="m-auto flex h-full items-center justify-center space-x-5">
      <div className="space-y-2">
        {/* Gradient Heading */}
        <h1 className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text pb-3 text-5xl font-bold text-transparent dark:from-yellow-600 dark:to-orange-800">
          {process.env.NEXT_PUBLIC_BRAND_NAME}
        </h1>
        {/* Description Text */}
        <p className="text-lg text-gray-400 dark:text-gray-300">
          Your ultimate companion for managing daily meals efficiently.
        </p>
        <div className="space-x-5">
          <Link href="/login">
            <Button size="lg" color="warning">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button size="lg" color="default">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
