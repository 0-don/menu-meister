"use client";
import { AnimatePresence, Variants, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface MyModalProps {
  children?: React.ReactNode;
  className?: string;
}
export const MyModal: React.FC<MyModalProps> = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => setIsOpen(false);

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
