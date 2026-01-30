"use client";

import React, { useEffect, useMemo, useRef, useState, JSX } from "react";
import Image from "next/image";

const SAMPLE_NAME = "Soham";
const SAMPLE_DOB = "08/06/2004"; // dd/mm/yyyy - change format if needed

/* ---------------- utilities: numerology calculations ---------------- */
function toDigits(n: number): number[] {
  return String(n)
    .split("")
    .filter(Boolean)
    .map((c) => parseInt(c, 10));
}
function reduceKeepMasters(n: number): number {
  // keep 11,22,33 as master numbers
  while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
    n = toDigits(n).reduce((a, b) => a + b, 0);
  }
  return n;
}
const pyMapping: Record<string, number> = (() => {
  // Pythagorean mapping A=1..I=9, J=1..R=9, S=1..Z=8
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const map: Record<string, number> = {};
  const nums = [1,2,3,4,5,6,7,8,9];
  for (let i = 0; i < letters.length; i++) {
    map[letters[i]] = nums[i % nums.length] as number;
  }
  return map;
})();

function nameNumber(name: string): number {
  const letters = name.toUpperCase().replace(/[^A-Z]/g, "");
  let total = 0;
  for (const ch of letters) total += pyMapping[ch] || 0;
  return reduceKeepMasters(total);
}
function soulNumber(name: string): number {
  const vowels = name.toUpperCase().replace(/[^A-Z]/g, "").split("").filter((c) => "AEIOU".includes(c));
  const total = vowels.reduce((s, c) => s + (pyMapping[c] || 0), 0);
  return reduceKeepMasters(total || 0);
}
function personalityNumber(name: string): number {
  const consonants = name.toUpperCase().replace(/[^A-Z]/g, "").split("").filter((c) => !"AEIOU".includes(c));
  const total = consonants.reduce((s, c) => s + (pyMapping[c] || 0), 0);
  return reduceKeepMasters(total || 0);
}
function lifePathFromDob(dob: string): number {
  // accept dd/mm/yyyy or yyyy-mm-dd
  let parts: number[] = [];
  if (dob.includes("/")) {
    const [d, m, y] = dob.split("/");
    parts = [...toDigits(Number(d)), ...toDigits(Number(m)), ...toDigits(Number(y))];
  } else if (dob.includes("-")) {
    const [y, m, d] = dob.split("-");
    parts = [...toDigits(Number(d)), ...toDigits(Number(m)), ...toDigits(Number(y))];
  } else {
    // fallback: sum all digits
    parts = dob.split("").filter(Boolean).map((c) => parseInt(c, 10)).filter(Number.isFinite);
  }
  const total = parts.reduce((a, b) => a + b, 0);
  return reduceKeepMasters(total);
}
function hasKarmicDebt(n: number): number | null {
  // typical karmic debt numbers in numerology: 13, 14, 16, 19
  const kd = [13, 14, 16, 19];
  return kd.includes(n) ? n : null;
}

/* ---------- deterministic percent mappers (produce UI-friendly % from numerology values) ---------- */
function mapNumberToPercent(n: number): number {
  // map 1..9 and masters 11/22/33 -> 10..100 scale
  if (n === 11) return 88;
  if (n === 22) return 95;
  if (n === 33) return 99;
  // 1..9 map to 30..95 roughly
  const base = Math.max(1, Math.min(9, n));
  return Math.round(((base - 1) / 8) * (95 - 30) + 30);
}
function clamp(v: number, a=0, b=100) { return Math.max(a, Math.min(b, v)); }

