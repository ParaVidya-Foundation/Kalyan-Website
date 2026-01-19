// components/FAQSection.tsx
"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/**
 * FAQ Section
 * - Left: Big headline + contact / CTA
 * - Right: Accessible accordion (one panel at a time or multiple open)
 * - Keyboardable, aria attributes, framer-motion height/opacity animation
 * - Tailwind based styling (adjust tokens to match your design system)
 */

const FAQ_DATA = [
  {
    q: "How does the Vedic report work?",
    a: `We calculate your natal (Janma) chart using your date, time and place of birth.
        The report translates planetary positions, house placements, and dashas into clear, evidence-backed insights about career, relationships, health and growth.`,
  },
  {
    q: "How accurate are the charts?",
    a: `Charts are astronomy-driven; accuracy depends on the birth details you provide. Exact time & place give precise house placements — we recommend the best possible details for deeper accuracy.`,
  },
  {
    q: "How long until I receive my report?",
    a: `Standard delivery: 24–48 hours for automated PDF reports. Handcrafted / personal consultations may take longer (we'll show ETA at checkout).`,
  },
  {
    q: "Are there additional fees?",
    a: `Base reports list an all-inclusive price. Add-ons (detailed remedies, gemstones, live consults) are optional and clearly listed before payment.`,
  },
  {
    q: "What if I don't know my exact birth time?",
    a: `Choose "Not sure" and give an approximate hour or a tolerance window — we'll use rectification techniques where possible and still deliver meaningful guidance.`,
  },
  {
    q: "How is my data used and protected?",
    a: `We treat your data with reverence: encrypted in transit & at rest, never sold, and used only to generate your astrological analysis. You can update or remove data any time.`,
  },
  {
    q: "Can I request corrections or clarifications?",
    a: `Yes — if something looks off, contact support and we'll review your details, recalculate if needed, and issue corrected output where applicable.`,
  },
];

export default function ReportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // start with first open
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQ_DATA;
    return FAQ_DATA.filter(
      (f) =>
        f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
  }, [query]);

  function toggle(i: number) {
    setOpenIndex((cur) => (cur === i ? null : i));
  }

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Contact / Headline */}
          <div className="pt-6 lg:pt-12">
            <h2
              className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Any questions?
              <br />
              We got you.
            </h2>

            <p className="mt-6 text-base text-gray-600 max-w-lg">
              Need help reading your report or want a personalised consultation?
              Send us your details and we’ll walk you through the key insights —
              clearly, compassionately, and with privacy.
            </p>

            <div className="mt-8 flex gap-4 flex-col sm:flex-row">
              <Link href="/login" legacyBehavior>
                <div
                  className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:scale-[1.02] transition-transform"
                  aria-label="Contact support"
                >
                  Contact support
                    </div>
              </Link>

              <div
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
              >
                Email us
              </div>
            </div>

            <div className="mt-8">
              <label htmlFor="faq-search" className="sr-only">
                Search FAQs
              </label>
              <div className="relative max-w-md">
                <input
                  id="faq-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search FAQs — e.g. delivery, refunds, privacy"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Quick search across question & answer content.
              </p>
            </div>

            <div className="mt-8 text-sm text-gray-600">
              <strong>Still stuck?</strong>
              <p className="mt-2">
                WhatsApp / Call:{" "}
                <a className="text-indigo-600 font-medium" href="tel:+919871130487">
                  +91 98711 30487
                </a>
              </p>
            </div>

            <div className="mt-8">
              <Link href="/faqs" legacyBehavior>
                <a className="text-indigo-600 font-medium hover:underline">
                  More FAQs →
                </a>
              </Link>
            </div>
          </div>

          {/* RIGHT: Full FAQ list (accordion) */}
          <div className="pt-6 lg:pt-12">
            <div className="space-y-4">
              {filtered.length === 0 && (
                <div className="text-sm text-gray-500">No results — try different words.</div>
              )}

              {filtered.map((item, idx) => {
                // original index in FAQ_DATA to control unique open state when filtered:
                const originalIndex = FAQ_DATA.indexOf(item);
                const isOpen = openIndex === originalIndex;

                return (
                  <div
                    key={originalIndex}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen ? "true" : "false"}
                      aria-controls={`faq-panel-${originalIndex}`}
                      onClick={() => toggle(originalIndex)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggle(originalIndex);
                        }
                      }}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                          {item.q}
                        </h3>
                      </div>

                      <div className="ml-4 flex items-center">
                        <svg
                          className={`h-5 w-5 text-gray-500 transform transition-transform ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${originalIndex}`}
                          key="panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="py-3 text-sm text-gray-700">
                            <p style={{ whiteSpace: "pre-wrap" }}>{item.a}</p>

                            {/* Helpful micro actions */}
                            <div className="mt-3 flex gap-3">
                              <Link href="/login" legacyBehavior>
                                <a className="text-xs inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-3 py-1 hover:brightness-95 transition">
                                  Talk to expert
                                </a>
                              </Link>

                              <a
                                href="mailto:report@kalyan.example?subject=Question about my report"
                                className="text-xs inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1 hover:bg-gray-50 transition"
                              >
                                Email support
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
