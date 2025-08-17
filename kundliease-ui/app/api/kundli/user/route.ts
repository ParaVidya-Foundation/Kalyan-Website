import { NextResponse } from "next/server"
import { sampleKundliData, additionalSampleKundlis } from "@/lib/dummy-data"

export async function GET() {
  try {
    const userKundlis = [sampleKundliData, ...additionalSampleKundlis]
    return NextResponse.json(userKundlis)
  } catch (error) {
    console.error("Error fetching user Kundlis:", error)
    return NextResponse.json({ error: "Failed to fetch Kundlis" }, { status: 500 })
  }
}
