"use client";
import { uid } from "@/utils/helpers/clientUtils";
import { Alert, AlertType } from "@/utils/types/store";
import { proxy } from "valtio";

export type GeneralStore = typeof GeneralStore;

export const GeneralStore = proxy({
  alerts: [] as Alert[],
  addAlert: (alert: { msg: string; type: AlertType; duration?: number }) =>
    GeneralStore.alerts.push({ ...alert, id: uid() }),
  removeAlert: (id: string) =>
    (GeneralStore.alerts = GeneralStore.alerts.filter((e) => id !== e.id)),
});
