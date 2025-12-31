import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vedic Astrology - Ancient Wisdom for Modern Life",
    short_name: "Vedic Astrology",
    description:
      "Expert Vedic astrology services including Kundli analysis, horoscope readings, matchmaking, and spiritual guidance rooted in ancient wisdom.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F1E8",
    theme_color: "#D4A574",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
