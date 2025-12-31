export const SITE_CONFIG = {
  name: "Vedic Astrology - Jyotish",
  url: "https://vedic-astrology.com",
  description:
    "Expert Vedic astrology services including Kundli analysis, horoscope readings, matchmaking, and spiritual guidance rooted in ancient wisdom.",
  email: "info@vedic-astrology.com",
  phone: "+1 (555) 123-4567",
  social: {
    facebook: "https://facebook.com/vedicastrology",
    instagram: "https://instagram.com/vedicastrology",
    twitter: "https://twitter.com/vedicastrology",
  },
} as const

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/horoscope", label: "Horoscope" },
  { href: "/services", label: "Services" },
  { href: "/learn", label: "Learn" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const

export const ZODIAC_SIGNS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
] as const
