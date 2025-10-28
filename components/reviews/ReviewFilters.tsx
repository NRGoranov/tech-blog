'use client'

import { useState } from 'react'
import { Star, Filter, DollarSign } from 'lucide-react'

const ReviewFilters = () => {
  const [selectedRating, setSelectedRating] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 5000])

  const categories = [
    { id: 'all', name: 'All Products', count: 200 },
    { id: 'software', name: 'Software', count: 80 },
    { id: 'hardware', name: 'Hardware', count: 90 },
    { id: 'service', name: 'Services', count: 20 },
    { id: 'book', name: 'Books', count: 10 },
  ]

  const ratings = [
    { stars: 5, label: '5 Stars', count: 120 },
    { stars: 4, label: '4+ Stars', count: 60 },
    { stars: 3, label: '3+ Stars', count: 15 },
    { stars: 2, label: '2+ Stars', count: 3 },
    { stars: 1, label: '1+ Stars', count: 2 },
  ]

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-50 dark:bg-green-500/20 border border-primary-200 dark:border-green-500/30'
                  : 'hover:bg-gray-50 dark:hover:bg-green-500/10 border border-transparent'
              }`}
            >
              <span className={`font-medium ${
                selectedCategory === category.id ? 'text-primary-700 dark:text-green-300' : 'text-gray-700 dark:text-green-200'
              }`}>
                {category.name}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                selectedCategory === category.id
                  ? 'bg-primary-100 dark:bg-green-500/30 text-primary-700 dark:text-green-300'
                  : 'bg-gray-100 dark:bg-green-500/20 text-gray-600 dark:text-green-400'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4">Rating</h3>
        <div className="space-y-3">
          {ratings.map((rating) => (
            <button
              key={rating.stars}
              onClick={() => setSelectedRating(rating.stars)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                selectedRating === rating.stars
                  ? 'bg-primary-50 dark:bg-green-500/20 border border-primary-200 dark:border-green-500/30'
                  : 'hover:bg-gray-50 dark:hover:bg-green-500/10 border border-transparent'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rating.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className={`text-sm ${
                  selectedRating === rating.stars ? 'text-primary-700 dark:text-green-300' : 'text-gray-700 dark:text-green-200'
                }`}>
                  {rating.label}
                </span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                selectedRating === rating.stars
                  ? 'bg-primary-100 dark:bg-green-500/30 text-primary-700 dark:text-green-300'
                  : 'bg-gray-100 dark:bg-green-500/20 text-gray-600 dark:text-green-400'
              }`}>
                {rating.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4">Price Range</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-gray-400 dark:text-green-400" />
            <span className="text-sm text-gray-600 dark:text-green-200">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
          
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-green-500/20 dark:hover:bg-green-500/30 dark:text-green-300 rounded-lg text-sm transition-colors duration-200">
              Under $100
            </button>
            <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-green-500/20 dark:hover:bg-green-500/30 dark:text-green-300 rounded-lg text-sm transition-colors duration-200">
              $100-$500
            </button>
            <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-green-500/20 dark:hover:bg-green-500/30 dark:text-green-300 rounded-lg text-sm transition-colors duration-200">
              $500-$1000
            </button>
            <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-green-500/20 dark:hover:bg-green-500/30 dark:text-green-300 rounded-lg text-sm transition-colors duration-200">
              Over $1000
            </button>
          </div>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['Gaming', 'Productivity', 'Creative', 'Business', 'Development', 'Design', 'Security', 'Mobile'].map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 bg-gray-100 hover:bg-primary-100 dark:bg-green-500/20 dark:hover:bg-green-500/30 text-gray-700 hover:text-primary-700 dark:text-green-300 dark:hover:text-green-200 rounded-full text-sm transition-colors duration-200"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReviewFilters


