'use client'

import { useState } from 'react'
import { Code2, Globe, Smartphone, Database, Wrench, Brain, Filter } from 'lucide-react'

const TutorialFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [selectedDuration, setSelectedDuration] = useState('all')

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: Code2, count: 150 },
    { id: 'programming', name: 'Programming', icon: Code2, count: 50 },
    { id: 'web-dev', name: 'Web Development', icon: Globe, count: 40 },
    { id: 'mobile', name: 'Mobile Development', icon: Smartphone, count: 25 },
    { id: 'data-science', name: 'Data Science', icon: Database, count: 20 },
    { id: 'devops', name: 'DevOps', icon: Wrench, count: 15 },
  ]

  const difficulties = [
    { id: 'all', name: 'All Levels', count: 150 },
    { id: 'beginner', name: 'Beginner', count: 60, color: 'bg-green-100 text-green-700' },
    { id: 'intermediate', name: 'Intermediate', count: 70, color: 'bg-yellow-100 text-yellow-700' },
    { id: 'advanced', name: 'Advanced', count: 20, color: 'bg-red-100 text-red-700' },
  ]

  const durations = [
    { id: 'all', name: 'Any Duration', count: 150 },
    { id: 'short', name: 'Under 30 min', count: 45 },
    { id: 'medium', name: '30-60 min', count: 60 },
    { id: 'long', name: '1+ hours', count: 45 },
  ]

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-50 dark:bg-green-500/20 border border-primary-200 dark:border-green-500/30'
                    : 'hover:bg-gray-50 dark:hover:bg-green-500/10 border border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`w-5 h-5 ${
                    selectedCategory === category.id ? 'text-primary-600 dark:text-green-400' : 'text-gray-600 dark:text-green-300'
                  }`} />
                  <span className={`font-medium ${
                    selectedCategory === category.id ? 'text-primary-700 dark:text-green-300' : 'text-gray-700 dark:text-green-200'
                  }`}>
                    {category.name}
                  </span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  selectedCategory === category.id
                    ? 'bg-primary-100 dark:bg-green-500/30 text-primary-700 dark:text-green-300'
                    : 'bg-gray-100 dark:bg-green-500/20 text-gray-600 dark:text-green-400'
                }`}>
                  {category.count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4">Difficulty Level</h3>
        <div className="space-y-2">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty.id}
              onClick={() => setSelectedDifficulty(difficulty.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                selectedDifficulty === difficulty.id
                  ? 'bg-primary-50 dark:bg-green-500/20 border border-primary-200 dark:border-green-500/30'
                  : 'hover:bg-gray-50 dark:hover:bg-green-500/10 border border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                {difficulty.id !== 'all' && (
                  <div className={`w-3 h-3 rounded-full ${
                    difficulty.id === 'beginner' ? 'bg-green-500' :
                    difficulty.id === 'intermediate' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}></div>
                )}
                <span className={`font-medium ${
                  selectedDifficulty === difficulty.id ? 'text-primary-700 dark:text-green-300' : 'text-gray-700 dark:text-green-200'
                }`}>
                  {difficulty.name}
                </span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                selectedDifficulty === difficulty.id
                  ? 'bg-primary-100 dark:bg-green-500/30 text-primary-700 dark:text-green-300'
                  : 'bg-gray-100 dark:bg-green-500/20 text-gray-600 dark:text-green-400'
              }`}>
                {difficulty.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4">Duration</h3>
        <div className="space-y-2">
          {durations.map((duration) => (
            <button
              key={duration.id}
              onClick={() => setSelectedDuration(duration.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                selectedDuration === duration.id
                  ? 'bg-primary-50 dark:bg-green-500/20 border border-primary-200 dark:border-green-500/30'
                  : 'hover:bg-gray-50 dark:hover:bg-green-500/10 border border-transparent'
              }`}
            >
              <span className={`font-medium ${
                selectedDuration === duration.id ? 'text-primary-700 dark:text-green-300' : 'text-gray-700 dark:text-green-200'
              }`}>
                {duration.name}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                selectedDuration === duration.id
                  ? 'bg-primary-100 dark:bg-green-500/30 text-primary-700 dark:text-green-300'
                  : 'bg-gray-100 dark:bg-green-500/20 text-gray-600 dark:text-green-400'
              }`}>
                {duration.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Languages */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4">Popular Languages</h3>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'Python', 'React', 'Node.js', 'TypeScript', 'Vue.js', 'Angular', 'PHP'].map((lang) => (
            <button
              key={lang}
              className="px-3 py-1 bg-gray-100 hover:bg-primary-100 dark:bg-green-500/20 dark:hover:bg-green-500/30 text-gray-700 hover:text-primary-700 dark:text-green-300 dark:hover:text-green-200 rounded-full text-sm transition-colors duration-200"
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TutorialFilters


