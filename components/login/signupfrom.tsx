"use client";

import React, { useCallback, useMemo, useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

/* ------------------ Password Strength ------------------ */
function calcPasswordScore(pw: string) {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 8) score += 30;
  if (/[A-Z]/.test(pw)) score += 15;
  if (/[0-9]/.test(pw)) score += 15;
  if (/[^A-Za-z0-9]/.test(pw)) score += 20;
  if (pw.length >= 12) score += 20;
  return Math.min(100, score);
}

type Props = {
  onSwitch?: () => void; // switch to login
};

export default function SignupForm({ onSwitch }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const passwordScore = useMemo(
    () => calcPasswordScore(password),
    [password]
  );

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);

      if (!name || !email || !password) {
        setError("Name, email and password are required.");
        return;
      }

      if (passwordScore < 25) {
        setError("Please choose a stronger password.");
        return;
      }

      try {
        setLoading(true);

        // TODO: replace with real API
        await new Promise((r) => setTimeout(r, 700));

        // Redirect to onboarding
        window.location.assign("/Onboarding");
      } catch {
        setError("Signup failed. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [name, email, password, passwordScore]
  );

  return (
    <div className="max-w-md w-full mx-auto rounded-2xl bg-white/70 backdrop-blur-md border border-white/30 shadow-xl p-6">
      <h2 className="text-lg font-semibold text-slate-900">
        Create account
      </h2>
      <p className="text-sm text-slate-600 mb-4">
        Simple start. Personalization comes next.
      </p>

      <form onSubmit={submit} className="space-y-4" noValidate>
        {/* NAME */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Full name
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
            <User size={16} className="text-slate-500" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Asha Sharma"
              className="flex-1 bg-transparent outline-none text-sm text-slate-900"
              autoComplete="name"
              required
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Email
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
            <Mail size={16} className="text-slate-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              className="flex-1 bg-transparent outline-none text-sm text-slate-900"
              autoComplete="email"
              required
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Password
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
            <Lock size={16} className="text-slate-500" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a secure password"
              className="flex-1 bg-transparent outline-none text-sm text-slate-900"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="p-1 text-slate-600 hover:text-slate-900"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Strength bar (visual only, no ARIA misuse) */}
          <div className="mt-2 flex items-center gap-3">
            <div className="flex-1 h-2 bg-slate-100 rounded overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 transition-all"
                style={{ width: `${Math.max(6, passwordScore)}%` }}
              />
            </div>
            <span className="text-xs text-slate-600 w-14 text-right">
              {passwordScore >= 80
                ? "Strong"
                : passwordScore >= 50
                ? "Good"
                : "Weak"}
            </span>
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <div
            role="alert"
            className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {/* ACTIONS */}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 rounded-lg bg-gradient-to-r from-sky-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow hover:scale-[1.01] transition disabled:opacity-60"
          >
            {loading ? "Creating…" : "Create account"}
          </button>

          <button
            type="button"
            onClick={onSwitch}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
