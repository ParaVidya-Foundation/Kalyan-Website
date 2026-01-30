"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = ["/Service/matchmaking/mmil.webp", "/Service/matchmaking/mmil1.webp"];

export default function HeroMatch() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative m-10 mx-auto w-[98%] h-[90vh] rounded-3xl overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={IMAGES[index]}
            alt="Hero Match"
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
