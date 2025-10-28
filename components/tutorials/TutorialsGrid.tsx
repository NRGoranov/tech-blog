import Link from 'next/link'
import Image from 'next/image'
import { Clock, User, Play, Code2, Calendar, CheckCircle } from 'lucide-react'
import { tutorials } from '@/data/blogData'

const TutorialsGrid = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      beginner: 'bg-green-100 text-green-700',
      intermediate: 'bg-yellow-100 text-yellow-700',
      advanced: 'bg-red-100 text-red-700'
    }
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      programming: 'bg-blue-100 text-blue-700',
      'web-dev': 'bg-purple-100 text-purple-700',
      mobile: 'bg-green-100 text-green-700',
      'data-science': 'bg-orange-100 text-orange-700',
      devops: 'bg-indigo-100 text-indigo-700',
      ai: 'bg-pink-100 text-pink-700'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  const getCategoryName = (category: string) => {
    const names = {
      programming: 'Programming',
      'web-dev': 'Web Dev',
      mobile: 'Mobile',
      'data-science': 'Data Science',
      devops: 'DevOps',
      ai: 'AI & ML'
    }
    return names[category as keyof typeof names] || category
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-green-300">Latest Tutorials</h2>
          <p className="text-gray-600 dark:text-green-200/70 mt-1">
            Step-by-step guides to help you master new skills
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 dark:border-green-500/30 dark:bg-black/30 dark:text-green-300 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-500 focus:border-transparent">
            <option>Latest</option>
            <option>Most Popular</option>
            <option>Beginner Friendly</option>
            <option>Advanced</option>
          </select>
        </div>
      </div>

      {/* Tutorials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {tutorials.map((tutorial) => (
          <article key={tutorial.id} className="card card-hover overflow-hidden">
            <div className="relative h-48">
              <Image
                src={tutorial.image}
                alt={tutorial.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(tutorial.category)}`}>
                  {getCategoryName(tutorial.category)}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                  {tutorial.difficulty}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{tutorial.estimatedTime}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-gray-900 dark:text-green-300 mb-3 leading-tight">
                {tutorial.title}
              </h3>
              
              <p className="text-gray-600 dark:text-green-200/70 text-sm mb-4 line-clamp-3">
                {tutorial.description}
              </p>

              {/* Prerequisites */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-green-300 mb-2">Prerequisites:</h4>
                <div className="flex flex-wrap gap-1">
                  {tutorial.prerequisites.slice(0, 3).map((prereq, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-green-500/20 text-gray-600 dark:text-green-300 rounded text-xs">
                      {prereq}
                    </span>
                  ))}
                  {tutorial.prerequisites.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-green-500/20 text-gray-600 dark:text-green-300 rounded text-xs">
                      +{tutorial.prerequisites.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Steps Preview */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 dark:text-green-300 mb-2">
                  Tutorial Steps ({tutorial.steps.length} steps):
                </h4>
                <div className="space-y-2">
                  {tutorial.steps.slice(0, 2).map((step, index) => (
                    <div key={step.id} className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-primary-700">{index + 1}</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-green-200">{step.title}</span>
                    </div>
                  ))}
                  {tutorial.steps.length > 2 && (
                    <div className="text-sm text-gray-500 dark:text-green-400 ml-7">
                      ... and {tutorial.steps.length - 2} more steps
                    </div>
                  )}
                </div>
              </div>

              {/* Author and Date */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src={tutorial.author.avatar}
                    alt={tutorial.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-green-300">{tutorial.author.name}</p>
                    <p className="text-xs text-gray-500 dark:text-green-400">{tutorial.author.expertise}</p>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500 dark:text-green-400">
                  <Calendar className="w-3 h-3 mr-1" />
                  {formatDate(tutorial.publishedAt)}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <Link 
                  href={`/tutorials/${tutorial.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-green-400 dark:hover:text-green-300 font-medium text-sm"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Tutorial
                </Link>
                <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-green-400">
                  <div className="flex items-center space-x-1">
                    <Code2 className="w-3 h-3" />
                    <span>{tutorial.codeExamples?.length || 0} examples</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>{tutorial.steps.length} steps</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <button className="btn-primary">
          Load More Tutorials
        </button>
      </div>
    </div>
  )
}

export default TutorialsGrid


