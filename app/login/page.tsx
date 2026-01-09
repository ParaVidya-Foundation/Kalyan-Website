"use client";

import { useState } from "react";
import LoginForm from "@/components/login/loginform";
import CloudScene from "@/components/login/cloudbg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <main className="login-page">
      <section className="mountain-banner">
        {/* GPU CLOUD BACKGROUND */}
        <div className="cloud-canvas">
          <CloudScene />
        </div>

        {/* OVERLAYS */}
        <div className="overlay overlay-1" />
        <div className="overlay overlay-2" />

        {/* CONTENT */}
        <div className="content">
          <LoginForm
            email={email}
            password={password}
            rememberMe={rememberMe}
            setEmail={setEmail}
            setPassword={setPassword}
            setRememberMe={setRememberMe}
          />
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
          height: calc(120vh + 80px); /* total space including header offset */
          padding-top: 80px; /* SAFE OFFSET for fixed header */
          overflow: hidden;
        }

        /* ================= CLOUD CANVAS ================= */

        .cloud-canvas {
          position: absolute;
          top: 80px; /* start AFTER header */
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
          top: 80px;
          height: 120vh;
          z-index: 1;
          background: linear-gradient(
            270deg,
            rgba(226, 224, 211, 0) 0%,
            rgba(0, 0, 0, 0.4) 100%
          );
        }

        .overlay-2 {
          z-index: 2;
          top: 80px;
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
