import { UPDATE_SETTINGS_ADMIN } from "@/documents/mutation/settings";
import { setStore } from "@/utils/constants";
import { ResultOf } from "gql.tada";
import { proxy } from "valtio";

export type VendorDiscountStore = typeof SettingsStore;

const defaultForm = {
  id: 0,
  maxEditOrderDays: 0,
  createdAt: "",
  updatedAt: "",
  createdByUser: "",
  updatedByUser: "",
};

export const SettingsStore = proxy({
  ...defaultForm,
  reset: () => setStore(defaultForm, SettingsStore),
  setFormData: (
    data?: ResultOf<typeof UPDATE_SETTINGS_ADMIN>["updateSettingsAdmin"],
  ) => {
    if (data) {
      SettingsStore.id = data.id;
      SettingsStore.maxEditOrderDays = data.maxEditOrderDays;
      SettingsStore.createdAt = data.createdAt;
      SettingsStore.updatedAt = data.updatedAt;
      SettingsStore.createdByUser = data.createdByUser.username;
      SettingsStore.updatedByUser = data.updatedByUser.username;
    }
  },
});
