"use client";

import Image from "next/image";

const topics = [
  {
    title: "What if you do not know your exact birth time?",
    description:
      "Not knowing your exact birth time is a common and valid concern. Birth Time Rectification (BTR) is a structured astrological process used to determine the most accurate time of birth by correlating known life events with planetary periods, transits, and chart activations. This process requires detailed life data and is best conducted through direct interaction with a trained and experienced astrologer.",
    image: "/Service/Rectification/Confusion.png",
  },
  {
    title: "Why is an incorrect birth time a serious issue?",
    description:
      "An incorrect birth time leads to an incorrect Lagna (Ascendant), which affects the entire horoscope. As a result, interpretations related to career, marriage, health, finances, and timing of events may become unreliable. Divisional charts (Vargas) are especially sensitive—differences of even a few minutes can significantly alter predictions and remedial guidance.",
    image: "/Service/Rectification/Incorrect.png",
  },
  {
    title: "What information is required for Birth Time Rectification?",
    description:
      "Birth Time Rectification relies on verifiable life events. An astrologer typically requires dates and periods related to major milestones such as marriage, career changes, childbirth, health events, surgeries, accidents, relocations, educational achievements, and significant emotional or financial transitions. These events allow precise correlation with planetary dashas and transits.",
    image: "/awareness/Tantra.webp",
  },
  {
    title: "How is Birth Time Rectification performed?",
    description:
      "Birth Time Rectification follows a multi-step analytical process. The astrologer begins with a provisional chart based on the available birth time range. This chart is then refined by matching known life events with planetary dashas, transits, and house activations. Advanced classical techniques—such as Bhrigu Chakra Paddhati, Chandra Navamsha, Devakeralam, Padma Chakra, Surya Paddhati, House Awakening, Nadi principles, and karmic evaluation methods—are applied to arrive at the most accurate birth time. Final verification ensures consistency across all divisional charts.",
    image: "/Service/Rectification/Process.png",
  },
];

export default function Question() {
  return (
<section className="relative py-28 px-6 overflow-hidden">
  


      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Birth Time{" "}
            <span className="font-serif font-bold text-amber-600">
              Rectification
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-slate-600">
            A disciplined astrological process used to determine the most
            accurate time of birth—essential for reliable charts, precise
            predictions, and meaningful guidance.
          </p>
        </div>

        {/* Topics */}
        <div className="space-y-28">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`group flex flex-col md:flex-row items-center gap-16 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className="
                  relative
                  w-full md:w-[46%]
                  h-[240px] md:h-[300px]
                  rounded-3xl
                  overflow-hidden
                  bg-white/70
                  shadow-[0_24px_80px_rgba(15,23,42,0.12)]
                  transition-transform duration-500 ease-out
                  group-hover:-translate-y-[2px]
                "
              >
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Text */}
              <div className="md:w-[54%]">
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
                  {topic.title}
                </h3>

                <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
