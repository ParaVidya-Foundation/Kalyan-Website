"use client";
import React, { useEffect, useMemo, useRef, useState,JSX } from "react";
import Image from "next/image";
import MandalaCompassTab from "./tab/MandalaCompassTab";
import FloorPlanGeneratorTab from "./tab/FloorPlanGeneratorTab";
import FloorPlanOptimizerTab from "./tab/FloorPlanOptimizerTab";

const LEFT_IMAGES = [
  "/AI/Vastu/scan.webp",
  "/AI/Vastu/scan.webp",
  "/AI/Vastu/scan.webp",
];

export default function VastuTools(): JSX.Element {
  const tabs = useMemo(
    () => [
      { id: "mandala", label: "Vastu Purusha Mandala Compass" },
      { id: "generator", label: "AI Vastu Floor Plan Generator" },
      { id: "optimizer", label: "AI Vastu Floor Plan Optimizer" },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const navRef = useRef<HTMLDivElement | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [contentHeight, setContentHeight] = useState(0);

  /* -------- indicator measurement -------- */
  useEffect(() => {
    const measureIndicator = () => {
      const btn = btnRefs.current[active];
      const nav = navRef.current;
      if (!btn || !nav) return;
      const navRect = nav.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setIndicator({
        left: btnRect.left - navRect.left,
        width: btnRect.width,
      });
    };

    measureIndicator();
    window.addEventListener("resize", measureIndicator);
    return () => window.removeEventListener("resize", measureIndicator);
  }, [active]);

  /* -------- content height sync (ResizeObserver) -------- */
  useEffect(() => {
    const el = contentRefs.current[active];
    if (!el) {
      setContentHeight(0);
      return;
    }

    // initial set
    setContentHeight(el.scrollHeight);

    // observe for dynamic changes (images, fonts, etc.)
    const ro = new (window as any).ResizeObserver((entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.target === el) {
          // use scrollHeight to ensure full content height
          setContentHeight((entry.target as HTMLElement).scrollHeight);
        }
      }
    });

    ro.observe(el);

    // also watch window resize to recompute left image sizing
    const onWin = () => setContentHeight(el.scrollHeight);
    window.addEventListener("resize", onWin);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onWin);
    };
  }, [active]);

  // derive left image clamp based on content height
  // ensures left visual is large but never forces component taller than right content.
  const leftClamp = Math.min(Math.max(contentHeight - 24, 240), 520); // px

  return (
    <section className="mx-auto max-w-7xl px-6 py-6">
      <div className="overflow-hidden rounded-2xl border border-amber-100 bg-[#f5f2ed]">
        {/* Tabs */}
        <div className="px-6 pt-3">
          <div ref={navRef} className="relative flex gap-1">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                ref={(el) => { btnRefs.current[i] = el; }}
                onClick={() => setActive(i)}
                className={`relative px-4 py-2 text-sm font-medium rounded-t-lg transition ${
                  active === i
                    ? "bg-white text-slate-900 z-10"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <div
              aria-hidden
              className="absolute bottom-0 h-full bg-white rounded-t-lg transition-all duration-300"
              style={{
                left: indicator.left,
                width: indicator.width,
              }}
            />
          </div>
        </div>

        {/* Body */}
        <div className="md:flex bg-amber-50 h-[135vh]">
          {/* LEFT IMAGE — centered, height clamped to right content */}
          <div className="md:w-1/2 flex items-center justify-center px-6 py-4">
            <div
              className="w-full rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                // keep width fluid but cap height so it doesn't push layout
                maxWidth: 520,
                minWidth: 240,
              }}
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{
                  width: "100%",
                  // clamp height to content-driven value
                  maxHeight: `${leftClamp}px`,
                  height: `${leftClamp}px`,
                  display: "block",
                  borderRadius: 18,
                  background: "linear-gradient(180deg,#6d4622,#8b5a2b)",
                }}
              >
                {/* image stack (crossfade) */}
                <div className="relative w-full h-full">
                  {LEFT_IMAGES.map((src, i) => (
                    <CrossfadeImage key={src + i} src={src} active={active === i} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT — height authority */}
          <div className="md:w-1/2 px-6 py-4">
            <div
              className="relative transition-[height] duration-300 ease-[cubic-bezier(.2,.9,.2,1)] overflow-hidden"
              style={{ height: contentHeight }}
            >
              <ContentSlot ref={(el) => { contentRefs.current[0] = el; }} active={active} index={0}>
                <MandalaCompassTab />
              </ContentSlot>

              <ContentSlot ref={(el) => { contentRefs.current[1] = el; }} active={active} index={1}>
                <FloorPlanGeneratorTab />
              </ContentSlot>

              <ContentSlot ref={(el) => { contentRefs.current[2] = el; }} active={active} index={2}>
                <FloorPlanOptimizerTab />
              </ContentSlot>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CrossfadeImage (same visual behavior, smooth) ---------- */
function CrossfadeImage({ src, active }: { src: string; active: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(800px) rotateX(${-y * 3}deg) rotateY(${x * 5}deg) scale(${active ? 1.02 : 1})`;
    };

    const onLeave = () => {
      el.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [active]);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 transition-all duration-600 ${active ? "opacity-100 z-10" : "opacity-0 pointer-events-none"}`}
      style={{ willChange: "opacity, transform" }}
    >
      <Image src={src} alt="" fill className="object-cover" priority={active} />
    </div>
  );
}

/* ---------- Content Slot ---------- */
const ContentSlot = React.forwardRef<
  HTMLDivElement,
  { active: number; index: number; children: React.ReactNode }
>(({ active, index, children }, ref) => (
  <div
    ref={ref}
    className={`absolute inset-0 transition-all duration-250 ${
      active === index ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
    }`}
  >
    {children}
  </div>
));
ContentSlot.displayName = "ContentSlot";
