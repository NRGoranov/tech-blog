import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, ArrowRight, Eye, Heart } from 'lucide-react'
import { featuredPosts } from '@/data/blogData'

const FeaturedPosts = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
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
    <section className="py-20 bg-white dark:bg-secondary-900">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-green-300 mb-4">
            Featured Articles
          </h2>
          <p className="text-xl text-gray-600 dark:text-green-200/80 max-w-3xl mx-auto">
            Discover our most popular and trending articles covering the latest in technology, 
            programming, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Post */}
          <div className="lg:col-span-2">
            <article className="card card-hover h-full">
              <div className="relative h-64 lg:h-80">
                <Image
                  src={featuredPosts[0].image}
                  alt={featuredPosts[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPosts[0].category)}`}>
                    {getCategoryName(featuredPosts[0].category)}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-green-300 mb-4 leading-tight">
                  {featuredPosts[0].title}
                </h3>
                <p className="text-gray-600 dark:text-green-200/70 mb-6 leading-relaxed">
                  {featuredPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPosts[0].author.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(featuredPosts[0].publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPosts[0].readTime} min read</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{featuredPosts[0].views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{featuredPosts[0].likes}</span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${featuredPosts[0].id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          </div>

          {/* Side Featured Posts */}
          <div className="space-y-6">
            {featuredPosts.slice(1).map((post) => (
              <article key={post.id} className="card card-hover">
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
                  <p className="text-gray-600 dark:text-green-200/70 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <span>{post.author.name}</span>
                      <span>•</span>
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn-primary inline-flex items-center">
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts


