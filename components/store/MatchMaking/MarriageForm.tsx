"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Lock,
} from "lucide-react";

export default function MarriageForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState<"male" | "female" | "other" | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative w-full py-28 overflow-hidden z-100">

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
      <div className="text-black font-serif">
  <h3 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
    Your information is held with reverence
  </h3>

  <p className="mt-6 text-lg md:text-xl text-black/85 leading-relaxed max-w-2xl">
    Marriage is not a transaction.  
    It is a sacred union of lives, families, and destinies.
    <br />
    <br />
    Every detail you share is used only to understand
    <span className="font-medium"> compatibility, planetary harmony, and lifelong balance</span>
    — nothing more, nothing less.
  </p>

  <ul className="mt-10 space-y-6 text-lg text-black/90">
    <li className="flex items-start gap-4">
      <ShieldCheck className="h-6 w-6 mt-1" />
      <span>
        Your data is <span className="font-medium">never sold, shared, or exposed</span> — it remains private and protected.
      </span>
    </li>

    <li className="flex items-start gap-4">
      <Lock className="h-6 w-6 mt-1" />
      <span>
        Used exclusively for <span className="font-medium">personalized matchmaking</span>,
        kundli alignment, and marital harmony analysis.
      </span>
    </li>

    <li className="flex items-start gap-4">
      <HeartHandshake className="h-6 w-6 mt-1" />
      <span>
        Rooted in ancient tradition, safeguarded by
        <span className="font-medium"> modern security standards</span>.
      </span>
    </li>
  </ul>

  <p className="mt-10 text-base md:text-lg text-black/70 max-w-xl">
    You are always in control.  
    Your details can be updated or removed at any time —
    with complete dignity and transparency.
  </p>
</div>

        
          {/* FORM */}
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="rounded-2xl bg-white/18 backdrop-blur-xl border border-white/25 shadow-[0_30px_90px_rgba(0,0,0,0.4)] p-8"
              >
                <header className="mb-6">
                  <h1 className="text-3xl font-semibold text-black tracking-tight">
                    Marriage Match Form
                  </h1>
                  <p className="mt-2 text-sm text-black/80">
                    A sacred beginning — guided by tradition, refined by precision.
                  </p>
                </header>

                <form onSubmit={submit} className="space-y-4">
                  <Field icon={User} label="Full Name" required />
                  <GenderSelect value={gender} onChange={setGender} />
                  <Field icon={Calendar} label="Date of Birth" type="date" required />
                  <Field icon={Clock} label="Time of Birth" type="time" required />
                  <Field icon={MapPin} label="Place of Birth" required />
                  <Field icon={Phone} label="Phone Number" type="tel" inputMode="tel" required />

                  <button
                    type="submit"
                    disabled={loading || !gender}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#C31419] font-semibold py-3 shadow-lg transition-transform hover:scale-[1.015] disabled:opacity-60"
                  >
                    <HeartHandshake className="h-5 w-5" />
                    {loading ? "Processing…" : "Find My Match"}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="finding"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded-2xl bg-white/18 backdrop-blur-xl border border-white/25 shadow-[0_30px_90px_rgba(0,0,0,0.4)] p-10 text-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
                  className="mx-auto mb-6 w-16 h-16 rounded-full bg-white/30 flex items-center justify-center"
                >
                  <Sparkles className="h-8 w-8 text-black" />
                </motion.div>

                <h2 className="text-2xl font-semibold text-black">
                  Finding your match made in heaven
                </h2>

                <p className="mt-3 text-sm text-black/80 max-w-sm mx-auto">
                  Aligning planetary houses, compatibility yogas, and sacred
                  patterns — with patience and precision.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TRUST CONTENT */}

        </div>
      </div>
    </section>
  );
}

/* ---------------- FIELD ---------------- */

function Field({
  icon: Icon,
  label,
  ...props
}: {
  icon: React.ElementType;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-medium text-black/80 mb-1">
        {label}
      </label>
      <div className="flex items-center gap-3 rounded-xl bg-white/85 px-4 py-3 shadow-inner">
        <Icon className="h-4 w-4 text-[#C31419]" aria-hidden />
        <input
          {...props}
          className="flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
      </div>
    </div>
  );
}

/* ---------------- GENDER ---------------- */

function GenderSelect({
  value,
  onChange,
}: {
  value: "male" | "female" | "other" | null;
  onChange: (v: "male" | "female" | "other") => void;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-black/80 mb-2">
        Gender
      </label>
      <div className="flex gap-3">
        {["male", "female", "other"].map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => onChange(g as any)}
            className={`px-4 py-2 rounded-xl text-sm transition border ${
              value === g
                ? "bg-white text-[#C31419] border-white shadow"
                : "bg-white/20 text-black border-white/30"
            }`}
          >
            {g.charAt(0).toUpperCase() + g.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
