"use client";

import { UPDATE_SETTINGS_ADMIN } from "@/documents/mutation/settings";
import { GET_SETTINGS_ADMIN } from "@/documents/query/settings";
import { useGqlMutation, useGqlQuery } from "@/fetcher";
import { GeneralStore } from "@/store/GeneralStore";
import { SettingsStore } from "@/store/SettingsStore";
import { catchErrorAlerts } from "@/utils/helpers/clientUtils";
import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { FormEvent, useEffect } from "react";
import { useSnapshot } from "valtio";

interface SettingsPageProps {}

export default function SettingsPage({}: SettingsPageProps) {
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
    <main>
      <div className="divide-y divide-white/5">
        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-base font-semibold leading-7">
              {t("SETTINGS")}
            </h2>
            <p className="mt-1 text-sm leading-6">
              {t("SETTINGS_DESCRIPTION")}
            </p>
          </div>

          <form className="md:col-span-2" onSubmit={onSubmit}>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
              <div className="col-span-full">
                <Input
                  type="text"
                  value={String(settingsStore.maxEditOrderDays)}
                  onChange={(e) =>
                    (SettingsStore.maxEditOrderDays = Number(e.target.value))
                  }
                  label={t("MAX_ORDER_CHANGE_DAYS")}
                  placeholder={t("MAX_ORDER_CHANGE_DAYS_PLACEHOLDER")}
                />
              </div>
            </div>

            <div className="mt-8 flex">
              <Button color="primary" size="lg" type="submit">
                {t("SAVE")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
