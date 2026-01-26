"use client";
import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
type Feature = {
  id: string;
  title: string;
  tag?: string;
  description: string;
  meta?: string;
  accent?: string;
  image?: string;
};
const FEATURES: Feature[] = [
  {
    id: "score",
    image: "/AI/Vastu/score.webp",
    title: "Comprehensive Vastu Score",
    tag: "Instant Analysis",
    description:
      "Get an instant 0–100 Vastu score for your home with clear ratings and recommendations. See strengths, weaknesses, and what needs attention.",
    meta: "Room-level & whole-home scoring",
  
  },
  {
    id: "roomwise",
    image: "/AI/Vastu/roomwise.webp",
    title: "Room-Wise Deep Dive",
    tag: "Room Insights",
    description:
      "Every room analyzed individually — living room, bedroom, kitchen, puja, study — with specific fixes, suggestions and priority actions.",
    meta: "Per-room recommendations",
  
  },
  {
    id: "visuals",
    image: "/AI/Vastu/visuals.webp",
    title: "AI-Powered Visualizations",
    tag: "Premium Visuals",
    description:
      "See stunning photo-realistic before/after renders of your space with suggested changes and color/arrangement previews.",
    meta: "Visual transformation previews",
  },
  {
    id: "elements",
    image: "/AI/Vastu/elements.webp",
    title: "Five Elements Balance",
    tag: "Elemental Check",
    description:
      "Detailed analysis of Vastu’s five elements — Fire, Earth, Water, Air & Space — and how to restore balanced energies for harmony.",
    meta: "Pancha-tatva balance",
  },
  {
    id: "pada",
    image: "/AI/Vastu/pada.webp",
    title: "32 Pada Direction Analysis",
    tag: "Advanced Analysis",
    description:
      "Advanced entrance & direction analysis using the 32 pada system to understand the subtle spatial influences on each room and entrance.",
    meta: "Precision directional mapping",
 
  },
  {
    id: "color",
    image: "/AI/Vastu/color.webp",
    title: "Color Therapy",
    tag: "Color Strategy",
    description:
      "Smart color recommendations tailored to room function and elemental balance to uplift moods and optimize energy flow.",
    meta: "Color recommendations",
  },
  {
    id: "entrance",
    image: "/AI/Vastu/entrance.webp",
    title: "Entrance Door Suggestions",
    tag: "Entrance Guide",
    description:
      "Actionable suggestions for main door placement, orientation and design to strengthen positive entry energy and security.",
    meta: "Entrance-focused remedies",
  
  },
  {
    id: "plant",
    image: "/AI/Vastu/plant.webp",
    title: "Vastu-Specific Plant Guide",
    tag: "Plant Remedies",
    description:
      "Plant recommendations and placement tips to enhance specific zones — low maintenance options with clear purpose.",
    meta: "Plants for each direction",
  
  },
  {
    id: "expert",
    image: "/AI/Vastu/expert.webp",
    title: "Expert On Call",
    tag: "Human Support",
    description:
      "Need a human review? Upgrade any report for a 1:1 consult with an experienced Vastu expert to clarify changes and plans.",
    meta: "Book expert consultation",
  
  },
  {
    id: "crystal",
    image: "/AI/Vastu/crystal.webp",
    title: "Crystal & Pyramid Guide",
    tag: "Crystals",
    description:
      "Guidance on crystals and pyramids — which ones to use, where to place them, and how they support energetic corrections.",
    meta: "Crystal placement & use",
  
  },
  {
    id: "furniture",
    image: "/AI/Vastu/furniture.webp",
    title: "Furniture Placement Maps",
    tag: "Placement Maps",
    description:
      "Practical furniture positioning diagrams to optimize energy flow, traffic, and functionality for each room type.",
    meta: "Room layout diagrams",
  
  },
  {
    id: "chatbot",
    image: "/AI/Vastu/chatbot.webp",
    title: "24/7 Vastu AI Chatbot",
    tag: "Always On",
    description:
      "Instant answers and quick clarifications from our AI assistant — ask about placements, remedies, or report details anytime.",
    meta: "Instant AI help",
  
  },
];
function InteractiveCard({ feature }: { feature: Feature }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [styleTransform, setStyleTransform] = useState<string>("perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)");
  const [elevated, setElevated] = useState(false);
  const onMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateY = (px - 0.5) * 10; // degrees
    const rotateX = (0.5 - py) * 8; // degrees
    const scale = 1.02;
    // throttle via rAF for smoothness
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setStyleTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`);
    });
  }, []);
  const onLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    // gentle reset
    setStyleTransform("perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)");
    setElevated(false);
  }, []);
  const onEnter = useCallback(() => {
    setElevated(true);
  }, []);
  return (
    <article
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
      onFocus={onEnter}
      onBlur={onLeave}
      tabIndex={0}
      role="region"
      aria-labelledby={`feature-${feature.id}-title`}
      className="relative flex flex-col rounded-3xl border border-slate-200/50 bg-white p-8 shadow-md transition-shadow duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8b5a2b]/20"
      style={{
        transform: styleTransform,
        transition: "transform 180ms cubic-bezier(.2,.9,.2,1)",
      }}
    >
      <div className={`absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-400 ${elevated ? "opacity-100" : "opacity-0"}`} style={{ boxShadow: "inset 0 0 80px rgba(0,0,0,0.03)" }} />
      {/* Image area on top */}
      <div className="relative mb-6 overflow-hidden rounded-2xl">
        <Image src={feature.image || ""} alt={feature.title} width={400} height={400} className="w-full aspect-square object-contain rounded-2xl shadow-md" />
      </div>
      {/* Pill */}
      {feature.tag && (
        <span className="self-start rounded-full bg-[#8b5a2b]/10 px-4 py-1.5 text-xs font-medium text-[#8b5a2b] tracking-wide">
          {feature.tag}
        </span>
      )}
      {/* Title */}
      <h3 id={`feature-${feature.id}-title`} className="mt-4 text-xl font-bold text-[#8b5a2b] tracking-tight">
        {feature.title}
      </h3>
      {/* Description */}
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        {feature.description}
      </p>
      {/* Meta */}
      {feature.meta && <div className="mt-3 text-xs text-gray-500">{feature.meta}</div>}
      {/* Actions */}
      <div className="mt-auto pt-6">
        <button
          type="button"
          className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-[#8b5a2b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#7a4f25] hover:-translate-y-0.5 hover:shadow-md active:scale-95"
          onClick={() => {
            // placeholder demo action
            window.alert(`${feature.title} — demo`);
          }}
        >
          Get Started
        </button>
      </div>
    </article>
  );
}
/* ---------------- VastuFeatures (main export) ---------------- */
export default function VastuFeatures(): React.ReactElement {
  return (
    <section className="">
      {/* Features grid */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Everything You Need for Perfect Vastu Harmony</h2>
          <p className="mt-3 text-base text-slate-500">The most comprehensive Vastu analysis platform powered by AI</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {FEATURES.map((f) => (
            <InteractiveCard key={f.id} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}