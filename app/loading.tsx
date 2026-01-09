"use client";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      
      {/* Ambient glow (safe inline style) */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(168,85,247,0.18), transparent 60%)",
          animation: "pulseGlow 4s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        
        {/* Spinner */}
        <div
          className="
            h-14 w-14 rounded-full
            border-4 border-violet-300/30
            border-t-violet-500
          "
          style={{
            animation: "spin 1.2s linear infinite",
          }}
        />

        {/* Text */}
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-black/60">
            Initializing
          </p>

          <p
            className="
              mt-1 text-sm sm:text-base font-medium
              bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-400
              bg-[length:200%_200%]
              bg-clip-text text-transparent
            "
            style={{
              animation: "gradientMove 6s ease infinite",
            }}
          >
            Loading cosmic wisdom
          </p>
        </div>
      </div>

      {/* Keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
      `
      }} />
    </main>
  );
}
