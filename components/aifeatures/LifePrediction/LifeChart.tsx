"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay },
});

export default function LifeChart() {
  const [period, setPeriod] = useState("");

  const options = [
    "+/- 1 Day",
    "+/- 1 Week",
    "+/- 1 Month",
    "+/- 2 Months",
    "+/- 3 Months",
    "+/- 6 Months",
    "+/- 1 Year",
    "+/- 3 Years",
    "+/- 5 Years",
    "+/- 10 Years",
    "Full Life",
    "Age 1 to 35",
    "Age 10 to 35",
    "Age 25 to 50",
    "Age 35 to 60",
    "Age 60 to 85",
    "Age 50 to 100",
  ];

  return (
    <main className="min-h-screen py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14 font-mono">
        <div className="grid grid-cols-1 gap-12">

          {/* ================= HEADER ================= */}
          <motion.div {...fadeUp(0)}>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-1">
              Predictions
            </p>
            <h1 className="text-3xl sm:text-[2.2rem] font-semibold text-gray-900 tracking-tight">
              AI Dasha Timeline
            </h1>
            <p className="mt-2 text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
              Choose a time window and visualize your Dasha flow as a clean,
              color-coded life map.
            </p>
          </motion.div>

          {/* ================= CONTROLS ================= */}
          <motion.div {...fadeUp(0.05)} className="space-y-5 max-w-md">
            <div className="space-y-2">
              <label className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-500">
                Time period
              </label>

              <Select value={period} onValueChange={setPeriod}>
                <SelectTrigger className="h-11 rounded-xl bg-gray-50 border border-gray-200 text-sm">
                  <SelectValue placeholder="Select time range…" />
                </SelectTrigger>

                <SelectContent className="rounded-xl bg-white border border-gray-200 shadow-xl max-h-72 overflow-y-auto">
                  {options.map((opt) => (
                    <SelectItem key={opt} value={opt} className="text-sm py-2.5">
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              disabled={!period}
              className="
                h-11 rounded-xl bg-gray-900 text-white
                text-xs font-semibold tracking-[0.18em] uppercase
                hover:bg-black transition
                disabled:opacity-60
              "
            >
              {period ? `Calculate for ${period}` : "Select a period to calculate"}
            </Button>
          </motion.div>

          {/* ================= DASH MAP ================= */}
          <motion.div
            {...fadeUp(0.15)}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Dasha Map
              </p>
              {period && (
                <span className="text-[11px] text-gray-600">
                  Window:{" "}
                  <span className="font-semibold text-gray-900">{period}</span>
                </span>
              )}
            </div>

            <div className="relative flex justify-center">
              <Image
                src="/AI/Life/showcase.svg"
                alt="Dasha Timeline Visualization"
                width={1200}
                height={600}
                className="w-full max-w-3xl h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* ================= EXPLANATION ================= */}
          <motion.div
            {...fadeUp(0.2)}
            className="pt-8 border-t border-dashed border-gray-200 space-y-10 max-w-4xl"
          >
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              Your mind processes{" "}
              <span className="text-green-600 font-semibold">color</span>{" "}
              faster than text. This timeline converts complex Dasha data
              into a visual rhythm you can understand in seconds.
            </p>

            <Image
              src="/AI/Life/life-predictor-image.jpg"
              alt="Dasha Chart Explanation"
              width={1200}
              height={700}
              className="rounded-xl border border-gray-200 shadow-sm"
            />

            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              <span className="text-red-600 font-semibold">Red</span> indicates
              challenging phases.{" "}
              <span className="text-green-600 font-semibold">Green</span>{" "}
              represents supportive periods. The goal is clarity, not fear.
            </p>

            {/* ================= PREDICTION PREVIEWS ================= */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-gray-900 pl-3">
                Prediction Snapshots
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {["/AI/Life/1.jpg", "/AI/Life/2.jpg", "/AI/Life/3.jpg", "/AI/Life/4.jpg"].map(
                  (src, i) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <Image
                        src={src}
                        alt="Prediction Preview"
                        width={600}
                        height={400}
                        className="rounded-xl border border-gray-200 shadow-sm"
                      />
                    </motion.div>
                  )
                )}
              </div>
            </div>

            {/* ================= SUMMARY ================= */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-gray-900 pl-3">
                Smart Summary
              </h2>

              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                The Smart Summary row shows intensity. Dark{" "}
                <span className="text-red-600 font-semibold">Red</span> means
                stronger challenges. Softer{" "}
                <span className="text-green-600 font-semibold">Green</span>{" "}
                reflects manageable, growth-oriented periods.
              </p>

              <Image
                src="/AI/Life/life-predictor-connection.jpg"
                alt="Smart Summary Visualization"
                width={1200}
                height={700}
                className="rounded-xl border border-gray-200 shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
