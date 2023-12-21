import { ssrUrl } from "@/utils/helpers/serverComponentsUtil";
import { NavbarContent, Navbar as NextUINavbar } from "@nextui-org/navbar";
import { useTranslations } from "next-intl";
import React from "react";
import { Profile } from "./Profile";

interface NavbarProps {
  locale?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  // const { me } = useMeHook();

  const t = useTranslations("Navbar");
  const pathname = ssrUrl().pathname;

  const Items = (
    <>
      {/* <LanguageSwitch locale={locale} /> */}
      {/* <ThemeSwitch /> */}
      <Profile />
    </>
  );

  const LINKS = [
    { link: "/", name: t("HOME") },
    { link: "/about", name: t("ABOUT"), display: true },
  ].filter((link) => !link.display);

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      classNames={{
        base: "drop-shadow-2xl",
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      {/* <NavbarBrand as="li" className="max-w-fit">
        <Link
          color="foreground"
          className="flex items-center space-x-0.5 text-2xl font-bold"
          href="/"
        >
          <Image src={logo_mini} alt="logo" />
          <span>{process.env.NEXT_PUBLIC_BRAND_NAME}</span>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex">
        {LINKS.map(({ link, name }) => (
          <NavbarItem key={link} isActive={pathname === link}>
            <ELink href={link} size="lg">
              {name}
            </ELink>
          </NavbarItem>
        ))}
      </NavbarContent> */}

      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end"
      >
        <Profile />
      </NavbarContent>

      {/* <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
        {Items}
        <NavbarMenuToggle />
      </NavbarContent> */}

      {/* <NavbarMenu>
        {LINKS.map(({ link, name }) => (
          <NavbarMenuItem key={link} isActive={pathname === link}>
            <ELink href={link} size="lg">
              {name}
            </ELink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </NextUINavbar>
  );
};
