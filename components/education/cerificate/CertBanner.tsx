"use client";

import Image from "next/image";
import { GraduationCap, ShieldCheck, FileCheck, Award } from "lucide-react";

const FEATURES = [
  {
    icon: GraduationCap,
    text: "Structured academic curriculum designed for serious astrology practitioners",
  },
  {
    icon: FileCheck,
    text: "Exam-based certification with conceptual and applied evaluation",
  },
  {
    icon: ShieldCheck,
    text: "Verifiable credentials suitable for professional and client-facing use",
  },
  {
    icon: Award,
    text: "Career-aligned recognition comparable to global learning platforms",
  },
];

export default function CertBanner() {
  return (
    <section className="relative w-full flex justify-center">
      {/* 🌫 Ambient gradients (subtle, Apple-style) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-indigo-200/20 blur-[160px]" />
        <div className="absolute bottom-0 -right-32 h-[420px] w-[420px] rounded-full bg-amber-200/25 blur-[180px]" />
      </div>

      {/* BANNER CONTAINER */}
      <div
        className="
          relative z-10
          w-[92%] mx-auto
          min-h-[70vh]
          rounded-[40px]
          bg-[#0f172a]
          overflow-hidden
          shadow-[0_40px_120px_rgba(2,6,23,0.45)]
          grid grid-cols-1 lg:grid-cols-2
          items-center
        "
      >
        {/* LEFT — CONTENT */}
        <div className="px-10 py-16 lg:py-20 space-y-8 text-white">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Astrology Certification
              <span className="block mt-2 font-serif text-indigo-300">
                Built for Real Careers
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-xl">
              A professionally structured certification program for learners
              who value depth, discipline, and long-term credibility in astrology.
            </p>
          </div>

          {/* FEATURE LIST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl">
            {FEATURES.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-indigo-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4 flex gap-4">
            <button
              className="
                rounded-full
                bg-white
                px-8 py-3
                text-sm font-medium text-slate-900
                shadow-[0_12px_40px_rgba(255,255,255,0.15)]
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              View Certification Programs
            </button>

            <button
              className="
                rounded-full
                border border-white/20
                px-8 py-3
                text-sm font-medium text-white
                transition-all duration-300
                hover:bg-white/10
              "
            >
              View Curriculum
            </button>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative h-full w-full flex items-center justify-center">
          <div className="relative w-[80%] max-w-md">
            <Image
              src="/Certification/certbg.png"
              alt="Astrology certification illustration"
              width={520}
              height={520}
              priority
              className="
                w-full h-auto object-contain
                drop-shadow-[0_30px_80px_rgba(0,0,0,0.35)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
