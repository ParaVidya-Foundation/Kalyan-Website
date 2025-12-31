import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Vedic Horoscope | 12 Zodiac Signs | Jyotish",
  description:
    "Explore the 12 Vedic zodiac signs (Rashis) and their unique characteristics. Discover your Vedic sun sign, ruling planet, element, and personality traits.",
  keywords: [
    "vedic zodiac signs",
    "rashis",
    "vedic horoscope",
    "sidereal zodiac",
    "vedic sun sign",
    "moon sign",
    "jyotish signs",
  ],
  openGraph: {
    title: "Vedic Horoscope | 12 Zodiac Signs",
    description: "Explore the 12 Vedic zodiac signs and their unique characteristics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Horoscope | 12 Zodiac Signs",
    description: "Explore the 12 Vedic zodiac signs and their unique characteristics.",
  },
}

const zodiacSigns = [
  {
    name: "Aries",
    sanskrit: "Mesha",
    element: "Fire",
    ruling: "Mars",
    dates: "Apr 13 - May 14",
    traits: "Courageous, energetic, pioneering spirit, natural leader",
    description:
      "Aries in Vedic astrology represents bold action and initiative. Those born under Mesha are natural warriors, driven by passion and the desire to forge new paths.",
  },
  {
    name: "Taurus",
    sanskrit: "Vrishabha",
    element: "Earth",
    ruling: "Venus",
    dates: "May 15 - Jun 14",
    traits: "Stable, sensual, patient, appreciates beauty and comfort",
    description:
      "Vrishabha natives are grounded and dependable. They have a strong connection to material pleasures and natural beauty, seeking security and stability.",
  },
  {
    name: "Gemini",
    sanskrit: "Mithuna",
    element: "Air",
    ruling: "Mercury",
    dates: "Jun 15 - Jul 14",
    traits: "Communicative, versatile, curious, quick-witted",
    description:
      "Mithuna represents duality and communication. These individuals are intellectually agile, socially adept, and eternally curious about the world.",
  },
  {
    name: "Cancer",
    sanskrit: "Karka",
    element: "Water",
    ruling: "Moon",
    dates: "Jul 15 - Aug 14",
    traits: "Nurturing, intuitive, emotional, protective",
    description:
      "Karka natives are deeply connected to emotions and family. They possess strong intuition and a caring nature that extends to all they love.",
  },
  {
    name: "Leo",
    sanskrit: "Simha",
    element: "Fire",
    ruling: "Sun",
    dates: "Aug 15 - Sep 15",
    traits: "Confident, charismatic, generous, natural performer",
    description:
      "Simha embodies royal dignity and creative expression. These individuals shine brightly, inspiring others with their warmth and natural leadership.",
  },
  {
    name: "Virgo",
    sanskrit: "Kanya",
    element: "Earth",
    ruling: "Mercury",
    dates: "Sep 16 - Oct 15",
    traits: "Analytical, practical, service-oriented, detail-focused",
    description:
      "Kanya represents purity and service. These natives excel at organization, healing, and bringing order to chaos through meticulous attention.",
  },
  {
    name: "Libra",
    sanskrit: "Tula",
    element: "Air",
    ruling: "Venus",
    dates: "Oct 16 - Nov 14",
    traits: "Balanced, diplomatic, artistic, relationship-focused",
    description:
      "Tula seeks harmony and justice. These individuals are natural diplomats who appreciate beauty, fairness, and meaningful partnerships.",
  },
  {
    name: "Scorpio",
    sanskrit: "Vrishchika",
    element: "Water",
    ruling: "Mars",
    dates: "Nov 15 - Dec 14",
    traits: "Intense, transformative, mysterious, deeply passionate",
    description:
      "Vrishchika represents transformation and depth. These natives possess powerful intuition and the ability to navigate life's mysteries and transitions.",
  },
  {
    name: "Sagittarius",
    sanskrit: "Dhanu",
    element: "Fire",
    ruling: "Jupiter",
    dates: "Dec 15 - Jan 13",
    traits: "Philosophical, adventurous, optimistic, truth-seeking",
    description:
      "Dhanu embodies wisdom and expansion. These individuals are eternal students and teachers, driven by the quest for higher knowledge and meaning.",
  },
  {
    name: "Capricorn",
    sanskrit: "Makara",
    element: "Earth",
    ruling: "Saturn",
    dates: "Jan 14 - Feb 11",
    traits: "Disciplined, ambitious, responsible, patient",
    description:
      "Makara represents mastery through dedication. These natives understand that lasting success comes through sustained effort and integrity.",
  },
  {
    name: "Aquarius",
    sanskrit: "Kumbha",
    element: "Air",
    ruling: "Saturn",
    dates: "Feb 12 - Mar 12",
    traits: "Innovative, humanitarian, independent, forward-thinking",
    description:
      "Kumbha embodies progressive ideals and collective consciousness. These individuals are visionaries who seek to improve society through innovation.",
  },
  {
    name: "Pisces",
    sanskrit: "Meena",
    element: "Water",
    ruling: "Jupiter",
    dates: "Mar 13 - Apr 12",
    traits: "Compassionate, spiritual, imaginative, empathetic",
    description:
      "Meena represents spiritual dissolution and universal love. These natives are deeply intuitive, creative, and connected to the mystical dimensions of life.",
  },
]

export default function HoroscopePage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-secondary/30 to-background py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl md:text-6xl text-balance">
            The 12 Vedic <span className="text-accent">Zodiac Signs</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
            Discover the unique characteristics and cosmic wisdom of each Rashi
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 rounded-xl bg-secondary/40 p-6 md:p-8">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Understanding Vedic Zodiac Signs</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              In Vedic astrology, zodiac signs (Rashis) are based on the sidereal zodiac, which aligns with the actual
              constellations. This differs from Western astrology by approximately 23 degrees. Each sign carries unique
              energies, elements, and karmic lessons that shape personality and life experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {zodiacSigns.map((sign) => (
              <Card key={sign.name} className="border-border/50 bg-card transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-serif text-2xl">{sign.name}</CardTitle>
                      <CardDescription className="mt-1 text-accent">{sign.sanskrit}</CardDescription>
                    </div>
                    <div className="text-right text-sm">
                      <div className="font-medium text-muted-foreground">{sign.dates}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {sign.element}
                    </span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {sign.ruling}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Key Traits:</strong> {sign.traits}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{sign.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Want to Know Your Complete Birth Chart?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Your sun sign is just the beginning. Discover your Moon sign, Ascendant, planetary positions, and karmic
            patterns with a full Kundli analysis.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Get Your Kundli Analysis
          </Link>
        </div>
      </section>
    </main>
  )
}
