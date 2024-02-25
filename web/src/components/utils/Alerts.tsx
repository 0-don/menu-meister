"use client";

import { GeneralStore } from "@/store/GeneralStore";
import { AlertType } from "@/utils/types/store";
import { animated, useTransition } from "@react-spring/web";
import { useTranslations } from "next-intl";
import React, { useMemo } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useSnapshot } from "valtio";

interface AlertsProps {
  config?: {
    tension: number;
    friction: number;
    precision: number;
  };
  timeout?: number;
}

export const Alerts: React.FC<AlertsProps> = ({
  config = { tension: 125, friction: 20, precision: 0.1 },
  timeout = 3000,
}) => {
  const t = useTranslations();
  const generalStore = useSnapshot(GeneralStore);
  const refMap = useMemo(() => new WeakMap(), []);
  const cancelMap = useMemo(() => new WeakMap(), []);

  const transitions = useTransition(generalStore.alerts, {
    from: { opacity: 0, height: 0, life: "100%" },
    keys: (item) => item.id,
    enter: (item) => async (next, cancel) => {
      cancelMap.set(item, cancel);
      await next({ opacity: 1, height: refMap.get(item).offsetHeight });
      await next({ life: "0%" });
    },
    leave: [{ opacity: 0 }, { height: 0 }],
    onRest: (_result: unknown, _ctrl: unknown, item: any) =>
      GeneralStore.removeAlert(item.id),
    config: (item, index, phase) => (key) =>
      phase === "enter" && key === "life"
        ? { duration: item?.duration || timeout }
        : config,
  });

  const colors = (type: AlertType) => {
    if (type === "failure") {
      return {
        background: "border-red-500 bg-red-100 text-red-700",
        icon: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400",
        life: "bg-gradient-to-r from-red-300 to-red-700",
      };
    } else if (type === "gray") {
      return {
        background: "border-gray-500 bg-gray-100 text-gray-700",
        icon: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400",
        life: "bg-gradient-to-r from-gray-300 to-gray-700",
      };
    } else if (type === "info") {
      return {
        background: "border-blue-500 bg-blue-100 text-blue-700",
        icon: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400",
        life: "bg-gradient-to-r from-blue-300 to-blue-700",
      };
    } else if (type === "success") {
      return {
        background: "border-green-500 bg-green-100 text-green-700",
        icon: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400",
        life: "bg-gradient-to-r from-green-300 to-green-700",
      };
    } else if (type === "warning") {
      return {
        background: "border-orange-500 bg-orange-100 text-orange-700",
        icon: "bg-orange-100 text-orange-500 hover:bg-orange-200 focus:ring-orange-400",
        life: "bg-gradient-to-r from-orange-300 to-orange-700",
      };
    } else {
      return {
        background: "border-gray-500 bg-gray-100 text-gray-700",
        icon: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400",
        life: "bg-gradient-to-r from-gray-300 to-gray-700",
      };
    }
  };

  return (
    <>
      <div
        className={`fixed bottom-auto right-10 top-7 z-50 m-auto flex flex-col items-end md:bottom-7 md:right-7 md:top-auto`}
      >
        {transitions(({ life, ...style }, item) => (
          <animated.div
            className="relative box-border w-[30ch] overflow-hidden md:w-[40ch]"
            style={style}
          >
            <div
              className={`mt-2 flex h-auto justify-between overflow-hidden p-3 pb-4 dark:opacity-90 ${
                colors(item.type).background
              }`}
              ref={(ref: HTMLDivElement) => ref && refMap.set(item, ref)}
            >
              <animated.div
                style={{ right: life }}
                className={`absolute bottom-0 left-0 h-1 w-auto ${
                  colors(item.type).life
                }`}
              />
              <p>{t(item.msg as any)}</p>
              <VscChromeClose
                className={`cursor-pointer rounded-full ${
                  colors(item.type).icon
                }`}
                onClick={(e: any) => {
                  e.stopPropagation();
                  if (cancelMap.has(item) && life.get() !== "0%")
                    cancelMap.get(item)();
                }}
              />
            </div>
          </animated.div>
        ))}
      </div>
    </>
  );
};
