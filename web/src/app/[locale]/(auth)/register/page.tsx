"use client";

import { EInput } from "@/components/elements/eInput";
import { ELink } from "@/components/elements/eLink";
import { REGISTER_USER } from "@/documents/mutation/auth";
import { useGqlMutation } from "@/fetcher";
import { useRouter } from "@/navigation";
import { AuthStore, DisplayPassword } from "@/store/AuthStore";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { BiLogIn } from "@react-icons/all-files/bi/BiLogIn";
import { CgPassword } from "@react-icons/all-files/cg/CgPassword";
import { useTranslations } from "next-intl";
import { useSnapshot } from "valtio";

interface RegisterPageProps {}

export default function RegisterPage({}: RegisterPageProps) {
  const t = useTranslations<"Auth">();
  const router = useRouter();
  const authStore = useSnapshot(AuthStore);
  const { mutateAsync: registerUserAsync } = useGqlMutation(REGISTER_USER);

  return (
    <form
      className="flex flex-col space-y-5 p-5 md:p-10"
      onSubmit={(e) => authStore.register(e, registerUserAsync, t, router)}
    >
      <h1 className="text-3xl font-bold">{t("REGISTER_HEADER")}</h1>
      <EInput
        label={t("EMAIL")}
        placeholder={t("EMAIL_PLACEHOLDER")}
        value={authStore.email}
        type="email"
        onChange={(e) => (AuthStore.email = e)}
        Icon={BiLogIn}
        required
      />
      <EInput
        label={t("PASSWORD")}
        placeholder={t("PASSWORD_PLACEHOLDER")}
        value={authStore.password}
        onChange={(e) => (AuthStore.password = e)}
        type={authStore.passwordInputType}
        Icon={CgPassword}
        endContent={<DisplayPassword />}
        required
      />
      <EInput
        label={t("CONFIRM_PASSWORD")}
        placeholder={t("CONFIRM_PASSWORD_PLACEHOLDER")}
        value={authStore.confirmPassword}
        type={authStore.passwordInputType}
        onChange={(e) => (AuthStore.confirmPassword = e)}
        Icon={CgPassword}
        endContent={<DisplayPassword />}
        required
      />
      <Button color="primary" type="submit" variant="shadow">
        {t("REGISTER_BUTTON")}
      </Button>
      <div className="relative">
        <Divider className="mt-2" />
        <p className="absolute left-1/2 top-1/2 mt-1 -translate-x-1/2 -translate-y-1/2 transform px-2 text-xs">
          {t("OR")}
        </p>
      </div>
      <div className="flex justify-center">
        <ELink href="/login" color="primary" size="sm">
          {t("LOGIN_BUTTON")}
        </ELink>
      </div>
    </form>
  );
}
