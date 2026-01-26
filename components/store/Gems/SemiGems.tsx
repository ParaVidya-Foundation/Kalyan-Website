"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

interface GemData {
  name: string;
  imgSrc: string;
  price: number;
  discount: number;
  iconBg: string;
}

const SemiStone: GemData[] = [
  { name: "Feroza", imgSrc: "/Gems/Feroza.webp", price: 700, discount: 15, iconBg: "#FEF7F2" },
  { name: "Amethyst", imgSrc: "/Gems/Amethyst.webp", price: 700, discount: 20, iconBg: "#FEF7F2" },
  { name: "Lapis", imgSrc: "/Gems/Lapis.webp", price: 300, discount: 25, iconBg: "#FEF7F2" },
  { name: "Sunhela", imgSrc: "/Gems/Sunhela.webp", price: 300, discount: 10, iconBg: "#FEF7F2" },
  { name: "Kaka Neeli", imgSrc: "/Gems/Kaka-Neeli.webp", price: 700, discount: 18, iconBg: "#FEF7F2" },
  { name: "Tiger Eye", imgSrc: "/Gems/Tiger-Eye.webp", price: 200, discount: 12, iconBg: "#FEF7F2" },
  { name: "Sulemani Hakik", imgSrc: "/Gems/Sulemani-Hakik.webp", price: 300, discount: 22, iconBg: "#FEF7F2" },
  { name: "Mahe Mariam", imgSrc: "/Gems/Mahe-Mariam.webp", price: 300, discount: 14, iconBg: "#FEF7F2" },
  { name: "Moonstone", imgSrc: "/Gems/Moonstone.webp", price: 300, discount: 19, iconBg: "#FEF7F2" },
  { name: "Peridot", imgSrc: "/Gems/Peridot.webp", price: 1000, discount: 17, iconBg: "#FEF7F2" },
  { name: "Turmuli", imgSrc: "/Gems/Turmuli.webp", price: 1000, discount: 21, iconBg: "#FEF7F2" },
  { name: "Zirkon", imgSrc: "/Gems/Zirkon.webp", price: 1000, discount: 16, iconBg: "#FEF7F2" },
];

