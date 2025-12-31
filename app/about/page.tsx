import type { Metadata } from "next"
import Image from "next/image"
import { generateSEO, generateFAQSchema } from "@/lib/seo-utils"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = generateSEO({
  title: "About Vedic Astrology | Jyotish Philosophy & Principles",
  description:
    "Learn about the ancient science of Vedic Astrology (Jyotish). Discover how it differs from Western astrology, its connection to karma, and the profound wisdom of the Vedas.",
  path: "/about",
  keywords: ["vedic astrology", "jyotish", "karma", "sidereal zodiac", "moon sign", "dashas"],
})

const faqs = [
  {
    question: "What is the difference between Vedic and Western astrology?",
    answer:
      "Vedic astrology uses the sidereal zodiac which accounts for the precession of equinoxes, while Western astrology uses the tropical zodiac. Vedic astrology also places primary importance on the Moon sign rather than the Sun sign.",
  },
  {
    question: "How does karma relate to Vedic astrology?",
    answer:
      "Vedic astrology views your birth chart as a karmic map that reveals your soul's journey, including past-life influences, present life purpose, and future possibilities based on accumulated karma.",
  },
  {
    question: "What are Dashas in Vedic astrology?",
    answer:
      "Dashas are planetary periods that each person experiences throughout their life. These periods activate specific karmas and life themes, making certain times favorable for specific endeavors.",
  },
]

export default function AboutPage() {
  return (
    <>
      <StructuredData data={generateFAQSchema(faqs)} />
      <main>
        <section className="bg-gradient-to-b from-secondary/30 to-background py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl md:text-6xl text-balance">
              The Ancient Science of <span className="text-accent">Jyotish</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
              Vedic Astrology is the timeless wisdom that connects celestial movements with human destiny
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">What is Jyotish?</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Jyotish, meaning "Science of Light," is the ancient Vedic system of astrology that originated in India
                  over 5,000 years ago. It is one of the six Vedangas (limbs of the Vedas) and is considered a sacred
                  science.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Unlike modern Western astrology, Vedic astrology uses the sidereal zodiac, which is aligned with the
                  actual positions of the constellations in the sky. This makes Vedic predictions more precise and
                  aligned with cosmic reality.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Jyotish views the birth chart (Kundli) as a karmic map that reveals your soul's journey, including
                  past-life influences, present life purpose, and future possibilities.
                </p>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/vedic-astrology-ancient-manuscript-sanskrit-symbol.jpg"
                  alt="Ancient Vedic astrology texts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Key Differences from Western Astrology
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">Zodiac System</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Vedic astrology uses the <strong>sidereal zodiac</strong>, which accounts for the precession of
                  equinoxes. This means your Vedic sun sign may differ from your Western sign by about 23 degrees.
                </p>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">Moon Sign Focus</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  While Western astrology emphasizes the Sun sign, Vedic astrology places primary importance on the{" "}
                  <strong>Moon sign</strong> (Rashi), which represents the mind and emotions.
                </p>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">Karma & Destiny</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Jyotish is deeply connected to the concept of <strong>karma</strong>. Your chart reflects your karmic
                  debts, lessons, and the trajectory of your soul&apos;s evolution across lifetimes.
                </p>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">Predictive Systems</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Vedic astrology uses sophisticated timing systems like <strong>Dashas</strong> (planetary periods) and{" "}
                  <strong>Transits</strong> to make precise predictions about life events.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl font-bold text-foreground sm:text-4xl">
              The Philosophy of Vedic Astrology
            </h2>

            <div className="mt-12 space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-accent">1. Karma and Reincarnation</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Vedic astrology is built on the understanding that the soul reincarnates across many lifetimes,
                  carrying forward karmic imprints. Your birth chart is a reflection of your accumulated karma—both
                  positive and challenging—that shapes your current life experiences.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-accent">2. Cosmic Interconnection</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The movements of planets are not random; they reflect divine order and cosmic intelligence. As the
                  ancient saying goes: "As above, so below." The celestial realm mirrors and influences the earthly
                  realm, and understanding this connection gives us profound insight into our lives.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-accent">3. Free Will Within Destiny</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  While your chart reveals karmic patterns and likely life events, Vedic astrology also honors free
                  will. Through awareness, spiritual practices, and remedies, you can work with planetary energies to
                  transform challenges and maximize opportunities.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-accent">4. Spiritual Growth</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The ultimate purpose of Jyotish is not just prediction, but spiritual evolution. By understanding your
                  chart, you gain clarity on your dharma (life purpose) and can align your actions with your highest
                  potential, leading to liberation (moksha).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Time Cycles in Vedic Astrology
            </h2>

            <div className="mt-12 space-y-6">
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">Yugas: The Great Ages</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  According to Vedic cosmology, time moves in vast cycles called Yugas. We are currently in Kali Yuga,
                  an age of rapid change and spiritual challenges, which influences the collective consciousness and
                  individual destinies.
                </p>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Dashas: Personal Planetary Periods
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Each person experiences different planetary periods (Dashas) throughout their life. These periods
                  activate specific karmas and life themes, making certain times favorable for specific endeavors.
                </p>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">Transits: Daily Cosmic Weather</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The ongoing movement of planets through the zodiac creates daily, monthly, and yearly influences.
                  Understanding transits helps you navigate opportunities and challenges with greater awareness and
                  timing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
