'use client'

import { useState } from 'react'
import { MessageCircle, Image, Link as LinkIcon, Send } from 'lucide-react'

const DiscussionForm = () => {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('discussion')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Creating discussion:', { title, content, category })
    // Reset form
    setTitle('')
    setContent('')
  }

  return (
    <div className="card p-6 mb-8">
      <div className="flex items-center space-x-2 mb-6">
        <MessageCircle className="w-6 h-6 text-primary-600" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-green-300">Start a Discussion</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-green-300 mb-2">
            Discussion Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full px-4 py-3 border border-gray-300 dark:border-green-500/30 dark:bg-black/30 dark:text-green-300 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-500 focus:border-transparent transition-colors duration-200"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-green-300 mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-green-500/30 dark:bg-black/30 dark:text-green-300 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-500 focus:border-transparent transition-colors duration-200"
          >
            <option value="discussion">General Discussion</option>
            <option value="question">Question</option>
            <option value="announcement">Announcement</option>
            <option value="showcase">Showcase</option>
          </select>
        </div>

        {/* Content */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-green-300 mb-2">
            What would you like to discuss?
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your thoughts, ask questions, or start a conversation..."
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 dark:border-green-500/30 dark:bg-black/30 dark:text-green-300 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-none"
            required
          />
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-green-300 mb-2">
            Tags (optional)
          </label>
          <input
            type="text"
            id="tags"
            placeholder="Add tags separated by commas (e.g., React, JavaScript, Tutorial)"
            className="w-full px-4 py-3 border border-gray-300 dark:border-green-500/30 dark:bg-black/30 dark:text-green-300 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-500 focus:border-transparent transition-colors duration-200"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Image className="w-5 h-5" />
              <span>Image</span>
            </button>
            <button
              type="button"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-green-300 hover:text-gray-700 dark:hover:text-green-200 hover:bg-gray-100 dark:hover:bg-green-500/20 rounded-lg transition-colors duration-200"
            >
              <LinkIcon className="w-5 h-5" />
              <span>Link</span>
            </button>
          </div>
          
          <button
            type="submit"
            className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <Send className="w-5 h-5" />
            <span>Post Discussion</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default DiscussionForm


