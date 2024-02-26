"use client";
import { GeneralStore } from "@/store/GeneralStore";
import { AlertType } from "@/utils/types/store";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useSnapshot } from "valtio";

interface AlertsProps {
  timeout?: number;
}

export const Alerts: React.FC<AlertsProps> = ({ timeout = 3000 }) => {
  const t = useTranslations();
  const generalStore = useSnapshot(GeneralStore);

  useEffect(() => {
    generalStore.alerts.forEach((alert) => {
      const timer = setTimeout(
        () => GeneralStore.removeAlert(alert.id),
        alert.duration || timeout,
      );
      return () => clearTimeout(timer);
    });
  }, [generalStore.alerts, timeout]);

  const variants = {
    initial: { opacity: 0, y: 50, scale: 0.3 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.5 },
  };

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
      <div className="fixed bottom-auto right-10 top-7 z-50 m-auto flex flex-col items-end md:bottom-7 md:right-7 md:top-auto">
        <AnimatePresence>
          {generalStore.alerts.map((item) => (
            <motion.div
              key={item.id}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="relative mt-2 box-border w-[30ch] overflow-hidden md:w-[40ch]"
            >
              <div
                className={`flex h-auto justify-between overflow-hidden p-3 pb-4 dark:opacity-90 ${colors(item.type).background}`}
              >
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 ${colors(item.type).life}`}
                  initial={{ width: 0 }}
                  animate={{
                    width: "100%",
                    transition: { duration: item.duration || timeout / 1000 },
                  }}
                  exit={{ width: 0 }}
                />
                <p>{t(item.msg as any)}</p>
                <VscChromeClose
                  className={`cursor-pointer rounded-full ${colors(item.type).icon}`}
                  onClick={() => GeneralStore.removeAlert(item.id)}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};
