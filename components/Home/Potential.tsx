"use client";

import Galaxy from "../UIComponents/Galaxy";

export default function Potential() {
  return (
    <section className="bg-black">
      <section
        className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden"
        style={{
          WebkitMaskImage: `
            linear-gradient(
              to bottom,
              transparent 0%,
              black 18%,
              black 82%,
              transparent 100%
            )
          `,
          maskImage: `
            linear-gradient(
              to bottom,
              transparent 0%,
              black 18%,
              black 82%,
              transparent 100%
            )
          `,
        }}
      >
        {/* 🌌 Galaxy Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Galaxy
            density={0.6}
            saturation={0.2}
            twinkleIntensity={0.25}
            mouseRepulsion={false}
          />
        </div>

        {/* 🧠 Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
          {/* Headline */}
          <h1
            className="
              text-balance
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-semibold leading-tight
              bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400
              bg-[length:200%_200%]
              bg-clip-text text-transparent
              animate-gradientMove
            "
          >
            Join our global
            <br />
            Astrologer Community
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-white/80">
            Connect with verified astrologers, share your expertise, grow your
            personal brand, and reach seekers who value authentic Vedic wisdom.
            Learn, collaborate, and evolve — together.
          </p>

          {/* CTA Row */}
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            {/* Avatars */}
            <div className="flex items-center -space-x-3">
              {["/a1.jpg", "/a2.jpg", "/a3.jpg", "/a4.jpg"].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-9 w-9 rounded-full border border-black/50 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    e.stopPropagation();
                  }}
                  loading="lazy"
                />
              ))}
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs text-white">
                +500
              </div>
            </div>

            {/* Button */}
            <button
              className="
                group relative inline-flex items-center gap-2
                rounded-full px-6 py-3
                text-sm font-medium text-white
                bg-gradient-to-r from-violet-600 to-fuchsia-500
                shadow-[0_0_40px_rgba(168,85,247,0.55)]
                transition-all duration-300
                hover:scale-[1.04]
                hover:shadow-[0_0_70px_rgba(217,70,239,0.9)]
                focus:outline-none
              "
            >
              🌟 Join as an Astrologer
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition group-hover:opacity-100" />
            </button>
          </div>
        </div>

        {/* 🎞 Gradient animation */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes gradientMove {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .animate-gradientMove {
              animation: gradientMove 6s ease infinite;
            }
          `,
          }}
        />
      </section>
    </section>
  );
}
