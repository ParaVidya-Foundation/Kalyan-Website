"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const reports = [
  {
    src: "/Service/Reports/Wealth.webp",
    hover: "/Service/Reports/Wealth1.webp",
    title: "Artha — The Path of Wealth",
    subtitle:
      "A refined understanding of prosperity, income, and material balance.",
  },
  {
    src: "/Service/Reports/Health.webp",
    hover: "/Service/Reports/Health1.webp",
    title: "Sharira — The Science of Health",
    subtitle:
      "Insights into vitality, longevity, and physical harmony.",
  },
  {
    src: "/Service/Reports/Education.webp",
    hover: "/Service/Reports/Education1.webp",
    title: "Vidya — Education & Intellect",
    subtitle:
      "Learning patterns, intelligence, and academic direction.",
  },
  {
    src: "/Service/Reports/Marriage.webp",
    hover: "/Service/Reports/Marriage1.webp",
    title: "Vivaha — Sacred Union",
    subtitle:
      "Compatibility, partnership rhythm, and marital alignment.",
  },
  {
    src: "/Service/Reports/Life.webp",
    hover: "/Service/Reports/Life1.webp",
    title: "Jeevan — The Larger Journey",
    subtitle:
      "Purpose, karmic flow, and life direction revealed.",
  },
  {
    src: "/Service/Reports/General.webp",
    hover: "/Service/Reports/General1.webp",
    title: "Samagra — Complete Life Report",
    subtitle:
      "A holistic view combining all dimensions of destiny.",
  },
];

/* ---------------- VARIANTS ---------------- */

const imageWrapper = {
  initial: {},
  hover: {},
};

const baseImage = {
  initial: { opacity: 1, y: 0, scale: 1 },
  hover: { opacity: 0, y: -16, scale: 0.97 },
};

const hoverImage = {
  initial: { opacity: 0, y: 18, scale: 0.97 },
  hover: { opacity: 1, y: 0, scale: 1 },
};

export default function ReportGallery() {
  return (
    <section className="w-full py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center text-center"
              variants={imageWrapper}
              initial="initial"
              whileHover="hover"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 9 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* IMAGE STACK */}
              <div className="relative mb-10 h-[380px] w-[260px] overflow-hidden">
                {/* BASE IMAGE */}
                <motion.div
                  className="absolute inset-0"
                  variants={baseImage}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <Image
                    src={report.src}
                    alt={report.title}
                    fill
                    priority={index < 2}
                    draggable={false}
                    className="object-contain select-none drop-shadow-xl"
                  />
                </motion.div>

                {/* HOVER IMAGE */}
                <motion.div
                  className="absolute inset-0"
                  variants={hoverImage}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={report.hover}
                    alt=""
                    fill
                    draggable={false}
                    className="object-contain select-none"
                  />
                </motion.div>
              </div>

              {/* TITLE */}
              <h3
                className="text-2xl md:text-3xl text-[#1c1c1c]"
                style={{
                  fontFamily:
                    '"Playfair Display", "Libre Baskerville", serif',
                }}
              >
                {report.title}
              </h3>

              {/* SUBTITLE */}
              <p
                className="mt-4 max-w-sm text-base text-[#555]"
                style={{
                  fontFamily:
                    '"Libre Baskerville", "Times New Roman", serif',
                }}
              >
                {report.subtitle}
              </p>

              {/* LINK */}
              <Link href="/login">
                <span
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    tracking-wide
                    text-[#b08a2e]
                    transition-colors
                    duration-300
                    group-hover:text-[#8d6a1f]
                  "
                  style={{
                    fontFamily:
                      '"JetBrains Mono", "SF Mono", monospace',
                  }}
                >
                  More information →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
