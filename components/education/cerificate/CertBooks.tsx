"use client";

import Image from "next/image";

type Book = {
  id: number;
  image: string;
  title: string;
};

const books: Book[] = [
  { id: 1, image: "/books/Ancient-Science-of-Vastu.webp", title: "Ancient Science of Vastu" },
  { id: 2, image: "/books/Elements-Of-Vedic-Astrology.webp", title: "Elements of Vedic Astrology" },
  { id: 3, image: "/books/Encyclopedia-Vedic-Astrology-Remedies.webp", title: "Encyclopedia of Vedic Astrology Remedies" },
  { id: 4, image: "/books/Numerology-Complete-Guide.webp", title: "Numerology: A Complete Guide" },
  { id: 5, image: "/books/Past-Life-and-Pending-Karmas.webp", title: "Past Life and Pending Karmas" },
  { id: 6, image: "/books/Practical-Vedic-Astrology.webp", title: "Practical Vedic Astrology" },
  { id: 7, image: "/books/Complete-Book-of-Numerology.webp", title: "The Complete Book of Numerology" },
  { id: 8, image: "/books/Unfolding-the-Veil-of-Mystery-Vaastu.webp", title: "Unfolding the Veil of Mystery (Vaastu)" },
  { id: 9, image: "/books/Vedic-Astrology-Fundamentals-of-Jyotish.webp", title: "Vedic Astrology: Fundamentals of Jyotish" },
  { id: 10, image: "/books/Vedic-Astrology-Textbook-Narsimha-Rao.webp", title: "Vedic Astrology Textbook" },
];

export default function CertBooks() {
  return (
    <section className="relative overflow-hidden">
      {/* ---------- HEADER (UNCHANGED) ---------- */}
      <div className="relative mx-auto mt-14 max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm shadow-sm">
          <a
            href="https://paravidyafoundation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <Image
              src="/Logo/ParavidyaFoundation.png"
              alt="ParaVidya Foundation"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Backed by ParaVidya Foundation</span>
          </a>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Live Q & A Session with
        </h1>

        <h2 className="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Top Astrology Books
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          Chat with authoritative texts and explore classical astrological wisdom.
        </p>
      </div>

      {/* ---------- INFINITE BOOK SLIDER ---------- */}
      <div className="relative mt-16 overflow-hidden">
        <div className="marquee">
          <div className="marquee-track">
            {[...books, ...books].map((book, idx) => (
              <div
                key={`${book.id}-${idx}`}
                className="marquee-item"
                aria-hidden={idx >= books.length}
              >
                <div className="flex flex-col items-center">
                  {/* Book */}
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={260}
                    height={360}
                    className="
                      select-none
                     
                    "
                  />

                  {/* Title */}
                  <h3
                    className="
                      mt-5
                      max-w-[260px]
                      text-center
                      font-serif
                      text-sm
                      md:text-base
                      leading-snug
                      text-gray-800
                    "
                  >
                    {book.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- STYLES ---------- */}
      <style dangerouslySetInnerHTML={{ __html: `
        .marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          gap: 4rem;
          width: max-content;
          animation: marquee-left 70s linear infinite;
          will-change: transform;
        }

        .marquee-item {
          flex-shrink: 0;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        @keyframes marquee-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}} />
    </section>
  );
}
