"use client";

import { MyInput } from "@/components/elements/MyInput";
import { BiLogIn } from "react-icons/bi";
import { MyLink } from "@/components/elements/MyLink";
import { LOGIN_USER } from "@/documents/mutation/auth";
import { CgPassword } from "react-icons/cg";
import { useGqlMutation } from "@/fetcher";
import { useRouter } from "@/navigation";
import { AuthStore, DisplayPassword } from "@/store/AuthStore";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useTranslations } from "next-intl";
import { useSnapshot } from "valtio";

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps) {
  const t = useTranslations<"Auth">();
  const router = useRouter();
  const authStore = useSnapshot(AuthStore);
  const { mutateAsync: loginUserAsync } = useGqlMutation(LOGIN_USER);

  return (
    <form
      className="flex flex-col space-y-5 p-5 md:p-10"
      onSubmit={(e) => authStore.login(e, loginUserAsync, t, router)}
    >
      <h1 className="text-3xl font-bold">{t("LOGIN_HEADER")}</h1>
      <MyInput
        label={t("EMAIL")}
        placeholder={t("EMAIL_PLACEHOLDER")}
        value={authStore.email}
        type="email"
        onChange={(e) => (AuthStore.email = e.target.value)}
        Icon={BiLogIn}
        required
      />
      <MyInput
        label={t("PASSWORD")}
        placeholder={t("PASSWORD_PLACEHOLDER")}
        value={authStore.password}
        onChange={(e) => (AuthStore.password = e.target.value)}
        type={authStore.passwordInputType}
        Icon={CgPassword}
        endContent={<DisplayPassword />}
        required
      />
      <Button type="submit" color="primary" variant="shadow">
        {t("LOGIN_BUTTON")}
      </Button>
      <div className="relative">
        <Divider className="mt-2" />
        <p className="absolute left-1/2 top-1/2 mt-1 -translate-x-1/2 -translate-y-1/2 transform px-2 text-xs">
          {t("OR")}
        </p>
      </div>
      <div className="flex justify-center">
        <MyLink href="/register" color="primary" size="sm">
          {t("REGISTER_BUTTON")}
        </MyLink>
      </div>
    </form>
  );
}
