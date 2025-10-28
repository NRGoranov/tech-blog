import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Eye, Heart, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blogData'

const BlogGrid = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: 'bg-purple-100 text-purple-700',
      software: 'bg-blue-100 text-blue-700',
      hardware: 'bg-green-100 text-green-700',
      news: 'bg-orange-100 text-orange-700',
      tutorial: 'bg-indigo-100 text-indigo-700'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  const getCategoryName = (category: string) => {
    const names = {
      ai: 'AI & ML',
      software: 'Software Dev',
      hardware: 'Hardware',
      news: 'Tech News',
      tutorial: 'Tutorial'
    }
    return names[category as keyof typeof names] || category
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-green-300">Latest Articles</h2>
          <p className="text-gray-600 dark:text-green-200/70 mt-1">
            Discover the newest insights and trends in technology
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 dark:border-green-500/30 dark:bg-black/30 dark:text-green-300 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-500 focus:border-transparent">
            <option>Latest</option>
            <option>Most Popular</option>
            <option>Most Viewed</option>
            <option>Most Liked</option>
          </select>
        </div>
      </div>

      {/* Featured Post */}
      {blogPosts.find(post => post.featured) && (
        <div className="card card-hover overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-full">
              <Image
                src={blogPosts.find(post => post.featured)!.image}
                alt={blogPosts.find(post => post.featured)!.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(blogPosts.find(post => post.featured)!.category)}`}>
                  {getCategoryName(blogPosts.find(post => post.featured)!.category)}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-green-300 mb-4 leading-tight">
                {blogPosts.find(post => post.featured)!.title}
              </h3>
              
              <p className="text-gray-600 dark:text-green-200/70 mb-6 leading-relaxed">
                {blogPosts.find(post => post.featured)!.excerpt}
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-green-400">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{blogPosts.find(post => post.featured)!.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(blogPosts.find(post => post.featured)!.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts.find(post => post.featured)!.readTime} min</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-green-400">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{blogPosts.find(post => post.featured)!.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{blogPosts.find(post => post.featured)!.likes}</span>
                  </div>
                </div>
              </div>
              
              <Link 
                href={`/blog/${blogPosts.find(post => post.featured)!.id}`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-green-400 dark:hover:text-green-300 font-medium group"
              >
                Read Full Article
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.filter(post => !post.featured).map((post) => (
          <article key={post.id} className="card card-hover overflow-hidden">
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                  {getCategoryName(post.category)}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-gray-900 dark:text-green-300 mb-3 leading-tight line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-green-200/70 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-green-400 mb-4">
                <div className="flex items-center space-x-2">
                  <User className="w-3 h-3" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-green-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime} min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{post.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-3 h-3" />
                    <span>{post.likes}</span>
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-primary-600 hover:text-primary-700 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <button className="btn-primary">
          Load More Articles
        </button>
      </div>
    </div>
  )
}

export default BlogGrid


