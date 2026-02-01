"use client";

import React, { useEffect, useMemo, useState,JSX } from "react";
import Image from "next/image";

/* ---------- Input (change if you want to re-run locally) ---------- */
const NAME = "Soham";
const DOB = "08/06/2004"; // dd/mm/yyyy
const TIME = "05:45"; // HH:MM
const PLACE = "Narnaul, India";
const GENDER = "Male";

/* ---------- Zodiac & helpers (lightweight, deterministic UX helpers) ---------- */
const ZODIAC = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

function sunSignFromDob(dob: string) {
  const [ddRaw, mmRaw] = dob.split("/").map((s) => Number(s));
  const d = ddRaw;
  const m = mmRaw;
  const boundaries = [
    { sign: "Capricorn", end: { m: 1, d: 19 } },
    { sign: "Aquarius", end: { m: 2, d: 18 } },
    { sign: "Pisces", end: { m: 3, d: 20 } },
    { sign: "Aries", end: { m: 4, d: 19 } },
    { sign: "Taurus", end: { m: 5, d: 20 } },
    { sign: "Gemini", end: { m: 6, d: 20 } },
    { sign: "Cancer", end: { m: 7, d: 22 } },
    { sign: "Leo", end: { m: 8, d: 22 } },
    { sign: "Virgo", end: { m: 9, d: 22 } },
    { sign: "Libra", end: { m: 10, d: 22 } },
    { sign: "Scorpio", end: { m: 11, d: 21 } },
    { sign: "Sagittarius", end: { m: 12, d: 21 } },
  ];
  for (let i = 0; i < boundaries.length; i++) {
    const b = boundaries[i];
    if (m === b.end.m && d <= b.end.d) return b.sign;
    if (m < b.end.m) return b.sign;
  }
  return "Capricorn";
}

function ascendantEstimateFromTime(time: string) {
  // UX-friendly estimate only — splits 24h into 12 zones (2h each)
  const [hRaw, minRaw] = time.split(":").map((s) => Number(s));
  const hours = (hRaw + (minRaw || 0) / 60) % 24;
  const index = Math.floor((hours / 24) * 12) % 12;
  return ZODIAC[index];
}

function elementOfSign(sign: string) {
  const map: Record<string, string> = {
    Aries: "Fire",
    Leo: "Fire",
    Sagittarius: "Fire",
    Taurus: "Earth",
    Virgo: "Earth",
    Capricorn: "Earth",
    Gemini: "Air",
    Libra: "Air",
    Aquarius: "Air",
    Cancer: "Water",
    Scorpio: "Water",
    Pisces: "Water",
  };
  return map[sign] ?? "Neutral";
}

function clamp(n: number, a = 0, b = 100) {
  return Math.max(a, Math.min(b, n));
}

const SIGN_TRAITS: Record<string, string[]> = {
  Aries: ["courageous", "direct", "fast-paced"],
  Taurus: ["grounded", "patient", "practical"],
  Gemini: ["curious", "adaptable", "communicative"],
  Cancer: ["nurturing", "sensitive", "protective"],
  Leo: ["confident", "warm-hearted", "expressive"],
  Virgo: ["precise", "service-minded", "analytical"],
  Libra: ["gracious", "fair-minded", "diplomatic"],
  Scorpio: ["intense", "private", "transformative"],
  Sagittarius: ["optimistic", "philosophical", "adventurous"],
  Capricorn: ["disciplined", "responsible", "steady"],
  Aquarius: ["innovative", "detached", "humanitarian"],
  Pisces: ["compassionate", "imaginative", "receptive"],
};

function microReading(sun: string, asc: string) {
  const sunTr = SIGN_TRAITS[sun] || [];
  const ascTr = SIGN_TRAITS[asc] || [];
  return {
    headline: `${sun} sun · ${asc} ascendant`,
    lines: [
      `Sun (core): ${sunTr.slice(0, 3).join(", ")}.`,
      `Ascendant (outer): ${ascTr.slice(0, 3).join(", ")}.`,
      `Element balance: ${elementOfSign(sun)} (sun) + ${elementOfSign(asc)} (asc).`,
    ],
  };
}

