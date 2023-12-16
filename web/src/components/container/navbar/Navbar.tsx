import { ThemeSwitch } from "@/components/utils/ThemeSwitch";
import { Link as NextLink } from "@/navigation";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import { IoSearch } from "@react-icons/all-files/io5/IoSearch";
import clsx from "clsx";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <IoSearch className="pointer-events-none flex-shrink-0 text-base text-default-400" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <p className="font-bold text-inherit"> Meal Manager</p>
          </NextLink>
        </NavbarBrand>
        <ul className="ml-2 hidden justify-start gap-4 lg:flex">
          <NavbarItem key={"/"}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:font-medium data-[active=true]:text-primary",
              )}
              color="foreground"
              href={"/"}
            >
              Home
            </NextLink>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 sm:flex">
          <Link isExternal href="/" aria-label="Twitter">
            <IoSearch className="text-default-500" />
          </Link>
          <Link isExternal href="/" aria-label="Discord">
            <IoSearch className="text-default-500" />
          </Link>
          <Link isExternal href="/" aria-label="Github">
            <IoSearch className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="bg-default-100 text-sm font-normal text-default-600"
            href={"/"}
            startContent={<IoSearch className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
        <Link isExternal href={"/"} aria-label="Github">
          <IoSearch className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem key={`/`}>
            <Link color={"foreground"} href="#" size="lg">
              Home
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
