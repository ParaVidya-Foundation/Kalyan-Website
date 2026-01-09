import { cn } from "@/lib/utils";
import React from "react";

/* ===========================
   GRID
=========================== */

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `
        mx-auto
        grid
        w-full
        grid-cols-1
        gap-6
        md:grid-cols-3
        md:auto-rows-[22rem]
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

/* ===========================
   ITEM
=========================== */

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `
        group/bento
        relative
        row-span-1
        flex flex-col justify-between
        space-y-4
        rounded-2xl
        border border-white/[0.08]
        bg-neutral-950
        p-5
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_20px_80px_rgba(139,92,246,0.25)]
        `,
        className
      )}
    >
      {header}

      <div className="transition duration-300 group-hover/bento:translate-x-1">
        {icon}

        <div className="mt-2 mb-1 font-sans font-semibold text-neutral-100">
          {title}
        </div>

        <div className="font-sans text-sm text-neutral-400 leading-relaxed">
          {description}
        </div>
      </div>

      {/* glow ring */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          ring-1 ring-violet-500/10
          opacity-0 group-hover/bento:opacity-100
          transition
        "
      />
    </div>
  );
};
