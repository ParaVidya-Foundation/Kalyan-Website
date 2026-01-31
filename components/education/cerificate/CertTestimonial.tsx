"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  location: string;
  role: string;
  quote: string;
  image: string;
  rating: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ananya Sharma",
    location: "New Delhi, India",
    role: "Certified Astrology Practitioner",
    quote:
      "The certification structure felt genuinely academic. The exams tested understanding, not memorization. This is the first astrology credential I felt confident listing professionally.",
    image: "/testimonials/user-1.jpg",
    rating: "Rated 4.9/5 by verified candidates",
  },
  {
    id: 2,
    name: "Rohit Iyer",
    location: "Bengaluru, India",
    role: "Astrology Consultant",
    quote:
      "What stood out was the examination roadmap. Each assessment aligned clearly with real consultation scenarios. It feels closer to a professional board exam than an online course.",
    image: "/testimonials/user-2.jpg",
    rating: "Trusted by 1,200+ learners",
  },
  {
    id: 3,
    name: "Megha Kulkarni",
    location: "Pune, India",
    role: "Vedic Astrology Student",
    quote:
      "The exams helped me identify gaps in fundamentals like dashas and predictive timing. The certification carries weight because the process is disciplined and structured.",
    image: "/testimonials/user-3.jpg",
    rating: "Academically reviewed certification",
  },
];

export default function CertTestimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length),
      7000
    );
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative mx-auto w-[95%] py-28 mb-10 rounded-[40px] bg-[#0B0F17] overflow-hidden">
      {/* 🌑 Ambient glow — dark premium */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-1/4 h-[520px] w-[520px] rounded-full bg-indigo-500/15 blur-[200px]" />
        <div className="absolute -right-48 bottom-1/4 h-[520px] w-[520px] rounded-full bg-amber-400/15 blur-[220px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT — IMAGE */}
          <div className="flex justify-center md:justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  width={360}
                  height={440}
                  className="rounded-3xl object-cover shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
                />

                {/* Rating badge */}
                <div className="absolute bottom-4 right-4 rounded-xl bg-white/95 px-3 py-1 text-xs font-medium text-slate-900 shadow">
                  ⭐ {t.rating}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id + "-text"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Certification Experience
                </p>

                <blockquote className="mt-5 text-xl md:text-2xl leading-relaxed text-slate-100 font-medium">
                  “{t.quote}”
                </blockquote>

                <div className="mt-10">
                  <div className="font-serif text-lg font-semibold text-slate-100">
                    {t.name}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">
                    {t.role} · {t.location}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
