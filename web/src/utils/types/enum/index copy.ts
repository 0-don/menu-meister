type TimeOfDayUnion = "Any" | "Morning" | "Forenoon" | "Noon" | "Afternoon" | "Evening" | "Night";

type UnionToIntersection<U> = (
  U extends never ? never : (arg: U) => never
) extends (arg: infer I) => void
  ? I
  : never;

type UnionToTuple<T> =
  UnionToIntersection<T extends never ? never : (t: T) => T> extends (
    _: never,
  ) => infer W
    ? [...UnionToTuple<Exclude<T, W>>, W]
    : [];

const createEnum = <T extends string>(keys: UnionToTuple<T>): { [K in T]: K } =>
  (keys as T[]).reduce(
    (acc, key) => ({ ...acc, [key]: key }),
    {} as { [K in T]: K },
  );

const TimeOfDay = createEnum<TimeOfDayUnion>(["Any", "Morning", "Forenoon", "Noon", "Afternoon", "Evening", "Night"]);

console.log(TimeOfDay);
type test = keyof typeof TimeOfDay;