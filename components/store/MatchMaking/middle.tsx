"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MarriageForm from "./MarriageForm";
import Preference from "./preference";

/* ---------------- FLOATING PETALS CONFIG ---------------- */

const PETALS = [
  "/matchmaking/1.webp",
  "/matchmaking/2.webp",
  "/matchmaking/3.webp",
  "/matchmaking/4.webp",
  "/matchmaking/5.webp",
  "/matchmaking/6.webp",
];

const PETAL_COUNT = 26;

type Petal = {
  id: number;
  src: string;
  size: number; // px
  left: number; // %
  delay: number; // s
  duration: number; // s
  rotate: number; // deg
  sway: number; // px
};

export default function Middle() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: PETAL_COUNT }).map((_, i) => ({
      id: i,
      src: PETALS[i % PETALS.length],
      size: Math.round(100 + Math.random() * 80), // BIG petals
      left: Math.min(
        96,
        Math.max(4, Math.random() * 100 + (Math.random() - 0.5) * 8)
      ),
      delay: Math.random() * 6,
      duration: 18 + Math.random() * 20,
      rotate: Math.round(Math.random() * 360),
      sway: 12 + Math.random() * 60,
    }));
  
    setPetals(generated);
  }, []);
  

  return (
    <section className="relative overflow-hidden">
      {/* TOP IMAGE (static) */}
      <div className="relative z-10 w-full">
        <Image
          src="/matchmaking/hand_writing.webp"
          alt="Hand image"
          width={1500}
          height={500}
          priority
          className="w-full h-auto object-contain"
        />
      </div>



        {/* MAIN VISIBLE CONTENT (forms) */}
        <div className="relative z-20 bg-[#fff397]">

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-28 z-40"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,243,151,1) 0%, rgba(255,243,151,0.0) 60%)",
          }}
        />
        {/* bottom fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 z-40"
          style={{
            background:
              "linear-gradient(0deg, rgba(255,243,151,1) 0%, rgba(255,243,151,0.0) 60%)",
          }}
        />

                  {/* PETALS LAYER — absolute container to cover whole section */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
          style={{ contain: "layout paint" }}
        >
          {petals.map((p) => (
            <motion.div
              key={p.id}
              // user asked "position: relative only" for petals — keep wrapper relative,
              // but the container itself is absolute so they visually float over content.
              style={{
                position: "relative",
                top: "-18%", // start slightly above
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: 0.9, // fixed opacity
                willChange: "transform",
                pointerEvents: "none",
                transformOrigin: "center center",
              }}
              initial={{ y: "-18%" }}
              animate={{
                // GPU-only transforms: translateY/translateX/rotate
                y: ["-18%", "120%"],
                x: [0, p.sway, -p.sway, 0],
                rotate: [p.rotate - 30, p.rotate + 30, p.rotate],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              }}
            >
              {/* Use native img for animated decor (avoids Next/Image layout warnings).
                  width/height attributes keep aspect ratio and prevent layout shifts. */}
              <img
                src={p.src}
                alt=""
                width={p.size}
                height={p.size}
                draggable={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          ))}
        </div>
          <MarriageForm />
          <Preference />

      </div>
           {/* BOTTOM BORDER */}
           <div className="relative z-20 w-full">
          <Image
            src="/matchmaking/border.webp"
            alt="Decorative border"
            width={1920}
            height={275}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
    </section>
  );
}
