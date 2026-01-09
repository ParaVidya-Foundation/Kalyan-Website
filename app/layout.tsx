import React from "react"
import type { Viewport } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/layout/Footer"
import { StructuredData } from "@/components/structured-data"
import { generateSEO, generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo-utils"
import Header from "@/components/layout/Header"


const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#F5F1E8",
}

export const metadata = generateSEO({
  title: "Vedic Astrology | Ancient Wisdom for Modern Life",
  description:
    "Discover the profound insights of Vedic Astrology (Jyotish). Expert Kundli analysis, horoscope readings, matchmaking, career guidance, and spiritual remedies rooted in 5,000 years of ancient wisdom.",
  keywords: [
    "vedic astrology",
    "jyotish",
    "kundli",
    "horoscope",
    "birth chart",
    "astrology services",
    "matchmaking",
    "vedic horoscope",
    "spiritual guidance",
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo/Logo.svg" type="image/svg+xml" />
        <StructuredData data={generateOrganizationSchema()} />
        <StructuredData data={generateWebsiteSchema()} />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
       
        <Header />
        {children}
        <Footer />
       
      </body>
    </html>
  )
}
