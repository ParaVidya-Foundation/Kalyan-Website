"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function CloudFooter() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-end w-full max-w-7xl mx-auto">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`px-6 py-16 lg:py-20 ${poppins.className}`}
        >
          <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-black leading-snug">
            Your system for <br />
            <span className="font-semibold">Kundli management</span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed max-w-md">
            Securely store, organize, and access every Kundli in one calm,
            cloud-based space — structured, searchable, and always available.
          </p>

          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="
              mt-6 inline-flex items-center gap-3
              rounded-full bg-black
              px-5 py-2.5
              text-xs font-medium text-white
              shadow-[0_8px_24px_rgba(0,0,0,0.18)]
            "
          >
            Explore Kundli Cloud
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              ↗
            </span>
          </motion.button>
        </motion.div>

        {/* ================= RIGHT VISUAL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[260px] md:h-[300px] w-full"
        >
          {/* Stick image to bottom */}
          <div className="absolute bottom-0 right-0 w-full flex justify-center">
            <Image
              src="/Service/Cloud/cloudfooter.png"
              alt="Kundli Cloud Interface"
              width={620}
              height={620}
              className="object-contain drop-shadow-[0_24px_64px_rgba(0,0,0,0.16)]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
