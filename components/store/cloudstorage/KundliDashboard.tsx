// app/components/KundliDashboard.tsx
"use client";

import React, { useMemo, useState, useCallback,JSX } from "react";
import { motion } from "framer-motion";

export type AstroProfileProps = {
  id: string;
  name: string;
  dob: string;
  tob: string;
  place: string;
  gender: string;
  rashi: string;
  nakshatra: string;
  lagna: string;
  createdAt?: string;
  tags?: string[];
};

const initialData: AstroProfileProps[] = [
  { id: "k1", name: "John Doe", dob: "1990-01-01", tob: "12:00 PM", place: "New York, USA", gender: "Male", rashi: "Capricorn", nakshatra: "Ashwini", lagna: "Leo", createdAt: "2024-07-01T10:00:00Z", tags: ["client", "family"] },
  { id: "k2", name: "Priya Sharma", dob: "1996-05-18", tob: "06:45 AM", place: "Delhi, India", gender: "Female", rashi: "Taurus", nakshatra: "Rohini", lagna: "Virgo", createdAt: "2024-09-15T14:30:00Z", tags: ["vip"] },
  { id: "k3", name: "Arjun Patel", dob: "1988-11-09", tob: "02:20 AM", place: "Ahmedabad, India", gender: "Male", rashi: "Scorpio", nakshatra: "Anuradha", lagna: "Libra", createdAt: "2023-12-25T07:15:00Z", tags: ["research"] },
  { id: "k4", name: "Asha Nair", dob: "1985-08-03", tob: "10:30 AM", place: "Chennai, India", gender: "Female", rashi: "Leo", nakshatra: "Magha", lagna: "Cancer", createdAt: "2023-04-11T09:00:00Z", tags: ["client", "priority"] },
  { id: "k5", name: "Ravi Kumar", dob: "1979-02-14", tob: "03:05 PM", place: "Mumbai, India", gender: "Male", rashi: "Aquarius", nakshatra: "Dhanishta", lagna: "Aquarius", createdAt: "2022-11-01T12:00:00Z", tags: ["archive"] },
  { id: "k6", name: "Meera Joshi", dob: "2000-12-30", tob: "11:50 PM", place: "Pune, India", gender: "Female", rashi: "Sagittarius", nakshatra: "Mula", lagna: "Sagittarius", createdAt: "2024-01-22T16:00:00Z", tags: ["student"] },
];

