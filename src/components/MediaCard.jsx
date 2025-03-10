// import { Star } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function MediaCard({ item }) {
//   const getBorderColor = (score) => {
//     if (score >= 80) return "border-green-500"
//     if (score >= 60) return "border-yellow-500"
//     return "border-red-500"
//   }

//   return (
//     <Link to={`/title/${item.id}`} className="block w-72 transition-transform hover:scale-105">
//       <div className={`rounded-lg bg-white p-3 shadow-lg ${getBorderColor(item.score)}`}>
//         <div className="flex flex-col gap-4">
//           {/* Image Section */}
//           <div className="overflow-hidden rounded-lg">
//             <img src={item.image || "/placeholder.svg"} alt={item.title} className="h-40 w-full object-cover" />
//           </div>

//           {/* Title and Genre Section */}
//           <div>
//             <h3 className="font-semibold">{item.title}</h3>
//             <span className="mt-1 inline-block rounded-full bg-gray-200 px-2 py-0.5 text-xs">{item.type}</span>
//           </div>

//           {/* Rating Section */}
//           <div className="flex items-center justify-between">
//             <div className="text-sm text-gray-600">{item.reviewCount} Reviews</div>
//             <div className="flex">
//               {[...Array(5)].map((_, index) => (
//                 <Star
//                   key={index}
//                   className={`h-4 w-4 ${
//                     index < Math.round(item.score / 20)
//                       ? "fill-yellow-400 text-yellow-400"
//                       : "fill-gray-300 text-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }
"use client"

import { Star, Clock } from "lucide-react"
import { Link } from "react-router-dom"

export default function MediaCard({ item, onWatchLater }) {
  const getBorderColor = (score) => {
    if (score >= 80) return "border-green-500"
    if (score >= 60) return "border-yellow-500"
    return "border-red-500"
  }

  return (
    <Link to={`/title/${item.id}`} className="block transition-transform hover:scale-105">
      <div className={`h-full rounded-xl border-2 bg-white ${getBorderColor(item.score)}`}>
        <div className="flex flex-col">
          {/* Image Section */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="h-full w-full object-cover" />
            <button
              onClick={(e) => {
                e.preventDefault()
                onWatchLater(item)
              }}
              className="absolute right-2 top-2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            >
              <Clock className="h-5 w-5" />
            </button>
          </div>

          {/* Content Section */}
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div>
              <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
              <span className="mt-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium">
                {item.type}
              </span>
            </div>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-green-500">{item.score}</div>
                <div className="text-sm text-gray-600">{item.reviewCount} Reviews</div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-6 w-6 ${
                      index < Math.round(item.score / 20)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-300 text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}




// import { Star } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function MediaCard({ item }) {
//   const getBorderColor = (score) => {
//     if (score >= 80) return "border-green-500"
//     if (score >= 60) return "border-yellow-500"
//     return "border-red-500"
//   }

//   return (
//     <Link to={`/title/${item.id}`} className="block w-72 transition-transform hover:scale-105">
//       <div className={`rounded-lg bg-white p-3 shadow-lg ${getBorderColor(item.score)}`}>
//         <div className="flex flex-col gap-4">
//           {/* Image Section */}
//           <div className="overflow-hidden rounded-lg">
//             <img src={item.image || "/placeholder.svg"} alt={item.title} className="h-40 w-full object-cover" />
//           </div>

//           {/* Title and Genre Section */}
//           <div>
//             <h3 className="font-semibold">{item.title}</h3>
//             <span className="mt-1 inline-block rounded-full bg-gray-200 px-2 py-0.5 text-xs">{item.type}</span>
//           </div>

//           {/* Rating Section */}
//           <div className="flex items-center justify-between">
//             <div className="text-sm text-gray-600">{item.reviewCount} Reviews</div>
//             <div className="flex">
//               {[...Array(5)].map((_, index) => (
//                 <Star
//                   key={index}
//                   className={`h-4 w-4 ${
//                     index < Math.round(item.score / 20)
//                       ? "fill-yellow-400 text-yellow-400"
//                       : "fill-gray-300 text-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

