'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Eye, Heart, Reply, Pin, TrendingUp } from 'lucide-react'
import { communityPosts } from '@/data/blogData'

const CommunityTabs = () => {
  const [activeTab, setActiveTab] = useState('recent')

  const tabs = [
    { id: 'recent', name: 'Recent', count: 1250 },
    { id: 'trending', name: 'Trending', count: 180 },
    { id: 'unanswered', name: 'Unanswered', count: 45 },
    { id: 'pinned', name: 'Pinned', count: 12 },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      discussion: 'bg-blue-100 text-blue-700',
      question: 'bg-green-100 text-green-700',
      announcement: 'bg-purple-100 text-purple-700',
      showcase: 'bg-orange-100 text-orange-700'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  const getCategoryName = (category: string) => {
    const names = {
      discussion: 'Discussion',
      question: 'Question',
      announcement: 'Announcement',
      showcase: 'Showcase'
    }
    return names[category as keyof typeof names] || category
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-green-500/30">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'border-primary-500 dark:border-green-500 text-primary-600 dark:text-green-400'
                  : 'border-transparent text-gray-500 dark:text-green-300 hover:text-gray-700 dark:hover:text-green-200 hover:border-gray-300 dark:hover:border-green-500/50'
              }`}
            >
              {tab.name}
              <span className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                activeTab === tab.id
                  ? 'bg-primary-100 dark:bg-green-500/30 text-primary-600 dark:text-green-300'
                  : 'bg-gray-100 dark:bg-green-500/20 text-gray-600 dark:text-green-400'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {communityPosts.map((post) => (
          <article key={post.id} className="card p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              {/* Author Avatar */}
              <div className="flex-shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>

              {/* Post Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {getCategoryName(post.category)}
                    </span>
                    {post.pinned && (
                      <div className="flex items-center text-orange-600">
                        <Pin className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-green-400">
                    {formatDate(post.publishedAt)}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-green-300 mb-2 hover:text-primary-600 dark:hover:text-green-400 transition-colors duration-200">
                  <Link href={`/community/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 dark:text-green-200/70 mb-4 line-clamp-3">
                  {post.content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-green-500/20 text-gray-600 dark:text-green-300 rounded text-sm hover:bg-gray-200 dark:hover:bg-green-500/30 transition-colors duration-200 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Post Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-green-400">
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.replies} replies</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes} likes</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900 dark:text-green-300">{post.author.name}</p>
                      <p className="text-xs text-gray-500 dark:text-green-400">{post.author.role}</p>
                    </div>
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
          Load More Discussions
        </button>
      </div>
    </div>
  )
}

export default CommunityTabs


