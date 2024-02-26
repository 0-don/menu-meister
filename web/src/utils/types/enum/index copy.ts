type TimeOfDayUnion =
  | "Any"
  | "Morning"
  | "Forenoon"
  | "Noon"
  | "Afternoon"
  | "Evening"
  | "Night";

type UnionToIntersection<U> = (
  U extends never ? never : (arg: U) => never
) extends (arg: infer I) => void
  ? I
  : never;
type UnionToTuple<T, A extends any[] = []> =
  UnionToIntersection<T extends never ? never : (t: T) => T> extends (
    _: never,
  ) => infer W
    ? UnionToTuple<Exclude<T, W>, [...A, W]>
    : A;

function createEnum<T extends string>(keys: UnionToTuple<T>): { [K in T]: K } {
  const tupleArray = keys as unknown as T[];

  return tupleArray.reduce(
    (acc, key) => {
      acc[key] = key;
      return acc;
    },
    {} as { [K in T]: K },
  );
}

const TimeOfDay = createEnum<TimeOfDayUnion>([
  "Night",
  "Evening",
  "Afternoon",
  "Noon",
  "Forenoon",
  "Morning",
  "Any",
]);

console.log(TimeOfDay);
type test = keyof typeof TimeOfDay;
