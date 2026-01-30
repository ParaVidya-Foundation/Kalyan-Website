"use client";

import NumChat from "./NumChat";

export default function NumChatBot() {
  return (
    <section className="relative w-full overflow-hidden rounded-b-[48px]">
   
      

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT — CONTENT */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
                Experience{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    AI-Powered
                  </span>
                </span>{" "}
                Numerology
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
                A private, intelligent numerology assistant that decodes your
                life path, destiny numbers, compatibility patterns, and timing
                cycles — instantly.
              </p>
            </div>

            {/* FEATURES */}
            <ul className="space-y-4 max-w-xl">
              {[
                "24/7 instant numerology conversations",
                "AI + classical numerology logic",
                "Life Path, Destiny & Name analysis",
                "Relationship & compatibility insights",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full
                                   bg-white/10 text-cyan-300 text-xs font-semibold">
                    ✓
                  </span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-4">
              <button
                className="
                  inline-flex items-center gap-3
                  rounded-full
                  bg-gradient-to-r from-indigo-500 to-cyan-500
                  px-8 py-4
                  text-base font-semibold text-white
                  shadow-[0_18px_50px_rgba(79,70,229,0.35)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(34,211,238,0.45)]
                  active:translate-y-0
                "
                onClick={() => {
                  document
                    .getElementById("numerology-chat")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                Start Chatting
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>


            {/* subtle inner highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl
                            ring-1 ring-inset ring-white/5" />

            <NumChat />
       
        </div>
      </div>
    </section>
  );
}
