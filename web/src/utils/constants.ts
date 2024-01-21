export const X_URL = "x-url";
export const BACKEND_INTERNAL_URL = "http://menu-meister-server:4000/graphql";
export const TOKEN = "token";
export const ROLES = "roles";

export const localePath = async (locale: string): Promise<Messages> =>
  (await import(`../../public/locales/${locale}.json`)).default;

export function debounce(fn: (...args: any) => any, ms: number) {
  let timer: NodeJS.Timeout | undefined = undefined;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      // @ts-ignore
      fn.apply(this, args);
    }, ms);
  };
}

export const WEEK_DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export const setStore = (initial: any, state: any) => {
  const resetObj = window.structuredClone(initial);
  Object.keys(resetObj).forEach((key) => (state[key] = resetObj[key]));
};
