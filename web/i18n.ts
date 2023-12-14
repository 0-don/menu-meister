import { getRequestConfig } from "next-intl/server";
import { localePath } from "./src/utils/constants";

export default getRequestConfig(async ({ locale }) => ({
  messages: await localePath(locale),
}));