export default function SemiGems() {
  const router = useRouter();

  const calculateDiscountedPrice = (price: number, discount: number) =>
    Math.round(price - (price * discount) / 100);

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        section {
          padding-block: min(20vh, 2rem);
          width: calc(min(76.5rem, 90%));
          margin-inline: auto;
          color: #111;
          font-family: var(--font-lato), "Lato", sans-serif;
        }
        section h2 {
          text-transform: capitalize;
          letter-spacing: 0.025em;
          font-size: clamp(2rem, 1.8125rem + 0.75vw, 2.6rem);
          font-weight: 700;
          margin-bottom: 2rem;
        }
        .container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 5em;
        }
        @media (max-width: 1024px) {
          .container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr;
          }
        }
        .card .content {
          padding: 0.938rem 0.625rem;
        }
        .card .content h3 {
          text-transform: capitalize;
          font-size: clamp(1.5rem, 1.3909rem + 0.4364vw, 1.8rem);
        }
        .price-section {
          margin: 0.625rem 0 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.625rem;
          flex-wrap: wrap;
        }
        .original-price {
          color: #999;
          text-decoration: line-through;
          font-size: 0.9rem;
        }
        .discounted-price {
          color: #111;
          font-weight: 700;
          font-size: 1.25rem;
        }
        .discount-badge {
          background: #ff4444;
          color: #fff;
          font-weight: 700;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 0.188rem;
          text-transform: uppercase;
        }
        /* === CARD STRUCTURE === */
        .card-inner {
          position: relative;
          width: 100%;
          height: 18.75rem;
          border-radius: 1.25rem;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .card:nth-child(1) { animation-delay: 0.1s; }
        .card:nth-child(2) { animation-delay: 0.2s; }
        .card:nth-child(3) { animation-delay: 0.3s; }
        .card:nth-child(4) { animation-delay: 0.4s; }
        .card:nth-child(5) { animation-delay: 0.5s; }
        .card:nth-child(6) { animation-delay: 0.6s; }
        .card:nth-child(7) { animation-delay: 0.7s; }
        .card:nth-child(8) { animation-delay: 0.8s; }
        .card:nth-child(9) { animation-delay: 0.9s; }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .card:hover {
          transform: translateY(-8px);
        }
        .card-inner .box {
          width: 100%;
          height: 100%;
          background: #fff;
          border-radius: 1.25rem;
          overflow: hidden;
          position: relative;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .card:hover .box {
          transform: translateY(-4px);
          
        }
        .imgBox {
          position: absolute;
          inset: 0;
        }
        .imgBox img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .card:hover .imgBox img {
          transform: scale(1.08);
        }
        /* === ARROW CIRCLE === */
        .icon {
          position: absolute;
          bottom: -0.375rem;
          right: -0.375rem;
          width: 7rem;
          height: 7rem;
          border-top-left-radius: 50%;
          background: var(--clr);
          z-index: 10;
          transition: all 0.3s ease-in-out;
        }
        .icon::before {
          content: "";
          position: absolute;
          bottom: 0.375rem;
          left: -1.25rem;
          width: 1.25rem;
          height: 1.25rem;
          border-bottom-right-radius: 1.25rem;
          box-shadow: 0.313rem 0.313rem 0 0.313rem #fff;
        }
        .icon::after {
          content: "";
          position: absolute;
          top: -1.25rem;
          right: 0.375rem;
          width: 1.25rem;
          height: 1.25rem;
          border-bottom-right-radius: 1.25rem;
          box-shadow: 0.313rem 0.313rem 0 0.313rem var(--clr);
        }
        .iconBox {
          position: absolute;
          inset: 0.75rem;
          background: #282828;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease-in-out;
        }
        .iconBox span {
          color: #fff;
          font-size: 3rem;
          transition: all 0.3s ease;
          transform: rotate(-45deg) translateY(0px);
        }
        .icon:hover {
          transform: translateY(-5px);
        }
        .iconBox:hover {
          transform: scale(1.12) rotate(7deg);
          background: #FDE8B1;
        }
        .iconBox:hover span {
          transform: rotate(0deg) translateY(-3px) translateX(2px);
        }
        /* === BUTTON === */
        .buy-button {
          width: 100%;
          background: #FDE8B1;
          color: #282828;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .buy-button:hover {
          background: #FAD77D;
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(253, 232, 177, 0.4);
        }
        .buy-button:active {
          transform: translateY(0);
          box-shadow: none;
        }
      `}</style>
      <section className={lato.variable}>
        <h2>Semi Precious Gems Collection</h2>
        <div className="container">
          {SemiStone.map((gem, i) => (
            <div key={i} className="card">
              <div
                className="card-inner"
                style={{ "--clr": gem.iconBg } as React.CSSProperties}
              >
                <div className="box">
                  <div className="imgBox">
                    <Image
                      src={gem.imgSrc || "/Gems/center.webp"}
                      alt={gem.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={90}
                      priority={i < 3}
                      loading={i < 3 ? "eager" : "lazy"}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmNWY1ZjUiLz48L3N2Zz4="
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== "/Gems/center.webp") {
                          target.src = "/Gems/center.webp";
                        }
                      }}
                    />
                  </div>
                  <div className="icon">
                    <a
                      href="#"
                      className="iconBox"
                      aria-label={`View ${gem.name}`}
                      onClick={(event) => {
                        event.preventDefault();
                        router.push("/login");
                      }}
                    >
                      <span>
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>{gem.name}</h3>
                <div className="price-section">
                  <span className="original-price">
                    ₹{gem.price.toLocaleString("en-IN")}
                  </span>
                  <span className="discounted-price">
                    ₹{calculateDiscountedPrice(gem.price, gem.discount).toLocaleString("en-IN")}
                  </span>
                  <span className="discount-badge">{gem.discount}% OFF</span>
                </div>
                <button
                  className="buy-button"
                  onClick={() => router.push("/login")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}