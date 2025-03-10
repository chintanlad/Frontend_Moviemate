"use client"

import { useState } from "react"
import MediaCard from "../components/MediaCard"

export default function WatchList() {
  // In a real app, this would be managed by a state management solution like Redux
  const [watchList, setWatchList] = useState([
    // Example items
    {
      id: 1,
      title: "The Righteous Gemstones: Season 4",
      type: "season",
      score: 89,
      reviewCount: 6,
      image: "/placeholder.svg?height=200&width=350",
    },
    // Add more items as needed
  ])

  const removeFromWatchList = (item) => {
    setWatchList(watchList.filter((i) => i.id !== item.id))
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="mb-8 text-3xl font-bold">Watch Later</h1>

      {watchList.length === 0 ? (
        <div className="rounded-lg bg-gray-50 p-8 text-center">
          <p className="text-lg text-gray-600">Your watch list is empty</p>
          <p className="mt-2 text-gray-500">Add items to your watch list by clicking the clock icon on any title</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {watchList.map((item) => (
            <MediaCard key={item.id} item={item} onWatchLater={() => removeFromWatchList(item)} />
          ))}
        </div>
      )}
    </div>
  )
}

