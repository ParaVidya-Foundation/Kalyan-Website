import { KundliForm } from "@/components/forms/kundli-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Kundli Generator</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Generate accurate and detailed Vedic astrology charts with professional-grade calculations and insights.
          </p>
        </div>

        <KundliForm title="Generate Your Kundli" isFirstTime={true} />
      </div>
    </div>
  )
}
