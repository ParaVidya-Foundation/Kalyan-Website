"use client";

import React, { useEffect, useMemo, useRef, useState,JSX } from "react";


const BROWN = "#8b5a2b";
const BROWN_SOFT = "rgba(139,90,43,0.08)";
const FONT_FAMILY = "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial";

/* ------------------ small UI bits ------------------ */
function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 13l4 4L19 7" stroke={BROWN} strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-lg border border-slate-100 bg-white/60 p-4 text-center shadow-sm" style={{ backdropFilter: "blur(4px)" }}>
      <div className="text-2xl font-semibold" style={{ color: BROWN, fontFamily: FONT_FAMILY }}>
        {number}
      </div>
      <div className="text-xs text-slate-500 mt-1" style={{ fontFamily: FONT_FAMILY }}>
        {label}
      </div>
    </div>
  );
}

/* ------------------ huge zone list ------------------ */
/* grouped for readability and search */
const ZONE_GROUPS = [
  {
    group: "Primary Directions",
    items: ["North", "North-East", "East", "South-East", "South", "South-West", "West", "North-West", "Center (Brahma)"],
  },
  {
    group: "Indoor Rooms",
    items: [
      "Living Room",
      "Family Room",
      "Drawing Room",
      "Dining Room",
      "Kitchen",
      "Master Bedroom",
      "Children's Bedroom",
      "Guest Bedroom",
      "Study / Home Office",
      "Puja / Prayer Room",
      "Bathroom",
      "Toilet",
      "Powder Room",
      "Laundry",
      "Pantry",
      "Storage / Store Room",
      "Walk-in Closet",
      "Corridor / Passage",
      "Staircase (internal)",
      "Basement",
      "Attic",
      "Home Gym",
      "Playroom",
      "Media / TV Room",
    ],
  },
  {
    group: "Entry & Transition",
    items: ["Main Entrance / Front Door", "Service Entrance", "Porch", "Foyer", "Verandah", "Lobby"],
  },
  {
    group: "Outdoor & External",
    items: [
      "Balcony",
      "Terrace",
      "Roof",
      "Garden / Yard",
      "Front Yard",
      "Backyard",
      "Driveway",
      "Garage",
      "Patio",
      "Swimming Pool",
      "Temple / Shrine (outdoor)",
    ],
  },
  {
    group: "Functional Spots & Fixtures",
    items: [
      "Kitchen Stove / Hob",
      "Kitchen Sink",
      "Refrigerator",
      "Dining Table",
      "Bed (sleeping position)",
      "Study Table / Desk",
      "Sofa / Seating Area",
      "TV / Entertainment Unit",
      "Altar / Puja Setup",
      "Water Tank / Overhead Tank",
      "Window (specific window)",
      "Door (specific internal door)",
      "Toilet / Shower Stall (specific)",
      "Fireplace",
      "Gas Cylinder / Gas Connection",
      "Heater / AC Placement",
    ],
  },
  {
    group: "Commercial / Everyday Places",
    items: [
      "Office Desk (employee)",
      "Reception",
      "Conference Room",
      "Shopfront",
      "Warehouse Zone",
      "Clinic / Treatment Room",
      "Classroom / Study Area",
    ],
  },
];

/* flatten for search convenience */
const ALL_ZONES = ZONE_GROUPS.flatMap((g) => g.items);