function computeScores(sun: string, asc: string) {
  const signIdx = ZODIAC.indexOf(sun);
  const ascIdx = ZODIAC.indexOf(asc);
  const base = ((signIdx + 1) * 7 + (ascIdx + 1) * 5) % 100;

  const vitality = clamp(Math.round(50 + (base % 30) + (ascIdx % 6)));
  const emotional = clamp(Math.round(50 + ((signIdx * 3) % 28) - (ascIdx % 4)));
  const social = clamp(Math.round(45 + ((ascIdx * 4) % 40)));
  const intuition = clamp(Math.round(40 + ((signIdx + ascIdx) % 50)));
  const focus = clamp(Math.round(35 + ((base + signIdx) % 55)));

  return { vitality, emotional, social, intuition, focus };
}

/* ---------- Physical Tendencies (carefully worded, not deterministic) ---------- */
function physicalTendencies(sun: string, asc: string) {
  // Gentle mappings to provide "physical" info that aligns with classical descriptions
  const desc: string[] = [];
  // stature
  if (["Taurus", "Capricorn", "Virgo"].includes(sun)) desc.push("tendency toward a sturdy or well-built frame");
  if (["Aries", "Sagittarius", "Leo"].includes(sun)) desc.push("athletic or upright posture");
  if (["Gemini", "Libra", "Aquarius"].includes(sun)) desc.push("slender, agile build");
  if (["Cancer", "Pisces", "Scorpio"].includes(sun)) desc.push("soft or rounded features");

  // complexion & voice (ascendant colors outward)
  if (["Leo", "Aries"].includes(asc)) desc.push("warm complexion and resonant voice");
  if (["Taurus", "Cancer"].includes(asc)) desc.push("calm voice and earthy skin tone");
  if (["Gemini", "Libra"].includes(asc)) desc.push("clear speech and expressive face");
  if (["Scorpio", "Pisces"].includes(asc)) desc.push("intense gaze and quieter tone");

  return desc;
}

