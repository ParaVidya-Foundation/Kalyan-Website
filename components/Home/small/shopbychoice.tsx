"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

type ChoiceItem = {
  label: string;
  subtitle: string;
  image: string;
};

const CHOICES: ChoiceItem[] = [
  {
    label: "Sun",
    subtitle: "Authority · Vitality · Recognition",
    image: "/zodiac/sun.png",
  },
  {
    label: "Moon",
    subtitle: "Mind · Emotions · Inner Peace",
    image: "/zodiac/moon.png",
  },
  {
    label: "Mars",
    subtitle: "Strength · Courage · Action",
    image: "/zodiac/mars.png",
  },
  {
    label: "Venus",
    subtitle: "Love · Beauty · Harmony",
    image: "/zodiac/venus.png",
  },
  {
    label: "Jupiter",
    subtitle: "Wisdom · Growth · Fortune",
    image: "/zodiac/jupiter.png",
  },
  {
    label: "Saturn",
    subtitle: "Discipline · Karma · Stability",
    image: "/zodiac/saturn.png",
  },
];

export function ShopByChoice() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const words = useMemo(() => CHOICES.map((c) => c.label), []);
  const activeItem = CHOICES[activeIndex];

  const handleImageError = (imagePath: string) => {
    setImageErrors((prev) => new Set(prev).add(imagePath));
  };

  return (
    <section className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center px-6">
      <div className="grid w-full grid-cols-1 items-center gap-16 md:grid-cols-2">

        {/* ================= LEFT : TEXT ================= */}
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 block text-xs tracking-[0.35em] text-neutral-500"
          >
            SHOP BY COSMIC INFLUENCE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={cn(
              "mb-6 max-w-xl leading-tight",
              "font-serif text-4xl font-medium tracking-tight text-neutral-800",
              "md:text-6xl"
            )}
          >
            Shop by your{" "}
            <span className="inline-block align-middle">
              <ContainerTextFlip
                words={words}
                interval={2600}
                animationDuration={650}
                onWordChange={setActiveIndex}
                className="ml-2"
                textClassName="font-serif tracking-tight"
              />
            </span>
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={activeItem.subtitle}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="max-w-md text-sm leading-relaxed text-neutral-600"
            >
              {activeItem.subtitle}. Carefully curated spiritual items aligned
              with this planetary energy to enhance balance, clarity, and life
              direction.
            </motion.p>
          </AnimatePresence>
        </div>

        {/* ================= RIGHT : IMAGE ================= */}
        <div className="relative flex items-center justify-center">
          <div className="relative h-[320px] w-[320px] md:h-[420px] md:w-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.image}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.06 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {!imageErrors.has(activeItem.image) ? (
                  <Image
                    src={activeItem.image}
                    alt={activeItem.label}
                    fill
                    priority={activeIndex === 0}
                    sizes="(max-width: 768px) 280px, 420px"
                    className="object-contain"
                    onError={(e) => {
                      handleImageError(activeItem.image);
                      // Suppress 404 error in console
                      e.stopPropagation();
                    }}
                    onLoad={(e) => {
                      const img = e.currentTarget;
                      if (img.naturalWidth === 0 || img.naturalHeight === 0) {
                        handleImageError(activeItem.image);
                      }
                    }}
                    unoptimized
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-neutral-400 text-sm font-medium">
                    {activeItem.label}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* subtle luxury glow */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(240,200,140,0.18),transparent_65%)]" />
          </div>
        </div>

      </div>
    </section>
  );
}
