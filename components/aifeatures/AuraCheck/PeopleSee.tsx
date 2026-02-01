"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PeopleSee() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-32">
      {/* ================= SIDE IMAGES (EXTREME EDGES) ================= */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 hidden md:block"
      >
        <Image
          src="/AI/AuraCheck/leftpeople.png"
          alt="People observing you"
          width={700}
          height={700}
          className="opacity-90"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 hidden md:block"
      >
        <Image
          src="/AI/AuraCheck/rightpeople.png"
          alt="Your aura projection"
          width={700}
          height={700}
          className="opacity-90"
          priority
        />
      </motion.div>

      {/* ================= CENTER CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900"
        >
          How People <br />
          <span className="font-serif font-bold">See You ?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-slate-600"
        >
          Before words, your presence speaks.  
          Your aura quietly shapes trust, authority, warmth, and emotional
          resonance. AuraCheck decodes the subtle personality signals people
          instinctively perceive the moment you enter a space.
        </motion.p>
      </div>

      {/* ================= AMBIENT CINEMATIC GLOW ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-amber-200/25 blur-[200px]" />
      </div>
    </section>
  );
}
