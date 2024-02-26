"use client";
import { useRouter } from "@/navigation";
import { AnimatePresence, Variants, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface MyModalProps {
  pageModal?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export const MyModal: React.FC<MyModalProps> = ({
  pageModal,
  children,
  className,
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
    pageModal && router.back();
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50"
            variants={backdropVariants}
            onClick={closeModal}
          ></motion.div>
          <motion.div
            className={`relative z-10 mx-auto w-full rounded-lg p-6 shadow-lg ${className}`}
            variants={modalVariants}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
