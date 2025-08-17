"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { KundliChart } from "@/components/charts/kundli-chart"
import { useKundliStore } from "@/lib/store"
import { Calendar, Clock, MapPin, User } from "lucide-react"

export function DashboardOverview() {
  const { currentKundli } = useKundliStore()

  if (!currentKundli) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">No Kundli data available</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header with personal info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Generated Kundli
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <span>{currentKundli.personalInfo.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span>{new Date(currentKundli.personalInfo.dateOfBirth).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span>{currentKundli.personalInfo.timeOfBirth}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span>{currentKundli.personalInfo.placeOfBirth}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <KundliChart chartData={currentKundli.charts.birthChart} title="Birth Chart" size="medium" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <KundliChart chartData={currentKundli.charts.navamsa} title="Navamsa Chart" size="medium" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <KundliChart chartData={currentKundli.charts.dashamsa} title="Dashamsa Chart" size="medium" />
          </CardContent>
        </Card>
      </div>

      {/* Planetary Positions */}
      <Card>
        <CardHeader>
          <CardTitle>Planetary Positions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentKundli.planetaryPositions.map((position, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="font-medium">{position.planet}</span>
                <div className="text-right text-sm">
                  <div>{position.sign}</div>
                  <div className="text-muted-foreground">{position.degree}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Predictions */}
      <Card>
        <CardHeader>
          <CardTitle>Key Predictions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {currentKundli.predictions.map((prediction, index) => (
              <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                <Badge
                  variant={
                    prediction.strength === "high"
                      ? "default"
                      : prediction.strength === "medium"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {prediction.strength}
                </Badge>
                <div>
                  <h4 className="font-medium">{prediction.category}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{prediction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
