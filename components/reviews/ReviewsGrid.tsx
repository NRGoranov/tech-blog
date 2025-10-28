import Link from 'next/link'
import Image from 'next/image'
import { Star, Calendar, User, ExternalLink, ThumbsUp, ThumbsDown } from 'lucide-react'
import { reviews } from '@/data/blogData'

const ReviewsGrid = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      software: 'bg-blue-100 text-blue-700',
      hardware: 'bg-green-100 text-green-700',
      service: 'bg-purple-100 text-purple-700',
      book: 'bg-orange-100 text-orange-700',
      course: 'bg-indigo-100 text-indigo-700'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  const getCategoryName = (category: string) => {
    const names = {
      software: 'Software',
      hardware: 'Hardware',
      service: 'Service',
      book: 'Book',
      course: 'Course'
    }
    return names[category as keyof typeof names] || category
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 dark:text-green-400 ml-1">({rating}/5)</span>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-green-300">Latest Reviews</h2>
          <p className="text-gray-600 dark:text-green-200/70 mt-1">
            Honest reviews of the latest technology products
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 dark:border-green-500/30 dark:bg-black/30 dark:text-green-300 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-500 focus:border-transparent">
            <option>Latest</option>
            <option>Highest Rated</option>
            <option>Most Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <article key={review.id} className="card card-hover overflow-hidden">
            <div className="relative h-48">
              <Image
                src={review.image}
                alt={review.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(review.category)}`}>
                  {getCategoryName(review.category)}
                </span>
              </div>
              {review.price && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-900 rounded-full text-sm font-medium">
                    {review.price}
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-green-300 mb-2 leading-tight">
                    {review.title}
                  </h3>
                  <p className="text-gray-600 dark:text-green-200/70 text-sm mb-3">
                    {review.product}
                  </p>
                </div>
                {renderStars(review.rating)}
              </div>
              
              <p className="text-gray-600 dark:text-green-200/70 text-sm mb-4 line-clamp-3">
                {review.summary}
              </p>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-green-700 mb-2 flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Pros
                  </h4>
                  <ul className="space-y-1">
                    {review.pros.slice(0, 2).map((pro, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-start">
                        <span className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-red-700 mb-2 flex items-center">
                    <ThumbsDown className="w-4 h-4 mr-1" />
                    Cons
                  </h4>
                  <ul className="space-y-1">
                    {review.cons.slice(0, 2).map((con, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-start">
                        <span className="w-1 h-1 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Author and Date */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src={review.author.avatar}
                    alt={review.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-green-300">{review.author.name}</p>
                    <p className="text-xs text-gray-500 dark:text-green-400">{review.author.expertise}</p>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500 dark:text-green-400">
                  <Calendar className="w-3 h-3 mr-1" />
                  {formatDate(review.publishedAt)}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <Link 
                  href={`/reviews/${review.id}`}
                  className="text-primary-600 hover:text-primary-700 dark:text-green-400 dark:hover:text-green-300 font-medium text-sm"
                >
                  Read Full Review
                </Link>
                {review.affiliateLink && (
                  <a
                    href={review.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Buy Now
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <button className="btn-primary">
          Load More Reviews
        </button>
      </div>
    </div>
  )
}

export default ReviewsGrid


