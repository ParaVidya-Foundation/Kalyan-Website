"use client";

import Image from "next/image";
import TrueFocus from "@/components/UIComponents/TrueFocus";
import Link from "next/link";

export default function FaceScan() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fbf7f3]">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="mb-6 text-sm font-semibold tracking-wide text-[#8b5a2b]">
              ANCIENT WISDOM, MODERN TECH
            </div>

            {/* Title */}
            <div className="mb-5">
              <TrueFocus
                sentence="Elevate Your Face Wellness"
                manualMode={false}
                blurAmount={3}
                borderColor="#8b5a2b"
                animationDuration={0.6}
                pauseBetweenAnimations={1}
              />
            </div>

            {/* Subtitle */}
            <h2 className="text-3xl md:text-4xl font-semibold text-[#8b5a2b] leading-tight">
              Unlock Harmony, Prosperity & Peace for your Face
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-[#5f4633]">
              Get instant Face analysis for your property in minutes.
              Transform your space with personalized remedies backed by
              <span className="font-medium text-[#4a3526]">
                {" "}5,000+ years of ancient proven principles.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/login">
                <button className="group inline-flex items-center gap-2 rounded-full bg-[#8b5a2b] px-8 py-3 text-white text-base font-semibold shadow-[0_20px_40px_rgba(139,90,43,0.35)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_30px_60px_rgba(139,90,43,0.45)]">
                  ✨ Generate Your Report
                </button>
              </Link>

              <Link href="/login">
                <button className="inline-flex items-center justify-center rounded-full border-2 border-[#8b5a2b] px-8 py-3 text-[#8b5a2b] text-base font-semibold transition-all duration-300 hover:bg-[#8b5a2b]/10 hover:scale-[1.03]">
                  View Sample Report
                </button>
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-[#6b4e3a]">
              <div className="flex items-center gap-2">
                ✓ No expertise required
              </div>
              <div className="flex items-center gap-2">
                ✓ AI-powered analysis
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-[320px] h-[320px] md:w-[440px] md:h-[440px] overflow-hidden rounded-3xl animate-[float_6s_ease-in-out_infinite]">
              <Image
                src="/AI/Face/hero.webp"
                alt="Face Scan Floor Plan"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* subtle bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#fbf7f3] to-transparent" />

      {/* custom animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