export default function KundliDashboard(): JSX.Element {
  const [data] = useState<AstroProfileProps[]>(initialData); // immutable for best perf here
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"date" | "name" | "rashi">("date");

  const allTags = useMemo(() => {
    const set = new Set<string>();
    data.forEach((d) => (d.tags || []).forEach((t) => set.add(t)));
    return Array.from(set);
  }, [data]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = data.filter((d) => {
      const matchesQ = !q || d.name.toLowerCase().includes(q) || d.place.toLowerCase().includes(q) || d.rashi.toLowerCase().includes(q);
      const matchesTag = !selectedTag || (d.tags || []).includes(selectedTag);
      return matchesQ && matchesTag;
    });

    if (sortBy === "date") list.sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
    if (sortBy === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "rashi") list.sort((a, b) => a.rashi.localeCompare(b.rashi));
    return list;
  }, [data, query, selectedTag, sortBy]);

  const handleView = useCallback((id: string) => {
    // stubbed: replace with navigation/drawer for production
    window?.alert?.(`Open Kundli: ${id}`);
  }, []);

  return (
    <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-mono font-semibold text-gray-900">Kundli Cloud Storage</h1>
          <p className="text-sm text-gray-500 mt-1">All stored charts — search, sort and tag them.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, place, rashi..."
              className="w-full rounded-xl border border-yellow-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-200"
              aria-label="Search kundli"
            />
            <div className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <select
            title="Sort by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="rounded-xl border border-yellow-100 bg-white px-3 py-2 text-sm w-full sm:w-auto"
          >
            <option value="date">Sort: Newest</option>
            <option value="name">Sort: Name</option>
            <option value="rashi">Sort: Rashi</option>
          </select>

          <button
            onClick={() => { setSelectedTag(null); setQuery(""); }}
            className="rounded-xl border border-yellow-100 bg-white px-3 py-2 text-sm"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2 items-center">
        <span className="text-xs text-gray-500 uppercase tracking-wide w-full sm:w-auto">Folders</span>

        <button
          onClick={() => setSelectedTag(null)}
          className={`rounded-full px-3 py-1 text-sm ${!selectedTag ? "bg-yellow-100 text-yellow-900" : "bg-white border border-yellow-100 text-gray-700"}`}
        >
          All
        </button>

        {allTags.map((t) => (
          <button
            key={t}
            onClick={() => setSelectedTag(t)}
            className={`rounded-full px-3 py-1 text-sm ${selectedTag === t ? "bg-yellow-100 text-yellow-900" : "bg-white border border-yellow-100 text-gray-700"}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 && (
          <div className="col-span-full rounded-2xl border border-yellow-100 bg-white p-8 text-center">
            <p className="text-gray-600">No kundlis found. Try a different search or create a new kundli.</p>
          </div>
        )}

        {filtered.map((k) => (
          <ProfileCard key={k.id} profile={k} onView={handleView} />
        ))}
      </div>
    </div>
  );
}

/* ------------------ ProfileCard (memoized, lightweight) ------------------ */
const ProfileCard = React.memo(function ProfileCard({
  profile,
  onView,
}: {
  profile: AstroProfileProps;
  onView: (id: string) => void;
}) {
  const { id, name, dob, tob, place, rashi, nakshatra, lagna, createdAt, tags = [] } = profile;

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
      whileHover={typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? {} : { y: -4 }}
      className="relative w-full max-w-sm rounded-2xl bg-white border border-yellow-100/60 p-5 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <CharacterAvatar name={name} />
        <div className="flex-1">
          <h3 className="text-base font-mono font-semibold text-gray-900">{name}</h3>
          <p className="text-xs text-gray-500">{place}</p>
        </div>

        <time className="text-xs text-gray-400">{createdAt ? new Date(createdAt).toLocaleDateString() : ""}</time>
      </div>

      <div className="mt-4 space-y-2 text-sm text-gray-700">
        <Row label="DOB" value={dob} />
        <Row label="TOB" value={tob} />
        <Row label="Rashi" value={rashi} />
        <Row label="Nakshatra" value={nakshatra} />
        <Row label="Lagna" value={lagna} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.length ? tags.map((t) => <span key={t} className="rounded-full px-3 py-1 text-xs bg-yellow-50 text-yellow-800 border border-yellow-100">{t}</span>) : <span className="text-xs text-gray-400">No tags</span>}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button onClick={() => onView(id)} className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 border border-yellow-100 shadow-sm hover:-translate-y-0.5 transition-transform">
          View
        </button>

        <span className="text-xs text-gray-500">{/* reserved space for future CTA */}</span>
      </div>
    </motion.article>
  );
});
ProfileCard.displayName = "ProfileCard";

/* ------------------ Small helpers ------------------ */
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-xs">
      <span className="text-gray-500">{label}</span>
      <span className="font-mono text-gray-700">{value}</span>
    </div>
  );
}

/* Lightweight character avatar with initials + astrological glyph */
function CharacterAvatar({ name }: { name: string }) {
  const initials = getInitials(name);
  // deterministic pastel color by name hash
  const hue = Math.abs(hashCode(name)) % 360;
  const bg = `linear-gradient(135deg, hsl(${hue} 70% 85%), hsl(${(hue + 30) % 360} 70% 78%))`;

  return (
    <div
      className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-yellow-100 flex items-center justify-center"
      style={{ background: bg }}
      aria-hidden
    >
      <svg width="56" height="56" viewBox="0 0 56 56" className="block" role="img" aria-hidden>
        <defs>
          <clipPath id="c-clip">
            <circle cx="28" cy="28" r="26" />
          </clipPath>
        </defs>

        <g clipPath="url(#c-clip)">
          <rect width="56" height="56" fill="transparent" />
          <text x="50%" y="52%" textAnchor="middle" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', monospace" fontSize="18" fill="#1f2937" fontWeight={700}>
            {initials}
          </text>


        </g>
      </svg>
    </div>
  );
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "K";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

// simple string hash for consistent color
function hashCode(str: string) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  return h >>> 0;
}
