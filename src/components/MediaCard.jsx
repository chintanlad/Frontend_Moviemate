import { Star } from "lucide-react"

export default function MediaCard({ item }) {
  const getBorderColor = (score) => {
    if (score >= 80) return "border-green-500"
    if (score >= 60) return "border-yellow-500"
    return "border-red-500"
  }

  const getScoreColor = (score) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="w-72 rounded-lg bg-white p-3 shadow-lg">
      <div className={`relative overflow-hidden rounded-lg border-2 ${getBorderColor(item.score)}`}>
        <img src={item.image || "/placeholder.svg"} alt={item.title} className="h-40 w-full object-cover" />
        <div className="absolute bottom-2 right-2 flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < Math.round(item.score / 20) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 space-y-2">
        <h3 className="font-semibold">{item.title}</h3>
        <span className="inline-block rounded-full bg-gray-200 px-2 py-0.5 text-xs">{item.type}</span>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">Generally Favorable</div>
            <div className="text-xs text-gray-600">Based on {item.reviewCount} Critic Reviews</div>
          </div>
          <div
            className={`flex h-12 w-12 items-center justify-center rounded ${getScoreColor(item.score)} text-xl font-bold text-white`}
          >
            {item.score}
          </div>
        </div>
      </div>
    </div>
  )
}

