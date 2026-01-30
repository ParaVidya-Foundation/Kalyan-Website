"use client";

import Image from "next/image";
import Question from "@/components/store/Rectification/Question";
import RectReport from "@/components/store/Rectification/rectreport";

export default function RectificationPage() {
  return (
    <div>
      <Image
          src="/Service/Rectification/Confusion.png"
          alt="AI Vastu – intelligent space alignment"
          width={1920}
          height={900}
          priority
          className="w-full h-auto object-cover object-center drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
        />

<div className="relative w-[95%] mx-auto">
  {/* 🌅 Sunset ambient glow — simple, visible, premium */}
  <div className="pointer-events-none absolute inset-0 z-10">
    {/* warm sunset left */}
    <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-amber-400/25 blur-[180px]" />
    {/* rose sunset right */}
    <div className="absolute bottom-0 -right-32 h-[520px] w-[520px] rounded-full bg-rose-400/25 blur-[200px]" />
    {/* subtle violet balance */}
    <div className="absolute top-1/3 left-1/3 h-[420px] w-[420px] rounded-full bg-violet-400/20 blur-[220px]" />
  </div>

  {/* 🌤️ Content container */}
  <div
    className="
      relative z-20
      rounded-4xl
      bg-white/20
      backdrop-blur-xl
      border border-slate-200/60
      shadow-[0_30px_90px_rgba(15,23,42,0.12)]
      transition-transform duration-500 ease-out
      hover:-translate-y-[2px]
    "
  >
    <Question />
  </div>
</div>

<RectReport />


    </div>
  );
}