/* ------------------ Custom Large Dropdown ------------------ */
function LargeZoneSelect({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (v: string | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ZONE_GROUPS;
    // filter items inside groups
    return ZONE_GROUPS.map((g) => ({
      group: g.group,
      items: g.items.filter((i) => i.toLowerCase().includes(q)),
    })).filter((g) => g.items.length > 0);
  }, [query]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  // keyboard handling: open/close and navigate simple
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function handleSelect(item: string) {
    onChange(item);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="w-full" style={{ fontFamily: FONT_FAMILY }}>
      <label className="block text-sm font-medium mb-2" style={{ color: "#5b3f2b" }}>
        Select what you want to check:
      </label>

      <div className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => {
            setOpen((s) => !s);
            setTimeout(() => inputRef.current?.focus(), 50);
          }}
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-left flex items-center justify-between gap-3 shadow-sm hover:shadow-md transition"
          style={{ color: "#4a3526" }}
        >
          <span className="truncate">{value ?? "-- Select Zone --"}</span>
          <svg className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 9l6 6 6-6" stroke="#9aa7a3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* dropdown panel */}
        <div
          className={`absolute z-50 mt-2 w-full rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 transition-transform duration-200 origin-top ${
            open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
          }`}
          style={{ maxHeight: "420px", overflow: "hidden" }}
        >
          <div className="p-3 border-b border-slate-100">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search zones, rooms, fixtures — e.g. 'kitchen', 'north', 'bed'"
              className="w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#b88b6a]/40"
              style={{ fontFamily: FONT_FAMILY }}
              aria-label="Search zones"
            />
          </div>

          <div className="p-3" style={{ maxHeight: "330px", overflowY: "auto" }}>
            {filtered.length === 0 && <div className="text-sm text-slate-500">No matches</div>}

            {filtered.map((g) => (
              <div key={g.group} className="mb-4 last:mb-0">
                <div className="text-xs font-semibold mb-2" style={{ color: "#6b4e3a" }}>
                  {g.group}
                </div>

                <ul role="listbox" className="grid grid-cols-1 gap-1">
                  {g.items.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        role="option"
                        onClick={() => handleSelect(item)}
                        className={`w-full text-left rounded-md px-3 py-2 hover:bg-[#fbf3ea] transition flex items-center justify-between`}
                        style={{ color: "#3f2b22" }}
                      >
                        <span>{item}</span>
                        {value === item && (
                          <svg className="h-4 w-4 text-[#8b5a2b]" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M5 13l4 4L19 7" stroke="#8b5a2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------ MAIN: MandalaCompassTab ------------------ */
export default function MandalaCompassTab(): JSX.Element {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  return (
    <div className="space-y-6" style={{ fontFamily: FONT_FAMILY }}>
      <div className="text-sm tracking-wider" style={{ color: BROWN }}>
        FREE TOOL
      </div>

      <h3 className="text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: BROWN }}>
        Try Our Free Vastu Mandala Chakra
      </h3>

      <p className="text-slate-700 max-w-xl">
        Check if your space is aligned with positive energy directions using our interactive compass.
        Discover which directions bring harmony to your home, office, or sacred space. Our compass highlights
        favorable directions in green, making it simple to verify your property's alignment. Start with a quick check,
        then unlock a comprehensive Vastu report.
      </p>

      <div className="grid grid-cols-3 gap-4 md:max-w-xl">
        <StatBox number="16" label="ZONES" />
        <StatBox number="32" label="PADAS" />
        <StatBox number="45" label="DEITIES" />
      </div>

      <div className="space-y-3 max-w-xl">
        <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-white/60 p-4">
          <div className="mt-1">
            <CheckIcon />
          </div>
          <div>
            <div className="text-sm font-medium" style={{ color: "#4a3526" }}>
              Green highlights for positive directions
            </div>
            <div className="text-sm text-slate-500">See at a glance which directions support well-being</div>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-white/60 p-4">
          <div className="mt-1">
            <CheckIcon />
          </div>
          <div>
            <div className="text-sm font-medium" style={{ color: "#4a3526" }}>
              Easy direction check for any space
            </div>
            <div className="text-sm text-slate-500">Works for homes, offices, temples, and more</div>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-white/60 p-4">
          <div className="mt-1">
            <CheckIcon />
          </div>
          <div>
            <div className="text-sm font-medium" style={{ color: "#4a3526" }}>
              Create full report later
            </div>
            <div className="text-sm text-slate-500">Get detailed insights and remedies</div>
          </div>
        </div>
      </div>

      {/* Large Select */}
      <div className="max-w-xl">
        <LargeZoneSelect value={selectedZone} onChange={setSelectedZone} />
      </div>

      <div className="pt-4">
        <button
          onClick={() => alert(`Checking zone: ${selectedZone ?? "none selected"}`)}
          className="inline-flex items-center gap-3 rounded-full bg-[#8b5a2b] px-6 py-3 text-white shadow-lg transition transform hover:-translate-y-0.5"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Try Vastu Mandala Compass
        </button>
      </div>

      {/* subtle css for nice reveal */}
      <style jsx>{`
        .animate-fadeIn { animation: fadeIn .45s ease both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px);} to { opacity: 1; transform: translateY(0);} }
      `}</style>
    </div>
  );
}
