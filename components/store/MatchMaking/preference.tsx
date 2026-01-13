"use client";

import Image from "next/image";

export default function Preference() {
  return (
    <section className="relative w-full py-32 bg-[#fff397] overflow-hidden">
      <div className="relative mx-auto z-50 max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT : IMAGE */}
        <div className="relative w-full flex justify-center">
          <Image
            src="/matchmaking/preference.webp"
            alt="Marriage Preferences Illustration"
            width={760}
            height={760}
            priority
            className="
              w-full 
              max-w-lg 
              h-auto 
              object-contain
              drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]
            "
          />
        </div>

        {/* RIGHT : CONTENT */}
        <div className="text-center md:text-left">
          <h2
            className="
              text-4xl md:text-5xl
              font-serif
              font-semibold
              tracking-tight
              text-[#4b0f14]
            "
          >
            Your Preferences Are Sacred
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#5c2a2e] max-w-xl mx-auto md:mx-0">
            Marriage is not a checklist — it is a union of values, families,
            and life paths. Your preferences deserve patience, understanding,
            and respect.
          </p>

          <p className="mt-4 text-base leading-relaxed text-[#6b3035] max-w-lg mx-auto md:mx-0">
            From cultural alignment to lifestyle expectations, our team ensures
            every detail is considered with discretion and deep astrological
            wisdom.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center md:justify-start">
            <a href="tel:+919871130487" aria-label="Contact marriage consultant">
              <button
                className="
                  relative
                  px-10 py-4
                  rounded-full
                  bg-gradient-to-r from-[#f6c1cc] to-[#f3aebd]
                  text-[#4b0f14]
                  font-medium
           
                  text-base
                  shadow-[0_10px_30px_rgba(75,15,20,0.25)]
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-[2px]
                  hover:shadow-[0_18px_40px_rgba(75,15,20,0.35)]
                  active:translate-y-0
                "
              >
                Speak to a Marriage Consultant
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
