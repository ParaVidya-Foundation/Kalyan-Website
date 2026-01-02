"use client";

import { ShopCard } from "./shopcard";

const items = [
 
  { title: "Blue Sapphire Gemstone", img: "/Gems/Blue-Sapphire.webp" },
  { title: "Rudraksha Mala", img: "/Accessories/rud-mala.webp" },
  { title: "Shree Krishna Poster", img: "/Poster/Posters/pos3.webp" }, 
  { title: "Aries Perfume", img: "/Perfume/Zodiac/aries1.webp" },
  { title: "Cancer Perfume", img: "/Perfume/Zodiac/cancer1.webp" },
  { title: "Hessonite Gemstone", img: "/Gems/Hessonite.webp" },
];

export default function SpiritualHero() {
  return (
    <section className="hero-root">
      {/* CONTENT */}
      <div className="hero-content">
        <h1>
          Sacred Essentials,
          <br />
          <span>Chosen for Your Journey</span>
        </h1>

        <p>
          Authentically energized spiritual items — crafted through tradition,
          refined with care, and aligned for your personal path.
        </p>
      </div>

      {/* FLOATING CARDS */}
      <div className="hero-cards">
        {items.map((item, i) => (
          <ShopCard key={item.title} index={i} {...item} />
        ))}
      </div>

      <style jsx>{`
        .hero-root {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: transparent;
        }

        .hero-content {
          position: relative;
          z-index: 6;
          max-width: 760px;
          padding: 0 1.5rem;
          text-align: center;
        }

        .hero-content h1 {
          font-family: ui-serif, Georgia, Cambria, serif;
          font-size: clamp(2.6rem, 5vw, 3.8rem);
          font-weight: 500;
          color: #2a2438;
          letter-spacing: -0.025em;
        }

        .hero-content h1 span {
          color: #5b556a;
        }

        .hero-content p {
          margin-top: 1.6rem;
          font-size: 0.95rem;
          line-height: 1.75;
          color: #6b6678;
        }

        .hero-cards {
          position: absolute;
          inset: 0;
          z-index: 4;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
