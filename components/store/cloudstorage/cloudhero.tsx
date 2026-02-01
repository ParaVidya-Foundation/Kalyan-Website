"use client";

import CloudScene from "@/components/login/cloudbg";

export default function CloudHero() {
  return (
    <main className="login-page">
      <section className="mountain-banner rounded-b-[36px]">
        {/* GPU CLOUD BACKGROUND */}
        <div className="cloud-canvas">
          <CloudScene />
        </div>

        {/* CONTENT */}
        <div className="content">
          <div className="flex flex-col items-center gap-8 max-w-3xl">

            {/* Heading */}
            <h1
              className="
                text-[100px]
                text-center
                font-semibold 
                tracking-tight 
                leading-tight
                text-black
                relative
              "
              style={{
                textShadow: "0 10px 28px rgba(0,0,0,0.18)",
              }}
            >
              All your{" "}
              <span
                className="
                  font-serif
                  font-bold
                  text-black
                  tracking-tight
                  relative
                "
                style={{
                  textShadow: "0 -4px 16px rgba(255, 200, 120, 0.35)",
                }}
              >
                Kundli
              </span>{" "}
              in one place
            </h1>

            {/* Paragraph */}
            <p className="text-center text-lg leading-relaxed text-gray-600 max-w-2xl">
              Welcome to your personal <span className="font-medium text-gray-800">Kundli Cloud</span>.
              Securely save, organize, and access all your horoscopes in one place —
              across years, family members, and consultations.  
              No files. No confusion. Always available.
            </p>

            {/* Glass CTA */}
            <button
              className="
                mt-2
                inline-flex items-center justify-center
                rounded-full
                px-8 py-3
                text-sm font-medium
                text-gray-900
                bg-white/30
                backdrop-blur-xl
                border border-white/40
                shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                transition-all duration-300
                hover:-translate-y-[1px]
                hover:shadow-[0_28px_80px_rgba(0,0,0,0.22)]
                focus:outline-none
              "
            >
              Access your Kundli Cloud
            </button>

          </div>
        </div>
      </section>

      {/* Existing scoped styles (unchanged) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .login-page {
          width: 100%;
          overflow: hidden;
        }

        .mountain-banner {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .cloud-canvas {
          position: absolute;
          left: 0;
          width: 100%;
          height: 120vh;
          z-index: 0;
          pointer-events: none;
        }

        .content {
          position: relative;
          z-index: 3;
          height: 120vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
      `}} />
    </main>
  );
}
