"use client"

import { useState, React } from "react"
import { ChevronLeft, ChevronRight, X, Flag } from "lucide-react"
import { useParams } from "react-router-dom"

// Mock data for the reviews
const MOCK_REVIEWS = [
  {
    id: 1,
    author: "Michublaze",
    authorImage: "/placeholder.svg?height=48&width=48",
    score: 10,
    date: "FEB 19, 2025",
    content:
      "The first episode sets up the upcoming events really good, directing, acting and everything production wise is top notch, let's see how this plays out.",
    type: "positive",
  },
  {
    id: 2,
    author: "Bubdoolah69",
    authorImage: "/placeholder.svg?height=48&width=48",
    score: 9,
    date: "MAR 4, 2025",
    content:
      "The setting is fun and exciting, already better than season 2. The show stars are incredible and the writing is sharp as ever. Mike White continues to prove he's one of the best writers working in television today. The cast is phenomenal, especially the newcomers who fit perfectly into the world of The White Lotus.",
    type: "positive",
  },
  // Add more mock reviews here...
]

const MOCK_RELATED = [
  {
    id: 1,
    title: "The Office (UK)",
    type: "TV Show",
    score: 97,
    reviewCount: 45,
    image: "/placeholder.svg?height=160&width=280",
  },
  {
    id: 2,
    title: "Fleabag",
    type: "TV Show",
    score: 92,
    reviewCount: 38,
    image: "/placeholder.svg?height=160&width=280",
  },
  {
    id: 3,
    title: "Atlanta",
    type: "TV Show",
    score: 92,
    reviewCount: 52,
    image: "/placeholder.svg?height=160&width=280",
  },
  {
    id: 4,
    title: "My So-Called Life",
    type: "TV Show",
    score: 92,
    reviewCount: 29,
    image: "/placeholder.svg?height=160&width=280",
  },
]

