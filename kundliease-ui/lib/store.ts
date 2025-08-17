import { create } from "zustand"
import type { KundliData } from "./api"
import { sampleKundliData, additionalSampleKundlis } from "./dummy-data"

interface User {
  id: string
  name: string
  email: string
  phone?: string
  bio?: string
  location?: string
  avatar?: string
}

interface KundliStore {
  currentKundli: KundliData | null
  userKundlis: KundliData[]
  kundliHistory: KundliData[]
  currentUser: User | null
  isLoading: boolean
  error: string | null

  setCurrentKundli: (kundli: KundliData) => void
  setUserKundlis: (kundlis: KundliData[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  clearError: () => void
  updateUser: (userData: Partial<User>) => void
  setUser: (user: User) => void
}

export const useKundliStore = create<KundliStore>((set, get) => ({
  currentKundli: sampleKundliData,
  userKundlis: [sampleKundliData, ...additionalSampleKundlis],
  kundliHistory: [sampleKundliData, ...additionalSampleKundlis],
  currentUser: {
    id: "user_123",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    phone: "+91 98765 43210",
    bio: "Passionate about Vedic astrology and spiritual growth. Seeking guidance through ancient wisdom.",
    location: "New Delhi, India",
    avatar: "/indian-man-profile.png",
  },
  isLoading: false,
  error: null,

  setCurrentKundli: (kundli) => set({ currentKundli: kundli }),
  setUserKundlis: (kundlis) => set({ userKundlis: kundlis }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
  updateUser: (userData) =>
    set((state) => ({
      currentUser: state.currentUser ? { ...state.currentUser, ...userData } : null,
    })),
  setUser: (user) => set({ currentUser: user }),
}))
