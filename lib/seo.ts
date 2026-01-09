export function generateJSONLD(type: "website" | "service" | "faq" | "person", data: any) {
  const baseURL = "https://jyotish.com" // Update with actual domain

  if (type === "website") {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Jyotish - Vedic Astrology",
      description:
        "Authentic Vedic astrology services including Kundli analysis, horoscope readings, and spiritual guidance.",
      url: baseURL,
    }
  }

  if (type === "service") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Astrology Service",
      provider: {
        "@type": "Organization",
        name: "Jyotish",
      },
      areaServed: "Worldwide",
      description: "Professional Vedic astrology consultations and birth chart analysis",
    }
  }

  if (type === "faq") {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.questions.map((q: any) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      })),
    }
  }

  return null
}
