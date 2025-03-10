import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Clock, Flag } from "lucide-react"
import { useParams } from "react-router-dom"
import ReviewForm from "../components/ReviewForm"

export default function MediaDetail({ onWatchLater, user }) {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedReview, setSelectedReview] = useState(null)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [reviews, setReviews] = useState(MOCK_REVIEWS)
  const { id } = useParams()

  const reviewStats = {
    total: 45,
    positive: 27,
    mixed: 4,
    negative: 14,
  }

  const filteredReviews = reviews.filter((review) => {
    if (activeTab === "all") return true
    return review.type === activeTab
  })

  const handleAddReview = (reviewData) => {
    const newReview = {
      id: reviews.length + 1,
      author: user?.name || "Anonymous",
      authorImage: "/placeholder.svg?height=48&width=48",
      score: reviewData.rating * 2, // Convert 5-star to 10-point scale
      date: new Date()
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
        .toUpperCase(),
      content: reviewData.content,
      type: reviewData.rating >= 4 ? "positive" : reviewData.rating >= 2 ? "mixed" : "negative",
    }

    setReviews([newReview, ...reviews])
    setShowReviewForm(false)
  }

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
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-8 w-8 fill-gray-200 text-gray-200 hover:fill-yellow-400 hover:text-yellow-400"
                  />
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
              <button
                onClick={() => setShowReviewForm(true)}
                className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
              >
                Add My Review
              </button>
            </div>
          </div>

          {/* Review Form */}
          {showReviewForm && (
            <div className="mb-6">
              <ReviewForm onSubmit={handleAddReview} onCancel={() => setShowReviewForm(false)} />
            </div>
          )}

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
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className={`h-5 w-5 ${
                              index < Math.round(review.score / 2)
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
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
              <MediaCard key={show.id} item={show} onWatchLater={onWatchLater} />
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
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-700">{selectedReview.content}</p>
          </div>
        </div>
      )}
    </div>
  )
}

// Mock Data
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
  {
    id: 3,
    author: "TVFanatic",
    authorImage: "/placeholder.svg?height=48&width=48",
    score: 6,
    date: "FEB 22, 2025",
    content:
      "It's good but not great. The pacing feels off compared to previous seasons, and some of the character arcs seem forced. Still worth watching for the gorgeous scenery and a few standout performances.",
    type: "mixed",
  },
  {
    id: 4,
    author: "CriticKing",
    authorImage: "/placeholder.svg?height=48&width=48",
    score: 3,
    date: "MAR 1, 2025",
    content:
      "Disappointing follow-up to the brilliant first two seasons. The writing has lost its edge, and the social commentary feels heavy-handed. The new cast lacks chemistry, and the plot twists are predictable.",
    type: "negative",
  },
  {
    id: 5,
    author: "SeriesLover",
    authorImage: "/placeholder.svg?height=48&width=48",
    score: 8,
    date: "FEB 28, 2025",
    content:
      "Another solid entry in The White Lotus anthology. The new location is stunning, and the themes of privilege and cultural clash are handled with nuance. Some characters are more compelling than others, but overall it's an engaging watch.",
    type: "positive",
  },
]

// Mock data for related shows
const MOCK_RELATED = [
  {
    id: 1,
    title: "The Office (UK)",
    type: "TV Show",
    score: 97,
    reviewCount: 45,
    image: "/placeholder.svg?height=160&width=280",
    positiveReviews: 90,
  },
  {
    id: 2,
    title: "Fleabag",
    type: "TV Show",
    score: 92,
    reviewCount: 38,
    image: "/placeholder.svg?height=160&width=280",
    positiveReviews: 85,
  },
  {
    id: 3,
    title: "Atlanta",
    type: "TV Show",
    score: 92,
    reviewCount: 52,
    image: "/placeholder.svg?height=160&width=280",
    positiveReviews: 88,
  },
  {
    id: 4,
    title: "My So-Called Life",
    type: "TV Show",
    score: 92,
    reviewCount: 29,
    image: "/placeholder.svg?height=160&width=280",
    positiveReviews: 92,
  },
]

function MediaCard({ item, onWatchLater }) {
  const getBorderColor = (score) => {
    if (score >= 80) return "border-green-500"
    if (score >= 40) return "border-yellow-500"
    return "border-red-500"
  }

  return (
    <>
    
    <div className={`rounded-lg border-4 bg-white ${getBorderColor(item.score)}`}>
      <div className="relative">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="h-40 w-full rounded-t-md object-cover"
        />
        <button
          onClick={() => onWatchLater(item)}
          className="absolute right-2 top-2 rounded-full bg-black/50 p-1.5 text-white hover:bg-black/70"
        >
          <Clock className="h-4 w-4" />
        </button>
      </div>
      <div className="p-3">
        <h3 className="line-clamp-2 font-medium">{item.title}</h3>
        <div className="mt-1 text-sm text-gray-600">{item.type}</div>
        <div className="mt-2 flex items-center justify-between">
          <div className="rounded bg-green-500 px-2 py-1 text-sm font-bold text-white">{item.score}</div>
          <div className="text-xs text-gray-600">{item.reviewCount} Reviews</div>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
          <div className="h-full bg-green-500" style={{ width: `${item.positiveReviews}%` }} />
        </div>
      </div>
     </div>
  </>
  )
}