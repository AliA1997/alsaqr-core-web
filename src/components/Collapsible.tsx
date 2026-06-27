// Collapsible. Ported from the reference repo's src/common/Collapsible.tsx — a
// lightweight titled section that toggles its children open/closed. Used by the
// Sidebar to group links (e.g. "Location", "Categories"). For multi-section
// accordions with one-open-at-a-time semantics, use Accordion instead.
import React, { useState } from "react";
import { motion } from "framer-motion";

interface CollapsibleProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Collapsible = ({
  title,
  defaultOpen = false,
  children,
  className = "",
}: CollapsibleProps) => {
  const [open, setOpen] = useState<boolean>(defaultOpen);

  return (
    <div className={`w-full ${className}`}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        aria-expanded={open}
        className="w-full flex justify-between items-center px-4 pt-3 pb-1"
      >
        <span className="text-xs font-bold uppercase opacity-60 dark:text-gray-50">
          {title}
        </span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </motion.svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Collapsible;
