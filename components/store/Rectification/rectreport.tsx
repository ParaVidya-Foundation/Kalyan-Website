"use client";

import {
  Clock,
  Star,
  Users,
  ShieldCheck,
} from "lucide-react";

const FEATURES = [
  {
    icon: Clock,
    title: "Precision Birth Time Analysis",
    description:
      "We determine your most accurate time of birth using structured rectification techniques. Even minor discrepancies of minutes are addressed to ensure reliability across the Lagna and all divisional charts.",
  },
  {
    icon: Star,
    title: "Astrologically Verified Outcomes",
    description:
      "Life events, planetary periods, and transits are methodically cross-verified. The final rectified time aligns consistently with career milestones, relationships, health phases, and key turning points.",
  },
  {
    icon: Users,
    title: "Expert-Led Rectification Process",
    description:
      "Your report is prepared by trained astrologers applying classical systems such as Parashara principles, Nadi-based evaluation, and event correlation—ensuring academic depth, not guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Timely Delivery",
    description:
      "Each Birth Time Rectification report is carefully reviewed and delivered within a committed timeframe. The process prioritizes accuracy, clarity, and long-term usability for future consultations.",
  },
];

export default function RectReport() {
  return (
    <section className="relative w-full py-24">
      {/* 🌤️ Ambient pastel glow (felt, not seen) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-amber-300/20 blur-[180px]" />
        <div className="absolute bottom-0 -right-40 h-[520px] w-[520px] rounded-full bg-rose-300/20 blur-[200px]" />
        <div className="absolute top-1/3 left-1/3 h-[420px] w-[420px] rounded-full bg-indigo-300/15 blur-[220px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            What We Provide in{" "}
            <span className="font-serif font-bold text-slate-800">
              Birth Time Rectification
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            A disciplined, exam-grade astrological process designed to establish
            your correct birth time—forming the foundation for accurate charts,
            dependable predictions, and responsible guidance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="
                group
                relative
                rounded-3xl
                bg-white/80
                backdrop-blur-xl
                border border-slate-200/60
                p-8
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                transition-transform duration-500 ease-out
                hover:-translate-y-[3px]
                hover:shadow-[0_30px_90px_rgba(15,23,42,0.12)]
              "
            >
              {/* Icon */}
              <div
                className="
                  flex h-14 w-14 items-center justify-center
                  rounded-full
                  bg-slate-900
                  text-white
                  shadow-[0_12px_30px_rgba(15,23,42,0.25)]
                "
              >
                <item.icon className="h-6 w-6" />
              </div>

              {/* Text */}
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div className="mt-20 text-center">
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Birth Time Rectification is not a shortcut—it is a methodical,
            evidence-based astrological discipline. Our approach is designed for
            individuals who value precision, accountability, and long-term
            astrological integrity.
          </p>
        </div>
      </div>
    </section>
  );
}