export default function MediaDetail() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedReview, setSelectedReview] = useState(null)
  const { id } = useParams()

  const reviewStats = {
    total: 45,
    positive: 27,
    mixed: 4,
    negative: 14,
  }

  const filteredReviews = MOCK_REVIEWS.filter((review) => {
    if (activeTab === "all") return true
    return review.type === activeTab
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8 flex items-center">
          <ChevronLeft className="mr-2 h-6 w-6" />
          <h1 className="text-xl font-bold">The White Lotus</h1>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          {/* Video Player */}
          <div className="aspect-video bg-black">
            <video controls className="h-full w-full" poster="/placeholder.svg?height=400&width=700">
              <source src="#" type="video/mp4" />
            </video>
          </div>

          {/* Title and Rating */}
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold">The White Lotus</h2>
              <div className="text-xl">Season 3</div>
              <div className="mt-2 text-sm text-gray-600">Season Premiere: FEB 16, 2025</div>
            </div>

            {/* Metascore */}
            <div className="flex items-center space-x-4">
              <div className="rounded bg-green-500 px-4 py-2 text-2xl font-bold text-white">77</div>
              <div>
                <div className="font-medium">Generally Favorable</div>
                <div className="text-sm text-gray-600">Based on 44 Critic Reviews</div>
              </div>
            </div>

            {/* User Score */}
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-green-500 p-4 text-2xl font-bold text-white">6.2</div>
              <div>
                <div className="font-medium">Generally Favorable</div>
                <div className="text-sm text-gray-600">Based on 45 User Ratings</div>
              </div>
            </div>

            {/* Rating Input */}
            <div className="space-y-2">
              <div className="text-sm font-medium">MY SCORE</div>
              <div className="flex space-x-1">
                {[...Array(10)].map((_, i) => (
                  <button key={i} className="h-8 w-8 rounded bg-gray-200 hover:bg-green-500 hover:text-white">
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Summary</h2>
          <p className="text-gray-700">
            The satirical limited series created by Mike White gradually reveals the truth behind the seemingly perfect
            guests and staff at an exclusive Hawaiian resort over the course of a week.
          </p>
          <div className="flex gap-2">
            <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">Comedy</span>
            <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">Drama</span>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">User Reviews</h2>
            <div className="mt-4 flex items-center justify-between rounded-lg bg-gray-50 p-4">
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-sm font-medium text-gray-600">Total Reviews</div>
                  <div className="text-2xl font-bold">{reviewStats.total}</div>
                </div>
                <div className="h-12 w-[300px]">
                  <div className="flex h-2 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="bg-green-500"
                      style={{ width: `${(reviewStats.positive / reviewStats.total) * 100}%` }}
                    />
                    <div
                      className="bg-yellow-500"
                      style={{ width: `${(reviewStats.mixed / reviewStats.total) * 100}%` }}
                    />
                    <div
                      className="bg-red-500"
                      style={{ width: `${(reviewStats.negative / reviewStats.total) * 100}%` }}
                    />
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-gray-600">
                    <span>{Math.round((reviewStats.positive / reviewStats.total) * 100)}% Positive</span>
                    <span>{Math.round((reviewStats.mixed / reviewStats.total) * 100)}% Mixed</span>
                    <span>{Math.round((reviewStats.negative / reviewStats.total) * 100)}% Negative</span>
                  </div>
                </div>
              </div>
              <button className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600">Add My Review</button>
            </div>
          </div>

          {/* Review Tabs */}
          <div className="mb-6 flex space-x-4 border-b">
            {[
              { id: "all", label: "All Reviews" },
              { id: "positive", label: "Positive Reviews" },
              { id: "mixed", label: "Mixed Reviews" },
              { id: "negative", label: "Negative Reviews" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border-b-2 px-4 py-2 ${
                  activeTab === tab.id ? "border-black font-medium" : "border-transparent text-gray-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Review List */}
          <div className="space-y-6">
            {filteredReviews.map((review) => (
              <div key={review.id} className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={review.authorImage || "/placeholder.svg"}
                    alt={review.author}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{review.author}</h3>
                        <div className="text-sm text-gray-600">{review.date}</div>
                      </div>
                      <div
                        className={`rounded-full p-3 text-xl font-bold text-white
                        ${review.score >= 8 ? "bg-green-500" : review.score >= 5 ? "bg-yellow-500" : "bg-red-500"}`}
                      >
                        {review.score}
                      </div>
                    </div>
                    <p className="mt-2 text-gray-700">
                      {review.content.length > 200 ? (
                        <>
                          {review.content.slice(0, 200)}...
                          <button
                            onClick={() => setSelectedReview(review)}
                            className="ml-2 text-blue-500 hover:underline"
                          >
                            Read More
                          </button>
                        </>
                      ) : (
                        review.content
                      )}
                    </p>
                    <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                      <button className="flex items-center space-x-1 hover:text-gray-700">
                        <Flag className="h-4 w-4" />
                        <span>Report</span>
                      </button>
                      <span>SEASON 3</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Shows */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Related Shows</h2>
            <div className="flex space-x-2">
              <button className="rounded-full p-2 hover:bg-gray-100">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button className="rounded-full p-2 hover:bg-gray-100">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MOCK_RELATED.map((show) => (
              <MediaCard key={show.id} item={show} />
            ))}
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={selectedReview.authorImage || "/placeholder.svg"}
                  alt={selectedReview.author}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium">{selectedReview.author}</h3>
                  <div className="text-sm text-gray-600">{selectedReview.date}</div>
                </div>
              </div>
              <button onClick={() => setSelectedReview(null)} className="rounded-full p-1 hover:bg-gray-100">
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-700">{selectedReview.content}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function MediaCard({ item }) {
  return (
    <div className="rounded-lg bg-gray-50 p-4">
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        className="mb-4 h-40 w-full rounded-md object-cover"
      />
      <h3 className="font-medium">{item.title}</h3>
      <div className="text-sm text-gray-600">{item.type}</div>
      <div className="mt-2 flex items-center space-x-2">
        <div className="rounded bg-green-500 px-2 py-1 text-sm font-bold text-white">{item.score}</div>
        <div className="text-sm text-gray-600">{item.reviewCount} Reviews</div>
      </div>
    </div>
  )
}





// "use client"

// import { React, useState } from "react"
// import { ChevronLeft, ChevronRight, Star, X } from "lucide-react"

// export default function MediaDetail() {
//   const [activeTab, setActiveTab] = useState("all")
//   const [selectedReview, setSelectedReview] = useState(null)

//   const reviewTabs = [
//     { id: "all", label: "All Reviews" },
//     { id: "positive", label: "Positive Reviews" },
//     { id: "mixed", label: "Mixed Reviews" },
//     { id: "negative", label: "Negative Reviews" },
//   ]

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="container mx-auto px-4 py-8">
//         {/* Main Content */}
//         <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
//           {/* Video Player */}
//           <div className="aspect-video bg-black">
//             <video controls className="h-full w-full" poster="/placeholder.svg?height=400&width=700">
//               <source src="#" type="video/mp4" />
//             </video>
//           </div>

//           {/* Title and Rating */}
//           <div className="space-y-4">
//             <h1 className="text-3xl font-bold">The White Lotus</h1>
//             <div className="text-xl">Season 3</div>
//             <div className="flex items-center space-x-2">
//               <div className="rounded bg-green-500 px-4 py-2 text-2xl font-bold text-white">79</div>
//               <div>
//                 <div className="font-medium">Generally Favorable</div>
//                 <div className="text-sm text-gray-600">Based on 39 Critic Reviews</div>
//               </div>
//             </div>
//             <div className="flex space-x-1">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Description */}
//         <div className="mt-8 space-y-4">
//           <h2 className="text-2xl font-bold">Summary</h2>
//           <p className="text-gray-700">
//             The satirical limited series created by Mike White gradually reveals the truth behind the seemingly perfect
//             guests and staff at an exclusive Hawaiian resort over the course of a week.
//           </p>
//           <div className="flex gap-2">
//             <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">Comedy</span>
//             <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">Drama</span>
//           </div>
//         </div>

//         {/* Reviews Section */}
//         <div className="mt-12">
//           <div className="mb-6 flex items-center justify-between">
//             <h2 className="text-2xl font-bold">Critic Reviews</h2>
//             <div className="flex items-center space-x-4">
//               <div className="h-2 w-64 rounded-full bg-gray-200">
//                 <div className="h-full w-[90%] rounded-full bg-green-500" />
//               </div>
//               <div className="text-sm">
//                 <span className="font-medium text-green-500">90% Positive</span>
//                 <span className="mx-2">|</span>
//                 <span className="font-medium text-yellow-500">8% Mixed</span>
//                 <span className="mx-2">|</span>
//                 <span className="font-medium text-red-500">2% Negative</span>
//               </div>
//             </div>
//           </div>

//           {/* Review Tabs */}
//           <div className="mb-6 flex space-x-4 border-b">
//             {reviewTabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`border-b-2 px-4 py-2 ${
//                   activeTab === tab.id ? "border-black font-medium" : "border-transparent text-gray-500"
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           {/* Review List */}
//           <div className="space-y-6">
//             {MOCK_REVIEWS.map((review) => (
//               <div key={review.id} className="rounded-lg bg-gray-50 p-4">
//                 <div className="flex items-start space-x-4">
//                   <img
//                     src={review.authorImage || "/placeholder.svg"}
//                     alt={review.author}
//                     className="h-12 w-12 rounded-full"
//                   />
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <h3 className="font-medium">{review.author}</h3>
//                       <div className="rounded bg-green-500 px-2 py-1 text-sm font-bold text-white">{review.score}</div>
//                     </div>
//                     <p className="mt-2 text-gray-700">
//                       {review.content.length > 200 ? (
//                         <>
//                           {review.content.slice(0, 200)}...
//                           <button
//                             onClick={() => setSelectedReview(review)}
//                             className="ml-2 text-blue-500 hover:underline"
//                           >
//                             Read More
//                           </button>
//                         </>
//                       ) : (
//                         review.content
//                       )}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Related Shows */}
//         <div className="mt-12">
//           <div className="mb-6 flex items-center justify-between">
//             <h2 className="text-2xl font-bold">Related Shows</h2>
//             <div className="flex space-x-2">
//               <button className="rounded-full p-2 hover:bg-gray-100">
//                 <ChevronLeft className="h-6 w-6" />
//               </button>
//               <button className="rounded-full p-2 hover:bg-gray-100">
//                 <ChevronRight className="h-6 w-6" />
//               </button>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {MOCK_RELATED.map((show) => (
//               <MediaCard key={show.id} item={show} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Review Modal */}
//       {selectedReview && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6">
//             <div className="mb-4 flex items-center justify-between">
//               <h3 className="text-xl font-bold">{selectedReview.author}</h3>
//               <button onClick={() => setSelectedReview(null)} className="rounded-full p-1 hover:bg-gray-100">
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <p className="text-gray-700">{selectedReview.content}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// // Mock Data
// const MOCK_REVIEWS = [
//   {
//     id: 1,
//     author: "The Mercury News",
//     authorImage: "/placeholder.svg?height=48&width=48",
//     score: 100,
//     content:
//       'I gobbled down six of the eight episodes available for review, and will say – without even the slightest reservations – that "Lotus" regulars should check in for this third season. You won\'t be disappointed. Just be prepared to get your jaw dropped and...',
//   },
//   // Add more mock reviews...
// ]

// const MOCK_RELATED = [
//   {
//     id: 1,
//     title: "The Office (UK)",
//     type: "TV Show",
//     score: 97,
//     reviewCount: 45,
//     image: "/placeholder.svg?height=160&width=280",
//   },
//   // Add more mock related shows...
// ]

// function MediaCard({ item }) {
//   return (
//     <div className="rounded-lg bg-gray-50 p-4">
//       <img
//         src={item.image || "/placeholder.svg"}
//         alt={item.title}
//         className="mb-4 h-40 w-full object-cover rounded-md"
//       />
//       <h3 className="font-medium">{item.title}</h3>
//       <div className="text-sm text-gray-600">{item.type}</div>
//       <div className="mt-2 flex items-center space-x-2">
//         <div className="rounded bg-green-500 px-2 py-1 text-sm font-bold text-white">{item.score}</div>
//         <div className="text-sm text-gray-600">{item.reviewCount} Reviews</div>
//       </div>
//     </div>
//   )
// }

