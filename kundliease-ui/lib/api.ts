export interface KundliFormData {
  name: string
  dateOfBirth: string
  timeOfBirth: string
  placeOfBirth: string
  gender: "male" | "female"
}

export interface KundliData {
  id: string
  personalInfo: KundliFormData
  charts: {
    birthChart: number[][]
    navamsa: number[][]
    dashamsa: number[][]
  }
  planetaryPositions: {
    planet: string
    sign: string
    degree: string
    house: number
  }[]
  predictions: {
    category: string
    description: string
    strength: "high" | "medium" | "low"
  }[]
  generatedAt: string
}

class KundliAPI {
  private baseUrl = "/api/kundli"

  async generateKundli(formData: KundliFormData): Promise<KundliData> {
    const response = await fetch(`${this.baseUrl}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error("Failed to generate Kundli")
    }

    return response.json()
  }

  async getKundli(id: string): Promise<KundliData> {
    const response = await fetch(`${this.baseUrl}/${id}`)

    if (!response.ok) {
      throw new Error("Failed to fetch Kundli")
    }

    return response.json()
  }

  async getUserKundlis(): Promise<KundliData[]> {
    const response = await fetch(`${this.baseUrl}/user`)

    if (!response.ok) {
      throw new Error("Failed to fetch user Kundlis")
    }

    return response.json()
  }
}

export const kundliAPI = new KundliAPI()
