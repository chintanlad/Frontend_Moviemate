"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import MediaCard from "./MediaCard"

const MOCK_DATA = [
  {
    id: 1,
    title: "Win or Lose",
    type: "tv show",
    score: 67,
    reviewCount: 10,
    image: "/placeholder.svg?height=160&width=280",
  },
  {
    id: 2,
    title: "Like a Dragon: Pirate Yakuza in Hawaii",
    type: "game",
    score: 79,
    reviewCount: 69,
    image: "/placeholder.svg?height=160&width=280",
  },
  {
    id: 3,
    title: "The Monkey",
    type: "movie",
    score: 67,
    reviewCount: 20,
    image: "/placeholder.svg?height=160&width=280",
  },
  {
    id: 4,
    title: "Avowed",
    type: "game",
    score: 80,
    reviewCount: 72,
    image: "/placeholder.svg?height=160&width=280",
  },
]

export default function MediaCarousel() {
  const [startIndex, setStartIndex] = useState(0)

  const showPrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1))
  }

  const showNext = () => {
    setStartIndex(Math.min(MOCK_DATA.length - 4, startIndex + 1))
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">New and Notable</h2>
        <div className="flex space-x-2">
          <button
            onClick={showPrevious}
            disabled={startIndex === 0}
            className="rounded-full p-2 hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={showNext}
            disabled={startIndex >= MOCK_DATA.length - 4}
            className="rounded-full p-2 hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex space-x-4 overflow-hidden">
        {MOCK_DATA.slice(startIndex, startIndex + 4).map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

