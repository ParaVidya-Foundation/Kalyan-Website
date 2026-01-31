"use client";

import dynamic from "next/dynamic";

// Browser-only components
const NumHero = dynamic(
  () => import("@/components/aifeatures/Numerology/NumHero"),
  { ssr: false }
);

const NumUI = dynamic(
  () => import("@/components/aifeatures/Numerology/NumUI"),
  { ssr: false }
);

const NumChatBot = dynamic(
  () => import("@/components/aifeatures/Numerology/NumChatBot"),
  { ssr: false }
);

const NumApplication = dynamic(
  () => import("@/components/aifeatures/Numerology/NumApplication"),
  { ssr: false }
);

const NumTrust = dynamic(
  () => import("@/components/aifeatures/Numerology/NumTrust"),
  { ssr: false }
);

export default function NumerologyPage() {
  return (
    <div className="relative">
      <NumHero />

      {/* DARK NUMEROLOGY SECTION */}
      <section
        className="relative w-full py-16 px-6 rounded-[48px] overflow-hidden"
        style={{
          background: "linear-gradient(180deg,#020617,#04182b 40%)",
        }}
      >
        {/* Ambient background (z-0) */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-cyan-400/10 blur-[180px]" />
        </div>

        {/* CONTENT (z-10) */}
        <div className="relative z-10 space-y-20">
        <NumChatBot />
          <NumUI />
        </div>
      </section>

      <NumApplication />
      <NumTrust />
    </div>
  );
}