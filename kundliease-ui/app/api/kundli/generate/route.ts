import { type NextRequest, NextResponse } from "next/server"
import type { KundliFormData, KundliData } from "@/lib/api"

export async function POST(request: NextRequest) {
  try {
    const formData: KundliFormData = await request.json()

    const mockKundli: KundliData = {
      id: `kundli_${Date.now()}`,
      personalInfo: formData,
      charts: {
        birthChart: [
          [7, 0, 0],
          [0, 1, 8],
          [6, 5, 4],
        ],
        navamsa: [
          [3, 9, 2],
          [4, 1, 12],
          [5, 6, 11],
        ],
        dashamsa: [
          [2, 3, 1],
          [11, 1, 5],
          [10, 9, 6],
        ],
      },
      planetaryPositions: [
        { planet: "Sun", sign: "Aries", degree: "15°30'", house: 1 },
        { planet: "Moon", sign: "Taurus", degree: "22°45'", house: 2 },
        { planet: "Mars", sign: "Gemini", degree: "8°12'", house: 3 },
        { planet: "Mercury", sign: "Aries", degree: "28°55'", house: 1 },
        { planet: "Jupiter", sign: "Sagittarius", degree: "12°30'", house: 9 },
        { planet: "Venus", sign: "Pisces", degree: "5°18'", house: 12 },
        { planet: "Saturn", sign: "Capricorn", degree: "18°42'", house: 10 },
        { planet: "Rahu", sign: "Cancer", degree: "25°15'", house: 4 },
        { planet: "Ketu", sign: "Capricorn", degree: "25°15'", house: 10 },
      ],
      predictions: [
        {
          category: "Career & Finance",
          description:
            "Strong leadership potential with Jupiter in 9th house bringing wisdom and guidance opportunities. Financial growth through education, publishing, or advisory roles. Favorable period for starting own business or consultancy.",
          strength: "high",
        },
        {
          category: "Health & Wellness",
          description:
            "Generally robust health with Mars in 3rd house providing good energy levels. Pay attention to digestive system due to Mercury-Sun conjunction. Regular exercise and balanced diet recommended.",
          strength: "medium",
        },
        {
          category: "Marriage & Relationships",
          description:
            "Venus in 12th house suggests spiritual connection with partner. Favorable period for marriage and partnerships. Family relationships harmonious with Moon in 2nd house bringing emotional security.",
          strength: "high",
        },
        {
          category: "Education & Learning",
          description:
            "Excellent time for higher education and skill development. Jupiter's aspect on 5th house enhances learning abilities. Success in competitive exams and certifications likely.",
          strength: "high",
        },
        {
          category: "Spiritual Growth",
          description:
            "Strong inclination towards spiritual practices and philosophy. Saturn in 10th house brings discipline in spiritual pursuits. Meditation and yoga will bring significant benefits.",
          strength: "medium",
        },
        {
          category: "Property & Assets",
          description:
            "Rahu in 4th house may bring opportunities for property acquisition. Good time for real estate investments. Ancestral property matters may require attention.",
          strength: "medium",
        },
      ],
      generatedAt: new Date().toISOString(),
    }

    return NextResponse.json(mockKundli)
  } catch (error) {
    console.error("Error generating Kundli:", error)
    return NextResponse.json({ error: "Failed to generate Kundli" }, { status: 500 })
  }
}
