import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, GraduationCap, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Learn Vedic Astrology | Beginner's Guide to Jyotish",
  description:
    "Start your journey into Vedic astrology with our comprehensive beginner's guide. Learn about planets, houses, signs, and the fundamentals of Jyotish.",
  openGraph: {
    title: "Learn Vedic Astrology | Beginner's Guide",
    description: "Comprehensive guide to understanding Vedic astrology from the ground up.",
  },
}

export default function LearnPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-secondary/30 to-background py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2">
            <GraduationCap className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Educational Content</span>
          </div>

          <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl md:text-6xl text-balance">
            Learn <span className="text-accent">Vedic Astrology</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
            Your beginner-friendly guide to understanding the ancient science of Jyotish
          </p>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Your Learning Journey
          </h2>
          <p className="mt-4 text-center text-muted-foreground">
            Follow this structured path to master the fundamentals of Vedic astrology
          </p>

          <div className="mt-12 space-y-6">
            <Card className="border-l-4 border-l-accent bg-card">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <span className="font-serif text-lg font-semibold text-accent">1</span>
                  </div>
                  <div>
                    <CardTitle className="font-serif">Foundations</CardTitle>
                    <CardDescription className="mt-2 leading-relaxed">
                      Start with the core concepts: understand what Vedic astrology is, its history, and how it differs
                      from Western astrology
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-accent bg-card">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <span className="font-serif text-lg font-semibold text-accent">2</span>
                  </div>
                  <div>
                    <CardTitle className="font-serif">The 12 Zodiac Signs</CardTitle>
                    <CardDescription className="mt-2 leading-relaxed">
                      Learn about the 12 Rashis, their elements, ruling planets, and characteristic energies
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-accent bg-card">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <span className="font-serif text-lg font-semibold text-accent">3</span>
                  </div>
                  <div>
                    <CardTitle className="font-serif">The 9 Planets (Grahas)</CardTitle>
                    <CardDescription className="mt-2 leading-relaxed">
                      Study the Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Rahu, and Ketu and their
                      significations
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-accent bg-card">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <span className="font-serif text-lg font-semibold text-accent">4</span>
                  </div>
                  <div>
                    <CardTitle className="font-serif">The 12 Houses (Bhavas)</CardTitle>
                    <CardDescription className="mt-2 leading-relaxed">
                      Understand the areas of life represented by each house and their importance in chart
                      interpretation
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-accent bg-card">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <span className="font-serif text-lg font-semibold text-accent">5</span>
                  </div>
                  <div>
                    <CardTitle className="font-serif">Reading a Birth Chart</CardTitle>
                    <CardDescription className="mt-2 leading-relaxed">
                      Learn how to synthesize planets, signs, and houses to interpret a Kundli
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-accent bg-card">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <span className="font-serif text-lg font-semibold text-accent">6</span>
                  </div>
                  <div>
                    <CardTitle className="font-serif">Dashas & Transits</CardTitle>
                    <CardDescription className="mt-2 leading-relaxed">
                      Master the timing techniques that make Vedic astrology so predictively accurate
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="bg-secondary/30 py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground sm:text-4xl">Essential Concepts</h2>

          <div className="mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="planets" className="rounded-lg border border-border bg-card px-6">
                <AccordionTrigger className="font-serif text-lg font-semibold hover:no-underline">
                  The 9 Planets (Navagrahas)
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">In Vedic astrology, there are 9 celestial bodies called Grahas:</p>
                  <ul className="space-y-2">
                    <li>
                      <strong className="text-foreground">Sun (Surya):</strong> Soul, vitality, father, authority,
                      government
                    </li>
                    <li>
                      <strong className="text-foreground">Moon (Chandra):</strong> Mind, emotions, mother, nurturing,
                      intuition
                    </li>
                    <li>
                      <strong className="text-foreground">Mars (Mangal):</strong> Energy, courage, siblings, property,
                      conflicts
                    </li>
                    <li>
                      <strong className="text-foreground">Mercury (Budha):</strong> Intellect, communication, business,
                      learning
                    </li>
                    <li>
                      <strong className="text-foreground">Jupiter (Guru):</strong> Wisdom, expansion, children,
                      spirituality, teachers
                    </li>
                    <li>
                      <strong className="text-foreground">Venus (Shukra):</strong> Love, beauty, relationships, luxury,
                      arts
                    </li>
                    <li>
                      <strong className="text-foreground">Saturn (Shani):</strong> Discipline, karma, delays, hard work,
                      longevity
                    </li>
                    <li>
                      <strong className="text-foreground">Rahu (North Node):</strong> Obsession, foreign lands, sudden
                      events, materialism
                    </li>
                    <li>
                      <strong className="text-foreground">Ketu (South Node):</strong> Spirituality, detachment, past
                      life karma, moksha
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="houses" className="rounded-lg border border-border bg-card px-6">
                <AccordionTrigger className="font-serif text-lg font-semibold hover:no-underline">
                  The 12 Houses (Bhavas)
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">Each house represents different life areas:</p>
                  <ul className="space-y-2">
                    <li>
                      <strong className="text-foreground">1st House:</strong> Self, personality, physical body, overall
                      life direction
                    </li>
                    <li>
                      <strong className="text-foreground">2nd House:</strong> Wealth, family, speech, food, early
                      childhood
                    </li>
                    <li>
                      <strong className="text-foreground">3rd House:</strong> Siblings, courage, short travels,
                      communication skills
                    </li>
                    <li>
                      <strong className="text-foreground">4th House:</strong> Mother, home, property, inner peace,
                      vehicles
                    </li>
                    <li>
                      <strong className="text-foreground">5th House:</strong> Children, creativity, intelligence,
                      romance, education
                    </li>
                    <li>
                      <strong className="text-foreground">6th House:</strong> Health, enemies, debts, service, daily
                      routine
                    </li>
                    <li>
                      <strong className="text-foreground">7th House:</strong> Marriage, partnerships, business, public
                      image
                    </li>
                    <li>
                      <strong className="text-foreground">8th House:</strong> Transformation, occult, inheritance,
                      longevity
                    </li>
                    <li>
                      <strong className="text-foreground">9th House:</strong> Fortune, higher learning, father,
                      spirituality, long journeys
                    </li>
                    <li>
                      <strong className="text-foreground">10th House:</strong> Career, reputation, social status,
                      profession
                    </li>
                    <li>
                      <strong className="text-foreground">11th House:</strong> Gains, friends, aspirations, elder
                      siblings
                    </li>
                    <li>
                      <strong className="text-foreground">12th House:</strong> Losses, expenses, foreign lands,
                      spirituality, liberation
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ascendant" className="rounded-lg border border-border bg-card px-6">
                <AccordionTrigger className="font-serif text-lg font-semibold hover:no-underline">
                  Understanding the Ascendant (Lagna)
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p>
                    The Ascendant (Lagna) is the zodiac sign rising on the eastern horizon at the time of your birth.
                    It's considered the most important point in your chart as it determines the placement of all 12
                    houses.
                  </p>
                  <p className="mt-4">
                    Your Ascendant represents your physical body, personality, life approach, and how others perceive
                    you. It's the lens through which you experience life and the mask you wear in the world.
                  </p>
                  <p className="mt-4">
                    The Ascendant changes approximately every 2 hours, which is why an accurate birth time is crucial
                    for Vedic astrology.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dashas" className="rounded-lg border border-border bg-card px-6">
                <AccordionTrigger className="font-serif text-lg font-semibold hover:no-underline">
                  Dasha System (Planetary Periods)
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p>
                    The Dasha system is one of Vedic astrology's most powerful predictive tools. It divides your life
                    into planetary periods, with each planet ruling over specific time spans.
                  </p>
                  <p className="mt-4">
                    The most commonly used system is Vimshottari Dasha, a 120-year cycle where each of the 9 planets
                    rules for a set number of years. During a planet's Dasha, the themes and areas that planet
                    represents become prominent in your life.
                  </p>
                  <p className="mt-4">
                    For example, during Jupiter Dasha (16 years), you may experience growth, learning, spiritual
                    development, and blessings. During Saturn Dasha (19 years), you may face discipline, hard work, and
                    karmic lessons.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="transits" className="rounded-lg border border-border bg-card px-6">
                <AccordionTrigger className="font-serif text-lg font-semibold hover:no-underline">
                  Transits (Gochar)
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p>
                    Transits refer to the current positions of planets in the sky and how they interact with your birth
                    chart. Think of your birth chart as a frozen moment in time, while transits are the ongoing cosmic
                    weather that affects you daily.
                  </p>
                  <p className="mt-4">
                    Major transits from slow-moving planets like Jupiter (1 year per sign) and Saturn (2.5 years per
                    sign) create significant life shifts. Rahu-Ketu transits (18 months per sign) often bring unexpected
                    events and karmic encounters.
                  </p>
                  <p className="mt-4">
                    The combination of Dashas and transits provides incredibly accurate timing for life events in Vedic
                    astrology.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground sm:text-4xl">Continue Learning</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="border-border/50 bg-card transition-shadow hover:shadow-lg">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-accent" />
                <CardTitle className="mt-4 font-serif">Read the Blog</CardTitle>
                <CardDescription className="leading-relaxed">
                  Explore in-depth articles on Vedic astrology topics, planetary transits, and spiritual insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/blog" className="text-sm font-medium text-accent hover:underline">
                  Visit Blog →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card transition-shadow hover:shadow-lg">
              <CardHeader>
                <Sparkles className="h-10 w-10 text-accent" />
                <CardTitle className="mt-4 font-serif">Explore Your Chart</CardTitle>
                <CardDescription className="leading-relaxed">
                  Get a personalized Kundli analysis to see these concepts in action within your own birth chart
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services#kundli" className="text-sm font-medium text-accent hover:underline">
                  Get Analysis →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card transition-shadow hover:shadow-lg">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-accent" />
                <CardTitle className="mt-4 font-serif">Book a Consultation</CardTitle>
                <CardDescription className="leading-relaxed">
                  Learn directly from expert astrologers who can answer your questions and guide your studies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/contact" className="text-sm font-medium text-accent hover:underline">
                  Contact Us →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
