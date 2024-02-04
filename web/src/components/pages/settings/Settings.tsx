import { UPDATE_SETTINGS_ADMIN } from "@/documents/mutation/settings";
import { GET_SETTINGS_ADMIN } from "@/documents/query/settings";
import { useGqlMutation, useGqlQuery } from "@/fetcher";
import { GeneralStore } from "@/store/GeneralStore";
import { SettingsStore } from "@/store/SettingsStore";
import { catchErrorAlerts } from "@/utils/helpers/clientUtils";
import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React, { FormEvent, useEffect } from "react";
import { useSnapshot } from "valtio";

interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = ({}) => {
  const t = useTranslations<"Settings">();
  const settingsStore = useSnapshot(SettingsStore);
  const { data: { getSettingsAdmin } = {} } = useGqlQuery(GET_SETTINGS_ADMIN, {
    where: { id: { equals: 1 } },
  });

  const { mutateAsync: updateSettings } = useGqlMutation(UPDATE_SETTINGS_ADMIN);

  useEffect(() => {
    SettingsStore.setFormData(getSettingsAdmin);
  }, [getSettingsAdmin]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { updateSettingsAdmin } = await updateSettings({
        where: { id: settingsStore.id },
        data: {
          maxEditOrderDays: { set: Number(settingsStore.maxEditOrderDays) },
        },
      });
      SettingsStore.setFormData(updateSettingsAdmin);
      GeneralStore.addAlert({ msg: t("SETTINGS_UPDATED"), type: "success" });
    } catch (error) {
      catchErrorAlerts(error, t);
    }
  };

  return (
    <form className="subpixel-antialiased" onSubmit={onSubmit}>
      <p className="text-large">{t("SETTINGS")}</p>
      <p className="text-small text-default-400">{t("SETTINGS_DESCRIPTION")}</p>

      <Input
        type="text"
        className="my-2"
        value={String(settingsStore.maxEditOrderDays)}
        onChange={(e) =>
          (SettingsStore.maxEditOrderDays = Number(e.target.value))
        }
        label={t("MAX_ORDER_CHANGE_DAYS")}
        placeholder={t("MAX_ORDER_CHANGE_DAYS_PLACEHOLDER")}
      />

      <Button color="primary" type="submit">
        {t("SAVE")}
      </Button>
    </form>
  );
};
