"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, User } from "lucide-react"
import { type KundliFormData, kundliAPI } from "@/lib/api"
import { useKundliStore } from "@/lib/store"
import { useRouter } from "next/navigation"

interface KundliFormProps {
  title?: string
  isFirstTime?: boolean
}

export function KundliForm({ title = "Generate Your Kundli", isFirstTime = false }: KundliFormProps) {
  const router = useRouter()
  const { setCurrentKundli, setLoading, setError, isLoading } = useKundliStore()

  const [formData, setFormData] = useState<KundliFormData>({
    name: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    gender: "male",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const kundli = await kundliAPI.generateKundli(formData)
      setCurrentKundli(kundli)
      router.push("/dashboard")
    } catch (error) {
      setError(error instanceof Error ? error.message : "Failed to generate Kundli")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: keyof KundliFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        {isFirstTime && <p className="text-sm text-muted-foreground">Welcome! Let's create your first Kundli</p>}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Date of Birth
            </Label>
            <Input
              id="dob"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tob" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Time of Birth
            </Label>
            <Input
              id="tob"
              type="time"
              value={formData.timeOfBirth}
              onChange={(e) => handleInputChange("timeOfBirth", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pob" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Place of Birth
            </Label>
            <Input
              id="pob"
              type="text"
              placeholder="City, State, Country"
              value={formData.placeOfBirth}
              onChange={(e) => handleInputChange("placeOfBirth", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select
              value={formData.gender}
              onValueChange={(value: "male" | "female") => handleInputChange("gender", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Generating..." : "Generate Kundli"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
