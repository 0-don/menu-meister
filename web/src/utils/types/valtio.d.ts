import "valtio";
declare module "valtio" {
  function useSnapshot<T extends object>(p: T, o?: { sync: boolean }): T;
}