/* ---------------- Component ---------------- */
export default function PersonalGame(): JSX.Element {
  const sun = useMemo(() => sunSignFromDob(DOB), []);
  const asc = useMemo(() => ascendantEstimateFromTime(TIME), []);
  const readings = useMemo(() => microReading(sun, asc), [sun, asc]);
  const scores = useMemo(() => computeScores(sun, asc), [sun, asc]);
  const physical = useMemo(() => physicalTendencies(sun, asc), [sun, asc]);

  const [animate, setAnimate] = useState(false);
  const [openTrait, setOpenTrait] = useState<string | null>(null);

  useEffect(() => {
    // single-trigger animation (no loops)
    const t = setTimeout(() => setAnimate(true), 260);
    return () => clearTimeout(t);
  }, []);

  const traits = useMemo(() => {
    const sunTraits = SIGN_TRAITS[sun] || [];
    const ascTraits = SIGN_TRAITS[asc] || [];
    return Array.from(new Set([...sunTraits, ...ascTraits]));
  }, [sun, asc]);

  return (
    <section className="w-full bg-white/98 text-slate-900 py-10 px-6">
      {/* Wider container for a calm, premium feel */}
      <div className="mx-auto max-w-6xl">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-amber-50/80 p-2 border border-amber-100 shadow-sm">
              <Image
                src="/AI/Numerology/character.png"
                alt="Aura character"
                width={120}
                height={120}
                className="rounded-lg object-cover"
                priority
              />
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">AuraCheck — Personal Profile</h1>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                A Vedic-style profile (sun + ascendant estimate) tailored for practical use — personality, physical tendencies,
                and concise guidance for everyday decisions.
              </p>
            </div>
          </div>

          <div className="ml-auto hidden lg:flex flex-col gap-1 items-end text-sm text-slate-600">
            <div><strong className="text-slate-800">{NAME}</strong></div>
            <div>DOB: {DOB} · TOB: {TIME}</div>
            <div>Place: {PLACE}</div>
            <div>Gender: {GENDER}</div>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Trait picker and readings (spacious, calm) */}
          <div className="col-span-2 rounded-2xl border p-6 bg-white shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">Personality & Practical Notes</h3>
                <p className="mt-1 text-sm text-slate-600 max-w-prose">
                  Traits are synthesized from classical sun and ascendant descriptions — presented as short, actionable insights.
                </p>
              </div>

              <div className="hidden md:block text-right text-sm text-slate-500">
                <div className="text-xs text-slate-400">Sun</div>
                <div className="font-semibold">{sun} · {elementOfSign(sun)}</div>
                <div className="mt-2 text-xs text-slate-400">Ascendant (est.)</div>
                <div className="font-semibold">{asc}</div>
              </div>
            </div>

            {/* Trait chips */}
            <div className="mt-5 flex flex-wrap gap-3">
              {traits.map((t) => (
                <button
                  key={t}
                  onClick={() => setOpenTrait(openTrait === t ? null : t)}
                  className="px-3 py-1 rounded-full bg-slate-50 border text-sm text-slate-800 hover:scale-105 transform transition"
                  aria-pressed={openTrait === t}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Readings panel */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg p-4 bg-slate-50 border">
                <div className="text-xs text-slate-500">Essence</div>
                <div className="mt-2 text-sm text-slate-800">{readings.headline}</div>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 space-y-1">
                  {readings.lines.map((L, i) => (
                    <li key={i}>{L}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg p-4 bg-slate-50 border">
                <div className="text-xs text-slate-500">Practical guidance</div>
                <div className="mt-2 text-sm text-slate-700 space-y-2">
                  <div><strong>Career</strong>: Lean into roles that match your social tempo and natural focus — short sprints with clear milestones.</div>
                  <div><strong>Relationships</strong>: Use your warmth and steadiness to create trust; practice deliberate listening.</div>
                  <div><strong>Daily health</strong>: Keep sleep and routine consistent — small habits compound into reliable stamina.</div>
                </div>
              </div>
            </div>

            {/* Trait detail if selected */}
            {openTrait && (
              <div className="mt-6 rounded-md p-4 bg-amber-50/40 border">
                <div className="text-sm font-semibold">About “{openTrait}”</div>
                <div className="mt-2 text-sm text-slate-700">
                  {`"${openTrait}" appears strongly in this profile. Treat it as an asset: design small tasks and environments that let this tendency operate with minimal friction.`}
                </div>
              </div>
            )}

            {/* Physical tendencies */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-800">Physical tendencies (Vedic-informed)</h4>
              <p className="mt-2 text-sm text-slate-600 max-w-prose">
                These are soft tendencies — not deterministic facts. Common signals from your chart:
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 space-y-1">
                {physical.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          </div>

          {/* Right: personal stats (compact, animated bars) */}
          <aside className="rounded-2xl border p-5 bg-white shadow-sm flex flex-col gap-4">
            <div>
              <h4 className="text-md font-semibold">Personal stats</h4>
              <p className="text-xs text-slate-500 mt-1">Tendencies (0–100). Use as orientation, not diagnosis.</p>
            </div>

            {[
              { id: "vitality", label: "Vitality", value: scores.vitality, color: "#F87171" },
              { id: "emotional", label: "Emotional Balance", value: scores.emotional, color: "#60A5FA" },
              { id: "social", label: "Social Ease", value: scores.social, color: "#34D399" },
              { id: "intuition", label: "Intuition", value: scores.intuition, color: "#FBBF24" },
              { id: "focus", label: "Focus", value: scores.focus, color: "#A78BFA" },
            ].map((s) => (
              <div key={s.id} className="group">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-700">{s.label}</div>
                  <div className="text-sm font-medium text-slate-800">{s.value}%</div>
                </div>

                <div className="mt-2 h-3 bg-slate-100 rounded-full overflow-hidden" aria-hidden>
                  <div
                    className="h-full rounded-full transition-all duration-800 ease-[cubic-bezier(.2,.9,.2,1)]"
                    style={{
                      width: animate ? `${s.value}%` : "0%",
                      background: `linear-gradient(90deg, ${s.color}, ${s.color}88)`,
                      boxShadow: `0 8px 24px ${s.color}33, inset 0 -6px 12px ${s.color}22`,
                    }}
                  />
                </div>

                <div className="mt-2 text-xs text-slate-500 group-hover:text-slate-700">
                  {getBarHint(s.id)}
                </div>
              </div>
            ))}

            <div className="mt-4 text-xs text-slate-500">
              <em>Note:</em> This overview is interpretive. It is designed for clarity and practical orientation, not medical or legal use.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- small helpers ---------- */
function getBarHint(id: string) {
  switch (id) {
    case "vitality":
      return "Public presence, daily stamina. Keep consistent routines.";
    case "emotional":
      return "Emotional steadiness; practice small regulation habits.";
    case "social":
      return "Ease with groups and networking; leverage for collaboration.";
    case "intuition":
      return "Pattern-sensing and inner guidance; cultivate quiet time.";
    case "focus":
      return "Task persistence; use focused sprints with breaks.";
    default:
      return "";
  }
}
