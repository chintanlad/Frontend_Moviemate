import { Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MediaCard({ item, onWatchLater }) {
  const getBorderColor = (score) => {
    if (score >= 80) return 'border-green-500';
    if (score >= 40) return 'border-yellow-500';
    return 'border-red-500';
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 40) return 'bg-yellow-400';
    return 'bg-red-500';
  };

  return (
    <Link 
      to={`/title/${item.id}`} 
      className="block transition-transform hover:scale-105"
    >
      <div className={`h-full rounded-xl border-4 bg-white ${getBorderColor(item.score)}`}>
        <div className="flex flex-col">
          {/* Image Section */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
            <img
              src={item.pic_url || "/placeholder.svg"}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <button 
              onClick={(e) => {
                e.preventDefault();
                onWatchLater(item);
              }}
              className="absolute right-2 top-2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            >
              <Clock className="h-5 w-5" />
            </button>
          </div>
          
          {/* Content Section */}
          <div className="flex flex-1 flex-col gap-3 p-4">
            <div>
              <h3 className="line-clamp-2 text-lg font-bold leading-tight">
                {item.title}
              </h3>
              <span className="mt-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium">
                {item.type}
              </span>
            </div>
            
            <div className="mt-auto space-y-2">
              <div className="flex items-center justify-between">
                <div className={`rounded-md ${getScoreColor(item.score)} px-3 py-1 text-xl font-bold text-white`}>
                  {item.score}
                </div>
                <div className="text-sm text-gray-600">
                  {item.reviewCount} Reviews
                </div>
              </div>

              {/* Review Distribution Bar */}
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div 
                  className="h-full bg-green-500" 
                  style={{ 
                    width: `${item.positiveReviews || 70}%`,
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}