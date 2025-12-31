import type { Metadata } from "next"
import { generateSEO } from "@/lib/seo-utils"
import HomeHero from "@/components/Home/Homehero"
import LaserDashboard from "@/components/Home/LaserDashboard"
import { Bento } from "@/components/Home/Bento"
import { Complex } from "@/components/Home/complex"
import Potential from "@/components/Home/Potential"
import Download from "@/components/Home/download"
import Testimonials from "@/components/Home/Testimonials"
import AstrologyTypes from "@/components/Home/AstrologyTypes"
import Shop from "@/components/Home/Shop"
export const metadata: Metadata = generateSEO({
  title: "Vedic Astrology | Ancient Wisdom for Modern Life | Jyotish",
  description:
    "Discover the profound insights of Vedic Astrology (Jyotish). Expert Kundli analysis, horoscope readings, matchmaking, career guidance, and spiritual remedies rooted in 5,000 years of ancient wisdom.",
  path: "/",
  keywords: [
    "vedic astrology",
    "jyotish",
    "kundli analysis",
    "horoscope readings",
    "matchmaking",
    "spiritual guidance",
  ],
})

export default function HomePage() {
  return (
    <main>
    <HomeHero />
    <Complex />
    <LaserDashboard />
    <Bento />
    <Potential />
    <Download />
    <AstrologyTypes />
    <Shop />
    <Testimonials />
    </main>
  )
}
