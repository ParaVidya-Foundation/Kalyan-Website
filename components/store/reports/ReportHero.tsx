"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reports = [
  { src: "/Service/Reports/Wealth.webp", top: "10%", left: "15%", r: -10, d: 8 },
  { src: "/Service/Reports/Health.webp", top: "15%", left: "75%", r: 12, d: 10 },
  { src: "/Service/Reports/Education.webp", top: "55%", left: "8%", r: 14, d: 9 },
  { src: "/Service/Reports/Marriage.webp", top: "58%", left: "82%", r: -8, d: 11 },
  { src: "/Service/Reports/Life.webp", top: "55%", left: "34%", r: 6, d: 12 },
  { src: "/Service/Reports/General.webp", top: "60%", left: "60%", r: -4, d: 13 },
];

export default function ReportHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,243,151,0.45) 0%, rgba(255,243,151,0.18) 45%, rgba(255,243,151,0) 80%)",
        }}
      />

      {/* Floating images (bounded to viewport) */}
      <div className="pointer-events-none absolute inset-0">
        {reports.map((img, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: img.top,
              left: img.left,
              rotate: `${img.r}deg`,
              willChange: "transform",
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: img.d,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={img.src}
              alt="Astrology Report"
              width={260}
              height={360}
              priority={i === 0}
              draggable={false}
              className="
                select-none
                drop-shadow-xl
                w-[160px]
                sm:w-[200px]
                md:w-[240px]
                h-auto
              "
            />
          </motion.div>
        ))}
      </div>

      {/* Center content */}
      <div className="relative z-10 -mt-10 h-full flex items-center justify-center">
        <div className="max-w-3xl px-6 text-center">
          <h1
            className="
              text-4xl md:text-5xl lg:text-6xl
              font-[500]
              tracking-tight
              text-[#2b1c10]
            "
            style={{
              fontFamily:
                '"Playfair Display", "Libre Baskerville", "Georgia", serif',
            }}
          >
            Your life,
            <br />
            written with clarity.
          </h1>

          <p
            className="mt-8 text-lg md:text-xl leading-relaxed text-[#4a3a2a]"
            style={{
              fontFamily:
                '"Libre Baskerville", "Times New Roman", serif',
            }}
          >
            A complete Vedic report that quietly reveals the rhythm of your
            wealth, health, relationships, education, and destiny — composed
            with precision, tradition, and respect.
          </p>
        </div>
      </div>
    </section>
  );
}
