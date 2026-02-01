"use client";

import CloudScene from "@/components/login/cloudbg";
import DuoAuthForm from "@/components/login/DuoAuthForm";

export default function LoginPage() {
  return (
    <main className="login-page">
      <section className="mountain-banner rounded-b-[36px]">
        {/* GPU CLOUD BACKGROUND */}
        <div className="cloud-canvas">
          <CloudScene />
        </div>

        {/* OVERLAYS */}
        <div className="overlay overlay-1" />
        <div className="overlay overlay-2" />

        {/* CONTENT */}
        <div className="content">
          <DuoAuthForm />
        </div>
      </section>

      {/* Scoped, production-safe styles */}
      <style jsx>{`
        /* ================= PAGE ================= */

        .login-page {
          width: 100%;
          overflow: hidden;
        }

        /* ================= HERO SECTION ================= */

        .mountain-banner {
          position: relative;
          width: 100%;
         
          overflow: hidden;
        }

        /* ================= CLOUD CANVAS ================= */

        .cloud-canvas {
          position: absolute;

          left: 0;
          width: 100%;
          height: 120vh;
          z-index: 0;
          pointer-events: none;
        }

        /* ================= OVERLAYS ================= */

        .overlay {
          position: absolute;
          left: 0;
          width: 100%;
          pointer-events: none;
        }

        .overlay-1 {
        
          height: 120vh;
          z-index: 1;
          background: linear-gradient(
            270deg,
            rgba(226, 224, 211, 0) 0%,
            rgba(0, 0, 0, 0.3) 100%
          );
        }

        .overlay-2 {
          z-index: 2;
       
          height: 44em;
          width: 260em;
          background: url("https://terriotech.com/cloud-overlay.png")
            0 100% repeat-x;
          animation: cloudLoop 80s linear infinite;
          will-change: transform;
        }

        /* ================= CONTENT ================= */

        .content {
          position: relative;
          z-index: 3;
          height: 120vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        /* ================= ANIMATION ================= */

        @keyframes cloudLoop {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </main>
  );
}
