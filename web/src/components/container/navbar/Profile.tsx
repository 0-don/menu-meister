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
import { BiLogOutCircle } from "@react-icons/all-files/bi/BiLogOutCircle";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { SiWebauthn } from "@react-icons/all-files/si/SiWebauthn";
import { useTranslations } from "next-intl";

export const Profile = () => {
  const t = useTranslations("Navbar");
  const { me } = useMeHook();
  console.log(me);
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
            <DropdownItem
              isReadOnly
              key="profile"
              className="h-14 gap-2 opacity-100"
            >
              <User
                name="Junior Garcia"
                description="@jrgarciadev"
                classNames={{
                  name: "text-default-600",
                  description: "text-default-500",
                }}
                avatarProps={{
                  size: "sm",
                  src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                }}
              />
            </DropdownItem>
            <>
              {me && (
                <>
                  <DropdownItem
                    key="login"
                    href="/login"
                    endContent={<BiLogIn className="text-large" />}
                  >
                    Login
                  </DropdownItem>
                  <DropdownItem
                    key="register"
                    href="/register"
                    endContent={<SiWebauthn className="text-large" />}
                  >
                    Register
                  </DropdownItem>
                </>
              )}
            </>
            <DropdownItem
              key="logout"
              href="/logout"
              endContent={<BiLogOutCircle className="text-large" />}
            >
              Log Out
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
