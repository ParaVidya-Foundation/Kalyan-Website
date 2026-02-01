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
    <section className="relative w-full flex justify-center py-24">
      {/* 🌤 Soft ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-amber-200/30 blur-[180px]" />
        <div className="absolute bottom-0 -right-40 h-[520px] w-[520px] rounded-full bg-yellow-100/40 blur-[200px]" />
      </div>

      {/* MAIN CONTAINER */}
      <div
        className="
          relative z-10
          w-[94%] mx-auto
          min-h-[72vh]
          rounded-[44px]
          bg-white
          border border-amber-100
          shadow-[0_40px_120px_rgba(120,80,20,0.18)]
          grid grid-cols-1 lg:grid-cols-2
          items-center
          overflow-hidden
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="px-10 lg:px-16 py-16 lg:py-20 space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              Astrology Certification
              <span className="block mt-2 font-serif font-bold text-amber-600">
                Designed for Real Careers
              </span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600 max-w-xl">
              A professionally structured certification pathway for learners who
              value depth, discipline, and long-term credibility in astrology —
              beyond casual courses or hobby learning.
            </p>
          </div>

          {/* FEATURE LIST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
            {FEATURES.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <item.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4 flex flex-wrap gap-4">
            <button
              className="
                rounded-full
                bg-amber-400
                px-8 py-3
                text-sm font-medium text-amber-950
                shadow-[0_12px_40px_rgba(251,191,36,0.35)]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-amber-300
              "
            >
              View Certification Programs
            </button>

            <button
              className="
                rounded-full
                border border-amber-300
                px-8 py-3
                text-sm font-medium text-amber-700
                transition-all duration-300
                hover:bg-amber-50
              "
            >
              View Curriculum
            </button>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative h-full w-full flex items-end justify-center lg:justify-end">
          <div className="relative w-[92%] lg:w-[110%] max-w-2xl -mb-10">
            <Image
              src="/Certification/study.webp"
              alt="Astrology certification illustration"
              width={900}
              height={900}
              priority
              className="
                w-full h-auto object-contain
                drop-shadow-[0_40px_120px_rgba(120,80,20,0.25)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
