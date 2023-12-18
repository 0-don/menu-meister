import { Button } from "@nextui-org/button";
import logo from "@public/images/logo.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // 4rem
  const t = useTranslations("Main");
  return (
    <>
      {/* <div
        class="relative z-0 flex min-h-[calc(100svh-4rem)] w-auto flex-col items-center justify-between gap-8 pb-16 pt-[48px] font-sans md:pb-24 md:pt-16 lg:pb-32 lg:pt-20"
        style="opacity: 1; transform: none;"
      >
        <span
          class="gradients_glow__pK1bc gradients_glowConic__xvTFv absolute top-[-500px] opacity-[0.15] dark:opacity-20"
          style="width:1000px;height:1000px;border-radius:100%"
        ></span>
      </div> */}
      <div className="relative z-0 flex min-h-[calc(100svh-var(--nextra-navbar-height))] w-auto transform-none flex-col items-center justify-between gap-8 pb-16 pt-[48px] font-sans opacity-100 md:pb-24 md:pt-16 lg:pb-32 lg:pt-20">
        <span
          className="absolute top-[-500px] h-[1000px] w-[1000px] rounded-full opacity-[0.15] blur-[75px] filter dark:opacity-[0.2]"
          style={{
            mixBlendMode: "normal",
            willChange: "filter",
            background:
              "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 1turn)",
          }}
        />
        <Image src={logo} height={200} width={200} alt="logo" />
        <div className="space-x-5">
          <Link href="/login">
            <Button size="lg" color="primary">
              {t("LOGIN_BUTTON")}
            </Button>
          </Link>
          <Link href="/register">
            <Button  size="lg" color="default">
              {t("REGISTER_BUTTON")}
            </Button>
          </Link>
        </div>
      </div>

      {/* 
      <main classNameName="container mx-auto max-w-7xl flex-grow px-6 pt-16">
        <div classNameName="space-y-2">
          <h1 className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-5xl font-bold leading-relaxed text-transparent dark:from-secondary dark:to-primary">
            {process.env.NEXT_PUBLIC_BRAND_NAME}
          </h1>

          <p className="text-lg">{t("DESCRIPTION")}</p>
          <div className="space-x-5">
            <Link href="/login">
              <Button size="lg" color="primary">
                {t("LOGIN_BUTTON")}
              </Button>
            </Link>
            <Link href="/register">
              <Button size="lg" color="default">
                {t("REGISTER_BUTTON")}
              </Button>
            </Link>
          </div>
        </div>
      </main> */}
    </>
  );
}
