"use client";

import Image from "next/image";

export default function VastuHero() {
  return (
    <section className="relative w-full overflow-hidden pt-36 py-10 -mb-10">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* subtle vastu grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,82,45,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,82,45,0.06)_1px,transparent_1px)] bg-[size:6rem_4rem]" />

        {/* soft ambient glow */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-[radial-gradient(circle_at_top_right,rgba(160,120,80,0.25),transparent_70%)]" />

        {/* bottom fade */}
        <div
  className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
  style={{
    background:
      "linear-gradient(0deg, transparent 0%, rgba(0,0,0,0.04) 35%, transparent 100%)",
  }}
/>
</div>
      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
          Design That
          <span className="mx-2 font-serif font-bold text-[#8b5a2b]">
            Thinks
          </span>
          in Directions
        </h1>

        <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
          Vastu isn’t superstition — it’s spatial intelligence.
          <br />
          Our AI decodes ancient principles into clear, actionable insights
          for homes that feel balanced, calm, and aligned.
        </p>

        <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-500 max-w-2xl mx-auto">
          From energy flow and orientation to daily harmony,
          every recommendation respects tradition —
          optimized with modern intelligence for today’s lifestyle.
        </p>
      </div>

      {/* HERO IMAGE */}
      <div className="relative z-10 w-full">
        <Image
          src="/AI/Vastu/Home.webp"
          alt="AI Vastu – intelligent space alignment"
          width={1440}
          height={900}
          priority
          className="w-full h-auto object-cover object-center drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
        />
      </div>
    </section>
  );
}
