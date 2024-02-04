"use client";
import { useMeHook } from "@/components/hooks/useMeHook";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { BiLogIn } from "@react-icons/all-files/bi/BiLogIn";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { ImProfile } from "@react-icons/all-files/im/ImProfile";
import { IoSettings } from "@react-icons/all-files/io5/IoSettings";
import { SiWebauthn } from "@react-icons/all-files/si/SiWebauthn";
import { useTranslations } from "next-intl";

export const Profile = () => {
  const t = useTranslations<"Navbar">();
  const { me, isHighRank } = useMeHook();

  const Items = [
    me && (
      <DropdownItem key="profile" isReadOnly className="h-14 gap-2 opacity-100">
        <User
          name={me?.username}
          description={me?.email}
          classNames={{
            name: "text-default-600",
            description: "text-default-500",
          }}
        />
      </DropdownItem>
    ),
    me && (
      <DropdownItem
        key="profileSettings"
        href="/user/settings"
        endContent={<ImProfile className="text-large" />}
      >
        {t("PROFILE_SETTINGS")}
      </DropdownItem>
    ),
    me && isHighRank && (
      <DropdownItem
        key="settings"
        href="/settings"
        endContent={<IoSettings className="text-large" />}
      >
        {t("SETTINGS")}
      </DropdownItem>
    ),

    me && (
      <DropdownItem
        key="logout"
        href="/logout"
        endContent={<BiLogIn className="text-large" />}
      >
        {t("LOGOUT")}
      </DropdownItem>
    ),
    !me && (
      <DropdownItem
        key="login"
        href="/login"
        endContent={<BiLogIn className="text-large" />}
      >
        {t("LOGIN")}
      </DropdownItem>
    ),
    !me && (
      <DropdownItem
        key="register"
        href="/register"
        endContent={<SiWebauthn className="text-large" />}
      >
        {t("REGISTER")}
      </DropdownItem>
    ),
  ].filter(Boolean) as JSX.Element[];

  return (
    <>
      <Dropdown
        showArrow
        radius="sm"
        classNames={{
          base: "before:bg-default-200",
          content: "p-0 border-small border-divider bg-background",
        }}
      >
        <DropdownTrigger className="!w-1">
          <Button isIconOnly variant="flat">
            <FaUser className="text-lg" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Profile"
          disabledKeys={["profile"]}
          className="p-3"
          itemClasses={{
            base: [
              "rounded-md",
              "text-default-500",
              "transition-opacity",
              "data-[hover=true]:text-foreground",
              "data-[hover=true]:bg-default-100",
              "dark:data-[hover=true]:bg-default-50",
              "data-[selectable=true]:focus:bg-default-50",
              "data-[pressed=true]:opacity-70",
              "data-[focus-visible=true]:ring-default-500",
            ],
          }}
        >
          <DropdownSection aria-label="Profile & Actions">
            {Items}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
