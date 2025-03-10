"use client"

import { useState, React } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import MediaCard from "./MediaCard"

const MOCK_DATA = [
  { id: 1, title: "Item 1", imageUrl: "url1" },
  { id: 2, title: "Item 2", imageUrl: "url2" },
  { id: 3, title: "Item 3", imageUrl: "url3" },
  { id: 4, title: "Item 4", imageUrl: "url4" },
  { id: 5, title: "Item 5", imageUrl: "url5" },
  { id: 6, title: "Item 6", imageUrl: "url6" },
  { id: 7, title: "Item 7", imageUrl: "url7" },
  { id: 8, title: "Item 8", imageUrl: "url8" },
]

export default function MediaCarousel({ items = MOCK_DATA, onWatchLater }) {
  const [startIndex, setStartIndex] = useState(0)

  const showPrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1))
  }

  const showNext = () => {
    setStartIndex(Math.min(items.length - 4, startIndex + 1))
  }

  return (
    <div className="relative py-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">New and Notable</h2>
        <div className="flex space-x-4">
          <button
            onClick={showPrevious}
            disabled={startIndex === 0}
            className="rounded-full bg-gray-100 p-3 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={showNext}
            disabled={startIndex >= items.length - 4}
            className="rounded-full bg-gray-100 p-3 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${startIndex * 25}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-1/4 flex-shrink-0 px-3">
              <MediaCard item={item} onWatchLater={onWatchLater} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}




// "use client"

// import { useState } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import MediaCard from "./MediaCard.jsx"

// const MOCK_DATA = [
//   {
//     id: 1,
//     title: "Win or Lose",
//     type: "tv show",
//     score: 67,
//     reviewCount: 10,
//     image: "/placeholder.svg?height=160&width=280",
//   },
//   {
//     id: 2,
//     title: "Like a Dragon: Pirate Yakuza in Hawaii",
//     type: "game",
//     score: 79,
//     reviewCount: 69,
//     image: "/placeholder.svg?height=160&width=280",
//   },
//   {
//     id: 3,
//     title: "The Monkey",
//     type: "movie",
//     score: 67,
//     reviewCount: 20,
//     image: "/placeholder.svg?height=160&width=280",
//   },
//   {
//     id: 4,
//     title: "Avowed",
//     type: "game",
//     score: 80,
//     reviewCount: 72,
//     image: "/placeholder.svg?height=160&width=280",
//   },
//   // Add 6 more items to match the requirement
//   {
//     id: 5,
//     title: "The Last of Us",
//     type: "tv show",
//     score: 85,
//     reviewCount: 95,
//     image: "/placeholder.svg?height=160&width=280",
//   },
//   {
//     id: 6,
//     title: "Dune: Part Two",
//     type: "movie",
//     score: 88,
//     reviewCount: 45,
//     image: "/placeholder.svg?height=160&width=280",
//   },
//   {
//     id: 7,
//     title: "Final Fantasy VII Rebirth",
//     type: "game",
//     score: 92,
//     reviewCount: 83,
//     image: "/placeholder.svg?height=160&width=280",
//   },
//   {
//     id: 8,
//     title: "True Detective: Night Country",
//     type: "tv show",
//     score: 78,
//     reviewCount: 64,
//     image: "/placeholder.svg?height=160&width=280",
//   },
//   {
//     id: 9,
//     title: "Helldivers 2",
//     type: "game",
//     score: 81,
//     reviewCount: 55,
//     image: "/placeholder.svg?height=160&width=280",
//   },
//   {
//     id: 10,
//     title: "Poor Things",
//     type: "movie",
//     score: 87,
//     reviewCount: 91,
//     image: "/placeholder.svg?height=160&width=280",
//   },
// ]

// export default function MediaCarousel() {
//   const [startIndex, setStartIndex] = useState(0)

//   const showPrevious = () => {
//     setStartIndex(Math.max(0, startIndex - 1))
//   }

//   const showNext = () => {
//     setStartIndex(Math.min(MOCK_DATA.length - 4, startIndex + 1))
//   }

//   return (
//     <div className="relative">
//       <div className="flex items-center justify-between">
//         <h2 className="text-2xl font-bold">New and Notable</h2>
//         <div className="flex space-x-2">
//           <button
//             onClick={showPrevious}
//             disabled={startIndex === 0}
//             className="rounded-full p-2 hover:bg-gray-100 disabled:opacity-50"
//           >
//             <ChevronLeft className="h-6 w-6" />
//           </button>
//           <button
//             onClick={showNext}
//             disabled={startIndex >= MOCK_DATA.length - 4}
//             className="rounded-full p-2 hover:bg-gray-100 disabled:opacity-50"
//           >
//             <ChevronRight className="h-6 w-6" />
//           </button>
//         </div>
//       </div>

//       <div className="mt-4">
//         <div
//           className="flex transition-transform duration-300 ease-in-out"
//           style={{ transform: `translateX(-${startIndex * 288}px)` }}
//         >
//           {MOCK_DATA.map((item) => (
//             <div key={item.id} className="w-72 flex-shrink-0 px-2">
//               <MediaCard item={item} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

