'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Code2, Brain, Cpu, Newspaper, BookOpen, Star, TrendingUp } from 'lucide-react'

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Articles', icon: TrendingUp, count: 500, color: 'bg-gray-100 text-gray-700' },
    { id: 'software', name: 'Software Development', icon: Code2, count: 150, color: 'bg-blue-100 text-blue-700' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 80, color: 'bg-purple-100 text-purple-700' },
    { id: 'hardware', name: 'Hardware & Gadgets', icon: Cpu, count: 120, color: 'bg-green-100 text-green-700' },
    { id: 'news', name: 'Tech News', icon: Newspaper, count: 200, color: 'bg-orange-100 text-orange-700' },
    { id: 'tutorial', name: 'Tutorials', icon: BookOpen, count: 150, color: 'bg-indigo-100 text-indigo-700' },
    { id: 'reviews', name: 'Reviews', icon: Star, count: 200, color: 'bg-pink-100 text-pink-700' },
  ]

  return (
    <div className="card p-6">
      <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4">Categories</h3>
      
      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon
          const isActive = activeCategory === category.id
          
          return (
            <Link
              key={category.id}
              href={category.id === 'all' ? '/blog' : `/blog?category=${category.id}`}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 group ${
                isActive 
                  ? 'bg-primary-50 dark:bg-green-500/20 border border-primary-200 dark:border-green-500/30' 
                  : 'hover:bg-gray-50 dark:hover:bg-green-500/10 border border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isActive ? 'bg-primary-100 dark:bg-green-500/30' : 'bg-gray-100 dark:bg-green-500/20 group-hover:bg-gray-200 dark:group-hover:bg-green-500/30'
                } transition-colors duration-200`}>
                  <Icon className={`w-4 h-4 ${
                    isActive ? 'text-primary-600 dark:text-green-400' : 'text-gray-600 dark:text-green-300'
                  }`} />
                </div>
                <span className={`font-medium ${
                  isActive ? 'text-primary-700 dark:text-green-300' : 'text-gray-700 dark:text-green-200'
                }`}>
                  {category.name}
                </span>
              </div>
              
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                isActive ? 'bg-primary-100 dark:bg-green-500/30 text-primary-700 dark:text-green-300' : 'bg-gray-100 dark:bg-green-500/20 text-gray-600 dark:text-green-400'
              }`}>
                {category.count}
              </div>
            </Link>
          )
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-green-500/30">
        <h4 className="font-medium text-gray-900 dark:text-green-300 mb-3">Popular Tags</h4>
        <div className="flex flex-wrap gap-2">
          {['React', 'Python', 'JavaScript', 'AI', 'Machine Learning', 'Web Development', 'Mobile', 'Cloud'].map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${tag.toLowerCase().replace(' ', '-')}`}
              className="px-3 py-1 bg-gray-100 hover:bg-primary-100 dark:bg-green-500/20 dark:hover:bg-green-500/30 text-gray-700 hover:text-primary-700 dark:text-green-300 dark:hover:text-green-200 rounded-full text-sm transition-colors duration-200"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter


