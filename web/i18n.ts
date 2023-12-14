import { localePath } from "@/utils/constants";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: await localePath(locale),
}));
