"use client"

import { useState } from "react"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { DetailedChartView } from "@/components/charts/detailed-chart-view"
import { useKundliStore } from "@/lib/store"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const { currentKundli } = useKundliStore()
  const [selectedChart, setSelectedChart] = useState<{
    data: number[][]
    title: string
  } | null>(null)

  if (!currentKundli) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Kundli Found</h2>
          <p className="text-muted-foreground mb-4">Please generate a Kundli first.</p>
          <Button onClick={() => (window.location.href = "/")}>Generate Kundli</Button>
        </div>
      </div>
    )
  }

  if (selectedChart) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <DetailedChartView
          chartData={selectedChart.data}
          title={selectedChart.title}
          onBack={() => setSelectedChart(null)}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Kundli Dashboard</h1>
          <p className="text-gray-600">View and analyze your generated Kundli charts and predictions</p>
        </div>

        <div
          onClick={() =>
            setSelectedChart({
              data: currentKundli.charts.birthChart,
              title: "Birth Chart",
            })
          }
        >
          <DashboardOverview />
        </div>
      </main>
    </div>
  )
}
