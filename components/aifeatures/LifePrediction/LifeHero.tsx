"use client";

export default function LifeHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 grid grid-cols-2">
        {/* Left – Soft Red */}
        <div className="bg-[#FF6B6B]/90" />

        {/* Right – Soft Green */}
        <div className="bg-[#7CFF00]/80" />
      </div>

      {/* ================= AMBIENT GLOW ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-white/30 blur-[120px]" />

        {/* Center soft diffusion */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <h1
          className="
            max-w-4xl
            text-[120px]
            font-serif
            font-semibold
            tracking-tight
            text-black
            leading-tight
          "
          style={{
            textShadow: "0 10px 30px rgba(0,0,0,0.18)",
          }}
        >
          Life Prediction
          <br />
          made as easy as
          <br />
       
            Possible

        </h1>
      </div>
    </section>
  );
}
