"use client";

import {
  Stars,
  Compass,
  Hash,
  Home,
  BookOpen,
} from "lucide-react";

const SUBJECTS = [
  {
    title: "Vedic Astrology",
    subtitle: "Jyotish Shastra",
    desc: "Planetary systems, natal charts, dashas, yogas, and predictive frameworks grounded in classical Vedic texts.",
    icon: Stars,
    accent: "from-indigo-400/30 to-purple-400/20",
  },{
  title: "Lal Kitab",
  subtitle: "Professional Track",
  desc: "Practical remedies and house-based solutions from Lal Kitab's unique system.",
  icon: BookOpen,
  accent: "from-slate-300/30 to-red-600/20",
},
{
    title: "Palmistry",
    subtitle: "Samudrik Shastra",
    desc: "Hand structure, line interpretation, mounts, and timing indicators aligned with classical palmistry principles.",
    icon: Compass,
    accent: "from-rose-300/30 to-fuchsia-300/20",
  },
  {
    title: "Numerology",
    subtitle: "Number Science",
    desc: "Life path analysis, destiny cycles, name vibrations, and practical numerological forecasting methods.",
    icon: Hash,
    accent: "from-amber-300/30 to-rose-300/20",
  },
  {
    title: "Vastu Shastra",
    subtitle: "Spatial Intelligence",
    desc: "Directional energies, layout diagnostics, remedial planning, and applied vastu analysis for real environments.",
    icon: Home,
    accent: "from-emerald-300/30 to-cyan-300/20",
  },

  {
    title: "Astrology Foundations",
    subtitle: "Academic Core",
    desc: "Astronomy basics, ephemeris usage, chart mathematics, and ethical practice standards for practitioners.",
    icon: BookOpen,
    accent: "from-slate-300/30 to-indigo-300/20",
  },
  
];

export default function CertificationSubjects() {
  return (
    <section className="relative w-full overflow-hidden py-28">
      {/* 🌫 Ambient Apple-style gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full bg-indigo-200/25 blur-[200px]" />
        <div className="absolute top-1/3 -right-48 h-[600px] w-[600px] rounded-full bg-amber-200/30 blur-[220px]" />
        <div className="absolute bottom-0 left-1/3 h-[600px] w-[600px] rounded-full bg-rose-200/25 blur-[240px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Disciplines You Can
            <span className="relative inline-block mx-2 font-serif font-bold">
              Specialize In
              <span className="absolute left-0 -bottom-2 h-2 w-full rounded-full bg-amber-300/60 blur-[2px] -z-10" />
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-slate-700">
            Each subject is structured as a formal certification track — built
            for depth, credibility, and long-term professional relevance.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {SUBJECTS.map((item) => (
            <div
              key={item.title}
              className="
                group relative
                rounded-3xl
                bg-white/70
                backdrop-blur-xl
                border border-slate-200/70
                p-8
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_32px_90px_rgba(0,0,0,0.12)]
              "
            >
              {/* Accent glow */}
              <div
                className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <item.icon className="h-6 w-6" />
              </div>

              {/* Text */}
              <div className="relative z-10 mt-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <div className="mt-1 text-sm font-serif text-slate-500">
                  {item.subtitle}
                </div>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>

              {/* CTA */}
              <div className="relative z-10 mt-6">
                <button className="text-sm font-medium text-slate-900 underline-offset-4 hover:underline">
                  View curriculum →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
