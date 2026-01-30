"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

// Client-only, hydration-safe
const DecryptedText = dynamic(
  () => import("@/components/UIComponents/DecryptedText"),
  { ssr: false }
);

/* Floating numerology assets */
const FLOATING_IMAGES = [
  { src: "/AI/Numerology/1.webp", top: "22%", left: "6%", size: 72, delay: "0s" },
  { src: "/AI/Numerology/7.webp", top: "18%", right: "6%", size: 84, delay: "1.2s" },
  { src: "/AI/Numerology/2.webp", bottom: "18%", left: "8%", size: 78, delay: "2.4s" },
  { src: "/AI/Numerology/3.webp", bottom: "14%", right: "10%", size: 68, delay: "3.6s" },
  { src: "/AI/Numerology/4.webp", bottom: "40%", left: "8%", size: 78, delay: "2.4s" },
  { src: "/AI/Numerology/6.webp", bottom: "44%", right: "10%", size: 68, delay: "3.6s" },
];

export default function NumHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* 🌈 AMBIENT PASTEL GRADIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-pink-300/30 blur-[160px]" />
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-orange-300/30 blur-[180px]" />
        <div className="absolute bottom-0 left-1/4 h-[520px] w-[520px] rounded-full bg-amber-200/40 blur-[200px]" />
      </div>

      {/* FLOATING NUMEROLOGY IMAGES */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {FLOATING_IMAGES.map((item, i) => (
          <div
            key={i}
            className="absolute animate-floatSoft will-change-transform"
            style={{
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              right: item.right,
              animationDelay: item.delay,
            }}
          >
            <Image
              src={item.src}
              alt="Numerology symbol"
              width={item.size * 0.6}
              height={item.size * 0.6}
              className="select-none opacity-90"
              priority={i < 2}
            />
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-40 pb-28 text-center">
        {/* Heading */}
        <div className="mb-6 min-h-[72px]">
          {mounted ? (
            <DecryptedText
              text="AI-Powered Numerology"
              speed={60}
              maxIterations={10}
              characters="123456789"
              animateOn="view"
              sequential
              className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900"
              encryptedClassName="text-slate-400/60"
              parentClassName="inline-block"
            />
          ) : (
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              AI-Powered Numerology
            </h1>
          )}
        </div>

        <p className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-slate-700">
          Discover your life path, destiny patterns, and personal timing
          through ancient numerology — refined with modern artificial intelligence.
        </p>

        <p className="mt-4 mx-auto max-w-2xl text-base text-slate-600">
          Trusted insights. Private analysis. Designed for clarity, balance,
          and long-term guidance.
        </p>

        {/* CTA */}
        <div className="mt-12 flex justify-center gap-4">
          <button
            className="
              rounded-full bg-slate-900 px-8 py-4
              text-base font-medium text-white
              shadow-[0_16px_40px_rgba(0,0,0,0.18)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_22px_60px_rgba(0,0,0,0.22)]
            "
          >
            Start Your Reading
          </button>

          <button
            className="
              rounded-full border border-slate-300 px-8 py-4
              text-base font-medium text-slate-800
              transition-colors duration-300
              hover:bg-white/60 backdrop-blur
            "
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}
