"use client";

import React, { useState, useEffect, useId, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
  onWordChange?: (index: number) => void; // ✅ FIX
}

export function ContainerTextFlip({
  words = [],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
  onWordChange,
}: ContainerTextFlipProps) {
  const id = useId();
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(120);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.scrollWidth + 32);
    }
  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % words.length;
        onWordChange?.(next); // ✅ SYNC IMAGE
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval, onWordChange]);

  return (
    <motion.span
      layout
      animate={{ width }}
      transition={{ duration: animationDuration / 1000 }}
      className={cn(
        "relative inline-block overflow-hidden rounded-lg px-4 py-2",
        "bg-gradient-to-b from-neutral-100 to-neutral-200",
        "shadow-[inset_0_-1px_rgba(0,0,0,0.06),0_6px_14px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      <motion.span
        ref={textRef}
        key={words[index]}
        initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: animationDuration / 1000, ease: "easeOut" }}
        className={cn(
          "inline-block font-serif text-black",
          "text-4xl md:text-7xl",
          textClassName
        )}
      >
        {words[index]}
      </motion.span>
    </motion.span>
  );
}
