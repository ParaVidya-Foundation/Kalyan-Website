// components/onboarding/OnboardingForm.tsx
"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

type Payload = {
  dob: string; // yyyy-mm-dd
  tob?: string; // HH:MM
  tobApprox?: { hour: number; toleranceHours: number } | undefined;
  pob?: string;
  timezone?: string;
  intents: string[];
  agrees: boolean;
  optIn?: boolean;
};

const PRODUCTION_REDIRECT = "https://production.d2nkdppxtco2uf.amplifyapp.com/";

/**
 * OnboardingForm
 * - Apple-like, minimal, premium glass-morphism
 * - Step-by-step questions (DOB, TOB, POB, timezone, intents, agreement, review)
 * - Autosuggest with keyboard nav (debounced)
 * - Geolocation fallback (no external APIs)
 * - Accessible controls & ARIA
 * - Final submit redirects to production URL
 */
export default function OnboardingForm({ onComplete }: { onComplete?: (p: Payload) => void }) {
  const maxStep = 6;
  const [step, setStep] = useState<number>(0);

  // form state
  const [dob, setDob] = useState<string>("");
  const [tob, setTob] = useState<string>("");
  const [notSure, setNotSure] = useState<boolean>(false);
  const [approxHour, setApproxHour] = useState<number>(9);
  const [toleranceHours, setToleranceHours] = useState<number>(2);
  const [pob, setPob] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");
  const [intents, setIntents] = useState<string[]>([]);
  const [agrees, setAgrees] = useState<boolean>(false);
  const [optIn, setOptIn] = useState<boolean>(false);

  // UI state
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // autosuggest
  const CITY_LIST = useMemo(
    () => [
      "Mumbai, India",
      "Delhi, India",
      "Bengaluru, India",
      "Chennai, India",
      "Kolkata, India",
      "Hyderabad, India",
      "Pune, India",
      "Ahmedabad, India",
      "Jaipur, India",
      "London, UK",
      "New York, USA",
      "Los Angeles, USA",
      "San Francisco, USA",
      "Sydney, Australia",
      "Melbourne, Australia",
      "Toronto, Canada",
      "Vancouver, Canada",
      "Dubai, UAE",
      "Singapore",
      "Kuala Lumpur, Malaysia",
      "Kathmandu, Nepal",
      "Colombo, Sri Lanka",
      "Lahore, Pakistan",
      "Dhaka, Bangladesh",
      "Jakarta, Indonesia",
    ],
    []
  );

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState<number>(-1);
  const suggestRef = useRef<HTMLDivElement | null>(null);
  const pobInputRef = useRef<HTMLInputElement | null>(null);

  // detect timezone once (safe)
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) setTimezone(tz);
    } catch {
      // ignore
    }
  }, []);

  // debounced suggestions when pob value changes
  useEffect(() => {
    if (!pob || pob.trim().length === 0) {
      setSuggestions([]);
      setSuggestOpen(false);
      setHighlightIndex(-1);
      return;
    }
    const q = pob.trim().toLowerCase();
    const t = setTimeout(() => {
      const matched = CITY_LIST.filter((c) => c.toLowerCase().includes(q)).slice(0, 8);
      setSuggestions(matched);
      setSuggestOpen(matched.length > 0);
      setHighlightIndex(-1);
    }, 160);
    return () => clearTimeout(t);
  }, [pob, CITY_LIST]);

  // keyboard navigation for suggestion list on the input element
  const onPobKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!suggestOpen) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightIndex((i) => Math.min((suggestions.length - 1) || 0, Math.max(0, i + 1)));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightIndex((i) => Math.max(-1, i - 1));
      } else if (e.key === "Enter") {
        if (highlightIndex >= 0 && suggestions[highlightIndex]) {
          e.preventDefault();
          selectSuggestion(suggestions[highlightIndex]);
        }
      } else if (e.key === "Escape") {
        setSuggestOpen(false);
      }
    },
    [highlightIndex, suggestions, suggestOpen]
  );

  function selectSuggestion(value: string) {
    setPob(value);
    setSuggestions([]);
    setSuggestOpen(false);
    setHighlightIndex(-1);
    // focus the input again so the user can continue
    setTimeout(() => pobInputRef.current?.focus(), 0);
  }

  // show top suggestions on focus
  function populateSuggestionsOnFocus() {
    if (pob && pob.trim().length > 0) {
      const q = pob.trim().toLowerCase();
      const matched = CITY_LIST.filter((c) => c.toLowerCase().includes(q)).slice(0, 8);
      setSuggestions(matched);
      setSuggestOpen(matched.length > 0);
      setHighlightIndex(-1);
    } else {
      setSuggestions(CITY_LIST.slice(0, 8));
      setSuggestOpen(true);
      setHighlightIndex(-1);
    }
  }

  // geolocation (best-effort, no external api)
  const tryUseGeolocation = useCallback(async () => {
    if (!("geolocation" in navigator)) {
      setError("Geolocation not available in this browser.");
      return;
    }
    setError(null);
    try {
      setLoading(true);
      const pos = await new Promise<GeolocationPosition>((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, { maximumAge: 60_000, timeout: 8_000 })
      );
      const coords = `${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`;
      setPob(`Approx. location (${coords})`);
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz) setTimezone(tz);
      } catch {}
    } catch {
      setError("Location permission denied or unavailable.");
    } finally {
      setLoading(false);
    }
  }, []);

  const intentsList = [
    "Career & money",
    "Marriage & relationships",
    "Health & wellness",
    "Spiritual growth",
    "Education",
    "Business / investments",
    "Just exploring",
  ];

  function toggleIntent(i: string) {
    setIntents((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  }

  function validateStep(s: number) {
    setError(null);
    if (s === 0 && !dob) {
      setError("Please enter your date of birth.");
      return false;
    }
    if (s === 1 && !notSure && !tob) {
      setError("Please enter time of birth or choose 'Not sure'.");
      return false;
    }
    if (s === 2 && !pob) {
      setError("Please enter place of birth or use your location.");
      return false;
    }
    if (s === 4 && intents.length === 0) {
      // optional step — allow zero selections (user may skip)
    }
    return true;
  }

  function next() {
    setError(null);
    if (!validateStep(step)) return;
    setStep((s) => Math.min(maxStep, s + 1));
  }
  function back() {
    setError(null);
    setStep((s) => Math.max(0, s - 1));
  }

  async function submit() {
    setError(null);
    if (!agrees) {
      setError("You must accept that astrology is guidance and not deterministic fate.");
      return;
    }
    const payload: Payload = {
      dob,
      tob: notSure ? undefined : tob || undefined,
      tobApprox: notSure ? { hour: approxHour, toleranceHours } : undefined,
      pob,
      timezone,
      intents,
      agrees,
      optIn,
    };

    try {
      setLoading(true);
      // TODO: replace with real backend call; this is a placeholder delay
      await new Promise((r) => setTimeout(r, 700));
      if (onComplete) {
        onComplete(payload);
      } else {
        // final redirect to production URL (secure)
        window.location.assign(PRODUCTION_REDIRECT);
      }
    } catch (e: any) {
      setError(e?.message ?? "Submission failed.");
    } finally {
      setLoading(false);
    }
  }

  function formatHour(h: number) {
    const hh = Math.floor(h).toString().padStart(2, "0");
    return `${hh}:00`;
  }

  const motionProps = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -6 },
    transition: { duration: 0.22, ease: "easeOut" },
  } as const;

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div
        className="relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl overflow-hidden"
        style={{ boxShadow: "0 30px 80px rgba(14, 20, 30, 0.18)" }}
      >
        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">A few quick details</h1>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              These help us build your personalized Vedic chart — accurate answers mean better insights.
            </p>
          </div>

          <div className="w-48">
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 via-amber-300 to-rose-400 transition-all"
                style={{ width: `${Math.round(((step + 1) / (maxStep + 1)) * 100)}%` }}
              />
            </div>
            <div className="text-xs text-right text-slate-500 mt-1">{step + 1} / {maxStep + 1}</div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 pt-2">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="dob" {...motionProps}>
                <Card title="Date of birth" hint="Used to compute planetary positions and major life transits.">
                  <label className="block text-sm text-slate-700 mb-2">Select your date</label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3 py-3 bg-white text-base focus:outline-none focus:ring-2 focus:ring-amber-300"
                    aria-label="Date of birth"
                  />
                  <p className="text-xs text-slate-500 mt-3">
                    Example: <span className="font-medium">1987-06-23</span>. Accuracy matters — even by minutes for houses.
                  </p>
                </Card>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="tob" {...motionProps}>
                <Card title="Time of birth" hint="Time of birth refines your planetary house positions.">
                  <div className="space-y-3">
                    <label className="inline-flex items-center gap-3 text-sm">
                      <input
                        type="checkbox"
                        checked={notSure}
                        onChange={(e) => setNotSure(e.target.checked)}
                        className="h-4 w-4 rounded"
                        aria-label="Not sure about exact time of birth"
                      />
                      <span>Not sure about exact time</span>
                    </label>

                    {!notSure ? (
                      <>
                        <label className="block text-sm text-slate-700">Exact time (if known)</label>
                        <input
                          type="time"
                          value={tob}
                          onChange={(e) => setTob(e.target.value)}
                          className="w-full rounded-xl border border-slate-300 px-3 py-3 bg-white text-base focus:outline-none focus:ring-2 focus:ring-amber-300"
                          aria-label="Time of birth"
                        />
                        <p className="text-xs text-slate-500">HH:MM (24-hour). If unknown, choose "Not sure" to provide an approximate hour.</p>
                      </>
                    ) : (
                      <>
                        <div>
                          <label className="block text-sm text-slate-700">Approximate hour</label>
                          <input
                            type="range"
                            min={0}
                            max={23}
                            step={1}
                            value={approxHour}
                            onChange={(e) => setApproxHour(Number(e.target.value))}
                            className="w-full"
                            aria-label="Approximate hour of birth"
                          />
                          <div className="flex items-center justify-between text-xs text-slate-600 mt-2">
                            <span>00:00</span>
                            <span className="font-medium">{formatHour(approxHour)}</span>
                            <span>23:00</span>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm text-slate-700 mt-3">Tolerance (± hours)</label>
                          <input
                            type="range"
                            min={0}
                            max={6}
                            step={1}
                            value={toleranceHours}
                            onChange={(e) => setToleranceHours(Number(e.target.value))}
                            className="w-full"
                            aria-label="Tolerance hours"
                          />
                          <div className="text-xs text-slate-600 mt-2">
                            Estimated window: <span className="font-medium">{formatHour(Math.max(0, approxHour - toleranceHours))}</span>{" "}
                            — <span className="font-medium">{formatHour(Math.min(23, approxHour + toleranceHours))}</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500">We’ll use an uncertainty range when calculating houses — this still provides useful guidance.</p>
                      </>
                    )}
                  </div>
                </Card>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="pob" {...motionProps}>
                <Card title="Place of birth" hint="City/location is used to calculate local sidereal time and house cusps.">
                  <label className="block text-sm text-slate-700 mb-2">City</label>
                  <div className="relative">
                    <input
                      ref={pobInputRef}
                      type="text"
                      value={pob}
                      onChange={(e) => setPob(e.target.value)}
                      onFocus={populateSuggestionsOnFocus}
                      onKeyDown={onPobKeyDown}
                      onBlur={() => setTimeout(() => setSuggestOpen(false), 120)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-3 bg-white text-base focus:outline-none focus:ring-2 focus:ring-amber-300"
                      placeholder="Start typing your city (e.g. Mumbai, India)"
                      aria-label="Place of birth"
                      autoComplete="off"
                    />

                    <div ref={suggestRef} className="absolute left-0 right-0 mt-2 z-50">
                      <AnimatePresence>
                        {suggestOpen && suggestions.length > 0 && (
                          <motion.ul
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden"
                            role="listbox"
                            aria-label="City suggestions"
                          >
                            {suggestions.map((s, idx) => (
                              <li
                                key={s}
                                onMouseDown={(ev) => {
                                  // prevent blur from input before click handler
                                  ev.preventDefault();
                                  selectSuggestion(s);
                                }}
                                className={`px-4 py-3 text-sm cursor-pointer ${idx === highlightIndex ? "bg-amber-50" : "hover:bg-slate-50"}`}
                                role="option"
                                aria-selected={idx === highlightIndex}
                              >
                                {s}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center mt-4">
                    <button
                      type="button"
                      onClick={tryUseGeolocation}
                      disabled={loading}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-black text-sm font-semibold shadow hover:brightness-95 transition"
                    >
                      Use my location
                    </button>

                    <button
                      type="button"
                      onClick={() => { if (!pob) setPob("Mumbai, India"); }}
                      className="px-4 py-2 rounded-xl border border-slate-300 bg-white text-sm"
                    >
                      Suggest city
                    </button>
                  </div>

                  <p className="text-xs text-slate-500 mt-3">If unsure, use "Use my location" — you can always edit later.</p>
                </Card>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="tz" {...motionProps}>
                <Card title="Timezone" hint="Timezone ensures accurate local chart calculations.">
                  <div>
                    <label className="block text-sm text-slate-700 mb-2">Detected timezone</label>
                    <input
                      type="text"
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-3 bg-white text-base focus:outline-none focus:ring-2 focus:ring-amber-300"
                      aria-label="Timezone"
                    />
                    <p className="text-xs text-slate-500 mt-3">Auto-detected from your browser — change if it’s incorrect.</p>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm text-slate-700 mb-2">Why timezone matters</label>
                    <p className="text-xs text-slate-500">Timezone determines the offset from UTC used when converting local time to planetary positions — critical for accurate houses and transit timing.</p>
                  </div>
                </Card>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="intent" {...motionProps}>
                <Card title="What are you seeking guidance for?" hint="Choose any that apply — this helps tailor insights.">
                  <div className="flex flex-wrap gap-2 mt-3">
                    {intentsList.map((it) => (
                      <button
                        key={it}
                        type="button"
                        onClick={() => toggleIntent(it)}
                        className={`px-4 py-2 rounded-full text-sm transition ${intents.includes(it) ? "bg-amber-100 border border-amber-300 text-amber-800 shadow-sm" : "bg-white border border-slate-200 text-slate-700"}`}
                        aria-pressed={intents.includes(it)}
                      >
                        {it}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-3">You can change these anytime. We prioritise what's relevant for you.</p>
                </Card>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="agreements" {...motionProps}>
                <Card title="Agreement" hint="A small important step before we proceed.">
                  <div className="space-y-4">
                    <label className="flex items-start gap-3">
                      <input type="checkbox" checked={agrees} onChange={(e) => setAgrees(e.target.checked)} className="h-5 w-5 rounded" />
                      <div>
                        <div className="text-sm font-medium text-slate-800">I understand astrology is a guidance system, not deterministic fate.</div>
                        <div className="text-xs text-slate-500 mt-1">By continuing you acknowledge the nature of astrological guidance.</div>
                      </div>
                    </label>

                    <label className="flex items-center gap-3">
                      <input type="checkbox" checked={optIn} onChange={(e) => setOptIn(e.target.checked)} className="h-4 w-4 rounded" />
                      <span className="text-sm text-slate-700">Send me important insights (no spam)</span>
                    </label>
                  </div>
                </Card>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div key="review" {...motionProps}>
                <Card title="Review & Submit" hint="Quick check before we generate your chart.">
                  <div className="space-y-3">
                    <Summary label="Date of birth" value={dob || "—"} />
                    <Summary label="Time of birth" value={notSure ? `${formatHour(approxHour)} ±${toleranceHours}h (approx)` : tob || "—"} />
                    <Summary label="Place of birth" value={pob || "—"} />
                    <Summary label="Timezone" value={timezone || "—"} />
                    <Summary label="Seeking guidance" value={intents.length ? intents.join(", ") : "—"} />
                    <p className="text-sm text-slate-700 mt-2">When you submit, we'll calculate your personalized Vedic chart using the details above. You can update these later.</p>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* error */}
          {error && <div className="mt-4 text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</div>}

          {/* navigation */}
          <div className="mt-6 flex items-center justify-between">
            <div>
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                className="px-4 py-2 rounded-lg border border-slate-300 bg-white text-sm text-slate-700 disabled:opacity-50"
              >
                Back
              </button>
            </div>

            <div className="flex items-center gap-3">
              {step < maxStep ? (
                <button
                  type="button"
                  onClick={next}
                  className="px-6 py-2 rounded-lg bg-amber-400 shadow text-black font-semibold hover:brightness-95 transition-all"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => void submit()}
                  disabled={loading}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-rose-400 text-black font-semibold shadow hover:brightness-95 disabled:opacity-60 transition-all"
                >
                  {loading ? "Saving…" : "Submit & continue"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- small presentational subcomponents ---------- */

function Card({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/90 rounded-2xl p-5 shadow-inner border border-white/60">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between bg-white/40 border border-white/30 rounded-lg px-3 py-2">
      <div className="text-sm text-slate-700">{label}</div>
      <div className="text-sm text-slate-800 font-medium">{value}</div>
    </div>
  );
}
