"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= MENU ================= */

export function Menu({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      onMouseLeave={() => setActive(null)}
      className="flex items-center gap-8"
    >
      {children}
    </div>
  );
}

/* ================= MENU ITEM ================= */

export function MenuItem({
  item,
  active,
  setActive,
  children,
}: {
  item: string;
  active: string | null;
  setActive: (item: string) => void;
  children: React.ReactNode;
}) {
  const open = active === item;

  return (
    <div
      className="relative"
      onMouseEnter={() => setActive(item)}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-neutral-800 hover:text-black transition"
      >
        {item}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            className="absolute left-1/2 top-full z-50 mt-4 -translate-x-1/2"
          >
            <div
              className="
                rounded-2xl bg-white/90 backdrop-blur-xl
                border border-black/10
                shadow-[0_30px_80px_rgba(0,0,0,0.18)]
                p-4
              "
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================= PRODUCT ITEM ================= */

export function ProductItem({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) {
  return (
    <a
      href={href}
      className="group flex gap-4 rounded-xl p-3 hover:bg-black/5 transition"
    >
      <img
        src={src}
        alt={title}
        width={88}
        height={60}
        className="rounded-lg object-cover shadow-md"
      />
      <div>
        <h4 className="text-sm font-semibold text-black">
          {title}
        </h4>
        <p className="mt-1 text-xs text-neutral-600">
          {description}
        </p>
      </div>
    </a>
  );
}

/* ================= SIMPLE LINK ================= */

export function HoveredLink({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...rest}
      className="block text-sm text-neutral-600 hover:text-black transition"
    >
      {children}
    </a>
  );
}
