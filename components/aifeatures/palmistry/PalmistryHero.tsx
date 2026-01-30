"use client";

import Image from "next/image";

export default function PalmistryHero() {
  return (
    <section className="relative w-full overflow-hidden pt-36">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
          Hands That
          <span className="mx-2 font-serif font-bold text-[#8b5a2b]">
            Tell Your Story
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
          Palmistry is not guesswork — it’s observation refined over centuries.
          <br />
          Your palm carries patterns of personality, potential, and life direction.
          Our AI reads them with clarity and precision.
        </p>

        <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-500 max-w-2xl mx-auto">
          From life lines and mounts to elemental balance and timing,
          each insight blends classical palm science with modern intelligence —
          offering guidance that feels grounded, personal, and meaningful.
        </p>
      </div>

      {/* HERO IMAGE */}
      <div className="relative z-10 w-full">
        <Image
          src="/AI/Palmistry/palmhero.webp"
          alt="AI Palmistry – intelligent hand analysis"
          width={1440}
          height={900}
          priority
          className="w-full h-auto object-cover object-center drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
        />
      </div>
    </section>
  );
}
