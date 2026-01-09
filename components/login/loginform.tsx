"use client";

import React, { useCallback, useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

type Props = {
  onSwitch?: () => void; // switch to signup
  onSuccessRedirect?: string;
};

const DEFAULT_REDIRECT = "https://production.d2nkdppxtco2uf.amplifyapp.com/";

export default function LoginForm({ onSwitch, onSuccessRedirect }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const redirectUrl = onSuccessRedirect ?? DEFAULT_REDIRECT;

  const submit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);

      if (!email || !password) {
        setError("Email and password are required.");
        return;
      }

      try {
        setLoading(true);

        // TODO: replace with real login API
        await new Promise((r) => setTimeout(r, 700));

        window.location.assign(redirectUrl);
      } catch {
        setError("Login failed. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [email, password, redirectUrl]
  );

  const oauth = (provider: "google" | "apple" | "github") => {
    window.open(
      `/api/auth/oauth/${provider}`,
      `_oauth_${provider}`,
      "width=720,height=720"
    );
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-white/30 bg-white/70 p-6 shadow-xl backdrop-blur-md">
      <h2 className="mb-1 text-lg font-semibold text-slate-900">
        Welcome back
      </h2>
      <p className="mb-4 text-sm text-slate-600">
        Sign in to your account
      </p>

      <form onSubmit={submit} className="space-y-4" noValidate>
        {/* EMAIL */}
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Email
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
            <Mail size={16} className="text-slate-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              className="flex-1 bg-transparent text-sm text-slate-900 outline-none"
              autoComplete="email"
              required
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Password
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
            <Lock size={16} className="text-slate-500" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="flex-1 bg-transparent text-sm text-slate-900 outline-none"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="rounded-md p-1 text-slate-600 hover:text-slate-900"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
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
            className="flex-1 rounded-lg bg-gradient-to-r from-sky-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow transition hover:scale-[1.01] disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>

          <button
            type="button"
            onClick={onSwitch}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            Create account
          </button>
        </div>

        {/* DIVIDER */}
        <div className="mt-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-500">or continue with</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* OAUTH */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => oauth("google")}
            aria-label="Continue with Google"
            className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:shadow-sm"
          >
            Google
          </button>

          <button
            type="button"
            onClick={() => oauth("apple")}
            aria-label="Continue with Apple"
            className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:shadow-sm"
          >
            Apple
          </button>
        </div>
      </form>
    </div>
  );
}
