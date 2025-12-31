import type { Metadata } from "next"
import { Mail, Clock, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Book Vedic Astrology Consultation",
  description:
    "Schedule your personalized Vedic astrology consultation. Connect with expert Jyotish practitioners for birth chart analysis, guidance, and spiritual insights.",
  openGraph: {
    title: "Contact Us | Book Consultation",
    description: "Schedule your personalized Vedic astrology consultation with expert practitioners.",
  },
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-secondary/30 to-background py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl md:text-6xl text-balance">
            Begin Your <span className="text-accent">Journey</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
            Connect with our expert astrologers for personalized guidance and insights
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We're here to help you unlock the wisdom of your birth chart and guide you on your spiritual journey.
                Reach out to schedule a consultation or ask any questions about our services.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email Us</h3>
                      <p className="mt-1 text-muted-foreground">contact@jyotish.com</p>
                      <p className="mt-1 text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Consultation Hours</h3>
                      <p className="mt-1 text-muted-foreground">Monday - Saturday</p>
                      <p className="mt-1 text-muted-foreground">9:00 AM - 7:00 PM (IST)</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="mt-1 text-muted-foreground">Virtual consultations worldwide</p>
                      <p className="mt-1 text-sm text-muted-foreground">Online sessions via video call</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">What to Expect</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our consultations are comprehensive, personalized, and rooted in authentic Vedic tradition.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-xl border border-border/50 bg-card p-6">
                  <h3 className="font-serif text-xl text-foreground">Initial Consultation (60 mins)</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Complete birth chart analysis covering personality, life purpose, career, relationships, and current
                    planetary periods.
                  </p>
                </div>

                <div className="rounded-xl border border-border/50 bg-card p-6">
                  <h3 className="font-serif text-xl text-foreground">Specialized Reading (45 mins)</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Focused consultation on specific areas like career guidance, matchmaking, or timing for major
                    decisions.
                  </p>
                </div>

                <div className="rounded-xl border border-border/50 bg-card p-6">
                  <h3 className="font-serif text-xl text-foreground">Follow-up Session (30 mins)</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Review progress, discuss remedies, and address new questions or life developments.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-secondary/40 p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">What You'll Need</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent">•</span>
                    <span>Accurate birth date</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">•</span>
                    <span>Birth time (as precise as possible)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">•</span>
                    <span>Birth location (city/town)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">•</span>
                    <span>Specific questions or areas of focus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30 py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Ready to Schedule Your Consultation?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Send us an email at{" "}
            <a href="mailto:contact@jyotish.com" className="font-medium text-accent hover:underline">
              contact@jyotish.com
            </a>{" "}
            with your birth details and preferred consultation type. We'll get back to you within 24 hours to confirm
            your appointment.
          </p>
        </div>
      </section>
    </main>
  )
}
