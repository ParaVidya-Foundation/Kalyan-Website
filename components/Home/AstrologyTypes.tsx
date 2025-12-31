"use client";

import React, { useState, useMemo } from "react";

type VideoMap = Record<string, string>;

const ASTROLOGY_TYPES = [
  "Lal Kitab",
  "K.P Astro",
  "Nadi Astro",
  "Vastu",
  "Palmistry",
  "Numerology",
];

const LANGUAGES = [
  "Hindi",
  "Urdu",
  "English",
  "Japanese",
  "Russian",
  "ANY...",
];

const VIDEO_MAP: VideoMap = {
  "Lal Kitab": "/videos/lal-kitabh.mp4",
  "K.P Astro": "/videos/kp.mp4",
  "Nadi Astro": "/videos/nadi.mp4",
  "Vastu": "/videos/vastu.mp4",
  "Palmistry": "/videos/palmistry.mp4",
  "Numerology": "/videos/numerology.mp4",
  Hindi: "/videos/hindi.mp4",
  Urdu: "/videos/urdu.mp4",
  English: "/videos/english.mp4",
  Japanese: "/videos/japanese.mp4",
  Russian: "/videos/russian.mp4",
  "ANY...": "/videos/default.mp4",
};

export default function AstrologyTypes() {
  const [activeKey, setActiveKey] = useState<string>("Lal Kitab");

  const activeVideo = useMemo(
    () => VIDEO_MAP[activeKey],
    [activeKey]
  );

  return (
    <section className="relative flex min-h-screen w-full items-center">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 items-center">
        
        {/* LEFT — CONTENT */}
        <div className="max-w-xl">
          <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-neutral-500">
            DISCOVER
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl leading-tight text-neutral-900">
            All types of astrology,
            <br />
            <span className="italic text-neutral-600">crafted for you</span>
          </h1>

          {/* Astrology Types */}
          <div className="mt-10">
            <SectionLabel label="Astrology Systems" />
            <div className="mt-4 flex flex-wrap gap-3">
              {ASTROLOGY_TYPES.map((item) => (
                <Pill
                  key={item}
                  label={item}
                  active={activeKey === item}
                  onClick={() => setActiveKey(item)}
                />
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mt-8">
            <SectionLabel label="Available In" />
            <div className="mt-4 flex flex-wrap gap-3">
              {LANGUAGES.map((lang) => (
                <Pill
                  key={lang}
                  label={lang}
                  active={activeKey === lang}
                  onClick={() => setActiveKey(lang)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — VIDEO PANEL */}
        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_40px_120px_rgba(0,0,0,0.12)]">
          <video
            key={activeVideo}
            src={activeVideo}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover animate-videoFade"
          />

          {/* Soft overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </div>

      {/* Local animations */}
      <style jsx>{`
        @keyframes videoFade {
          from {
            opacity: 0;
            transform: scale(0.985);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-videoFade {
          animation: videoFade 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </section>
  );
}

/* =========================
   UI PRIMITIVES
========================= */

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
      {label}
    </p>
  );
}

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full px-4 py-1.5 text-sm
        transition-all duration-200
        border
        ${
          active
            ? "bg-neutral-900 text-white border-neutral-900 shadow-sm scale-[1.05]"
            : "bg-neutral-50 text-neutral-700 border-neutral-300 hover:bg-neutral-100"
        }
      `}
    >
      {label}
    </button>
  );
}
