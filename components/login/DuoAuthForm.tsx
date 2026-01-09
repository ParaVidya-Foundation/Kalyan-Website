"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "./loginform";
import SignupForm from "./signupfrom";

export default function DuoAuthForm() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="mx-auto w-full max-w-3xl px-4">
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Kalyan
          </h1>
          <p className="text-sm text-slate-600">
            Vedic astrology
          </p>
        </div>

        {/* MODE TOGGLE */}
        <div
          role="tablist"
          aria-label="Authentication mode"
          className="flex items-center gap-1 rounded-full border border-white/20 bg-white/40 px-1.5 py-1 backdrop-blur"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === "login" ? "true" : "false"}
            onClick={() => setMode("login")}
            className={`rounded-xl px-3 py-1 text-sm font-medium transition ${
              mode === "login"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Login
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={mode === "signup" ? "true" : "false"}
            onClick={() => setMode("signup")}
            className={`rounded-xl px-3 py-1 text-sm font-medium transition ${
              mode === "signup"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Sign up
          </button>
        </div>
      </div>

      {/* FORM CONTAINER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {mode === "login" ? (
            <LoginForm onSwitch={() => setMode("signup")} />
          ) : (
            <SignupForm onSwitch={() => setMode("login")} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
