import { TimeOfDay } from "@/gql/graphql";
import { LuClock10, LuClock12, LuClock2, LuClock6 } from "react-icons/lu";
import { TbCalendarTime } from "react-icons/tb";


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

export const TIME_OF_DAY_CONFIGS = [
  {
    time: TimeOfDay.Any,
    icon: TbCalendarTime,
  },
  {
    time: TimeOfDay.Morning,
    icon: LuClock6,
  },
  {
    time: TimeOfDay.Forenoon,
    icon: LuClock10,
  },
  {
    time: TimeOfDay.Noon,
    icon: LuClock12,
  },
  {
    time: TimeOfDay.Afternoon,
    icon: LuClock2,
  },
  {
    time: TimeOfDay.Evening,
    icon: LuClock6,
  },
  {
    time: TimeOfDay.Night,
    icon: LuClock12,
  },
];

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