/* ---------------- component ---------------- */
export default function NumUI(): JSX.Element {
  const [animate, setAnimate] = useState(false);
  const [hoverStat, setHoverStat] = useState<string | null>(null);
  const [openDetail, setOpenDetail] = useState<string | null>(null);

  // compute numbers once
  const numerology = useMemo(() => {
    const lifePath = lifePathFromDob(SAMPLE_DOB);
    const expression = nameNumber(SAMPLE_NAME);
    const soul = soulNumber(SAMPLE_NAME);
    const personality = personalityNumber(SAMPLE_NAME);
    const karmic = hasKarmicDebt(lifePath) || hasKarmicDebt(expression) || null;

    // percentages
    const lifeEnergy = mapNumberToPercent(lifePath);
    const mentalPower = mapNumberToPercent(expression);
    const destinyFlow = mapNumberToPercent(personality);
    const soulUrge = mapNumberToPercent(soul);

    // Health stat: deterministic function of lifePath + month/day balance (works as proxy)
    const [dd, mm] = SAMPLE_DOB.includes("/") ? SAMPLE_DOB.split("/").map((s)=>Number(s)) : [1,1];
    const healthDerived = Math.round(clamp((lifeEnergy * 0.55) + (soulUrge * 0.2) + ((mm/12)*20), 12, 98));

    const karmicDebt = karmic;

    return {
      raw: { lifePath, expression, soul, personality, karmicDebt },
      pct: { lifeEnergy, mentalPower, destinyFlow, soulUrge, health: healthDerived },
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 220);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { id: "life", label: "Life Energy", pct: numerology.pct.lifeEnergy, from:"#7c3aed", to:"#00f0ff" },
    { id: "mental", label: "Mental Power", pct: numerology.pct.mentalPower, from:"#00f0ff", to:"#0066ff" },
    { id: "destiny", label: "Destiny Flow", pct: numerology.pct.destinyFlow, from:"#7effa6", to:"#00b37e" },
    { id: "soul", label: "Soul Urge", pct: numerology.pct.soulUrge, from:"#ffd36b", to:"#ff7b00" },
    { id: "health", label: "Vitality (Health)", pct: numerology.pct.health, from:"#f87171", to:"#ef4444" },
  ];

  return (
    <section
      className="w-full py-12 px-6 rounded-t-[48px]"
      style={{
       
        fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
      }}
    >
         <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-cyan-400/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl overflow-hidden border border-[#0e2330] shadow-[0_40px_140px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 lg:p-8 items-start">
            {/* LEFT: identity + quick read (landscape-first) */}
            <div className="col-span-2 space-y-6">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">Numerology Profile</h2>
                  <p className="mt-1 text-sm text-slate-300 max-w-xl">
                    Real-time AI-styled numerology derived from your name & date of birth — presented as clear, deterministic stats and actionable micro-insights.
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="text-xs text-slate-300/80 bg-white/2 px-3 py-1 rounded-full" style={{backdropFilter:"blur(6px)"}}>
                    Driver <strong className="ml-1">08</strong>
                  </div>
                  <div className="text-xs text-slate-300/70 bg-white/2 px-3 py-1 rounded-full" style={{backdropFilter:"blur(6px)"}}>
                    Conductor <strong className="ml-1">02</strong>
                  </div>
                </div>
              </div>

              {/* small stat / identity cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <StatCard title="Name" value={SAMPLE_NAME} />
                <StatCard title="DOB" value={SAMPLE_DOB} />
                <StatCard title="Life Path" value={String(numerology.raw.lifePath)} hint="Core path" />
                <StatCard title="Expression" value={String(numerology.raw.expression)} hint="How you appear" />
              </div>

              {/* animated stat bars */}
              <div className="mt-3 space-y-4">
                {stats.map((s) => (
                  <div
                    key={s.id}
                    onMouseEnter={() => setHoverStat(s.id)}
                    onMouseLeave={() => setHoverStat(null)}
                    onClick={() => setOpenDetail(s.id === openDetail ? null : s.id)}
                    className="rounded-xl p-3 cursor-pointer transition-shadow duration-220 hover:shadow-[0_10px_30px_rgba(124,58,237,0.12)]"
                    style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005))", border: "1px solid rgba(255,255,255,0.03)" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ background: `linear-gradient(90deg, ${s.from}, ${s.to})`, boxShadow: `0 6px 22px ${s.to}30` }}
                        />
                        <div className="text-sm text-slate-200">{s.label}</div>
                      </div>
                      <div className="text-sm font-medium text-white">{s.pct}%</div>
                    </div>

                    <div className="mt-2 h-3 w-full rounded-full bg-white/5 overflow-hidden" title={`${s.label} — ${s.pct}%`}>
                      <div
                        className="h-full rounded-full transition-all duration-900 ease-[cubic-bezier(.2,.9,.2,1)]"
                        style={{
                          width: animate ? `${s.pct}%` : "0%",
                          background: `linear-gradient(90deg, ${s.from}, ${s.to})`,
                          boxShadow: `0 10px 40px ${s.to}22, inset 0 -6px 12px ${s.from}33`
                        }}
                      />
                    </div>

                    {/* "tooltip" hint when hovered */}
                    {hoverStat === s.id && (
                      <div className="mt-2 text-xs text-slate-300/80">
                        {getQuickHint(s.id, numerology)}
                      </div>
                    )}

                    {/* detailed expanded panel */}
                    {openDetail === s.id && (
                      <div className="mt-3 text-sm text-slate-200 bg-white/3 rounded-md p-3 border border-white/4">
                        {getDetailText(s.id, numerology)}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* predictions box */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <MiniCard label="Life Path Read" value={readLifePath(numerology.raw.lifePath)} />
                <MiniCard label="Soul / Inner Urge" value={readSoul(numerology.raw.soul)} />
                <MiniCard label="Personality" value={readPersonality(numerology.raw.personality)} />
                <MiniCard label="Karmic Debt" value={numerology.raw.karmicDebt ? `Yes — ${numerology.raw.karmicDebt}` : "None detected"} />
              </div>
            </div>

            {/* RIGHT: character + hud — landscape friendly */}
            <div className="flex justify-center items-center">
              <div
                className="relative w-[340px] h-[420px] rounded-2xl p-4"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.03)",
                  boxShadow: "0 40px 120px rgba(2,6,20,0.7)"
                }}
              >
                {/* vertical glow */}
                <div style={{
                  position: "absolute", left: -10, top: 20, bottom: 20, width: 6, borderRadius: 999,
                  background: "linear-gradient(180deg, rgba(124,58,237,0.95), rgba(0,240,255,0.6))", filter: "blur(8px)", opacity: 0.8
                }} />

                {/* character */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <Image src="/AI/Numerology/character.png" alt="Character" width={700} height={700} priority className="select-none" />
                </div>

               

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- small presentational helpers ---------------- */

function StatCard({ title, value, hint }: { title: string; value: string; hint?: string }) {
  return (
    <div className="rounded-lg p-3 border border-white/4 bg-white/2">
      <div className="text-xs text-slate-300">{title}</div>
      <div className="text-white font-medium">{value}</div>
      {hint && <div className="text-xs text-slate-400 mt-1">{hint}</div>}
    </div>
  );
}

function MiniCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl p-4 border border-white/4" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.015), rgba(255,255,255,0.006))" }}>
      <div className="text-xs text-slate-300">{label}</div>
      <div className="text-sm text-white font-medium mt-1">{value}</div>
    </div>
  );
}


/* ---------------- logic text helpers (explanatory) ---------------- */
function getQuickHint(statId: string, numerology: any): string {
  switch (statId) {
    case "life": return `Core path (${numerology.raw.lifePath}) — shows core direction & stamina.`;
    case "mental": return `Expression (${numerology.raw.expression}) — thinking style & problem solving.`;
    case "destiny": return `Personality (${numerology.raw.personality}) — how others perceive you.`;
    case "soul": return `Soul urge (${numerology.raw.soul}) — inner motivations & values.`;
    case "health": return `Vitality derived from Life Path & month balance — read as general stamina signal.`;
    default: return "";
  }
}

function getDetailText(statId: string, numerology: any): string {
  switch (statId) {
    case "life":
      return `Life Path ${numerology.raw.lifePath}: the primary life theme. Higher values imply greater public leadership & visible results.`;
    case "mental":
      return `Expression ${numerology.raw.expression}: how you present skills to the world. Strong number indicates clarity, quick learning and influence.`;
    case "destiny":
      return `Personality ${numerology.raw.personality}: outward personality & social approach. Use this to align career & social choices.`;
    case "soul":
      return `Soul Urge ${numerology.raw.soul}: what you truly desire—inner spiritual / value drivers.`;
    case "health":
      return `Vitality: a proxy combining life path & inner balance — not medical advice. Keep sleep, hydration and routine aligned with your energy curve.`;
    default:
      return "";
  }
}

/* ---------------- readable micro-reads ---------------- */
function readLifePath(n:number) {
  const map: Record<number,string> = {
    1: "Independence, leadership, pioneer energy",
    2: "Cooperation, diplomacy, partnership",
    3: "Creativity, expression, communication",
    4: "Practicality, discipline, building",
    5: "Freedom, change, adventurous spirit",
    6: "Service, family, responsibility",
    7: "Introspection, learning, spiritual seeker",
    8: "Material success, power, leadership",
    9: "Global, humanitarian, visionary",
    11: "Spiritual messenger — intuition & influence",
    22: "Master builder — large-scale achievement",
    33: "Master teacher — compassion & service",
  };
  return map[n] ?? "Unique path — layered potential";
}
function readSoul(n:number){
  const map:Record<number,string> = {
    1:"Inner drive to create & lead",
    2:"Need for connection & harmony",
    3:"Desire to speak, create, inspire",
    4:"Yearning for stability & mastery",
    5:"Craves freedom & new experiences",
    6:"Deeply caring & protective",
    7:"Seeker — reflection & wisdom",
    8:"Ambition tied to material legacy",
    9:"Compassionate, service-oriented",
    11:"Intuitive visionary",
    22:"Builds legacies for many",
    33:"Heals through teaching",
  };
  return map[n] ?? "Layered inner life";
}
function readPersonality(n:number){
  const map:Record<number,string> = {
    1:"Direct, assertive, stands out",
    2:"Gentle, diplomatic, supportive",
    3:"Warm, talkative, expressive",
    4:"Reliable, methodical, practical",
    5:"Energetic, adaptable, restless",
    6:"Nurturing, consistent, loyal",
    7:"Reserved, analytical, subtle",
    8:"Commanding, strategic, decisive",
    9:"Generous, charismatic, big-picture",
    11:"Impressive presence with subtle intuition",
    22:"Authoritative presence with practical force",
    33:"Calming presence, naturally mentoring",
  };
  return map[n] ?? "Multi-faceted personality";
}
