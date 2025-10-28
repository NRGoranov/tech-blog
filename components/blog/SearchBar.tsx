'use client'

import { useState } from 'react'
import { Search, Filter } from 'lucide-react'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="card p-6">
      <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4">Search Articles</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-green-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles, topics, authors..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-green-500/30 dark:bg-black/30 dark:text-green-300 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-500 focus:border-transparent transition-colors duration-200"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          <Search className="w-4 h-4 mr-2" />
          Search
        </button>
      </form>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-700 dark:text-green-300">Quick Filters</span>
          <Filter className="w-4 h-4 text-gray-400 dark:text-green-400" />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {['React', 'Python', 'AI', 'JavaScript', 'Node.js'].map((tag) => (
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

export default SearchBar


