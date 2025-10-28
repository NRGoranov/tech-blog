import Link from 'next/link'
import { Code2, Brain, Cpu, Newspaper, BookOpen, Users, Star, Zap } from 'lucide-react'

const Categories = () => {
  const categories = [
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Programming languages, frameworks, and development practices',
      href: '/blog?category=software',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      posts: '150+'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Artificial intelligence, deep learning, and data science',
      href: '/blog?category=ai',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      posts: '80+'
    },
    {
      icon: Cpu,
      title: 'Hardware & Gadgets',
      description: 'Reviews, comparisons, and insights on tech hardware',
      href: '/blog?category=hardware',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      posts: '120+'
    },
    {
      icon: Newspaper,
      title: 'Tech News',
      description: 'Latest technology news, trends, and industry updates',
      href: '/blog?category=news',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      posts: '200+'
    },
    {
      icon: BookOpen,
      title: 'Tutorials',
      description: 'Step-by-step guides and how-to articles',
      href: '/tutorials',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      posts: '150+'
    },
    {
      icon: Star,
      title: 'Reviews',
      description: 'In-depth product reviews and comparisons',
      href: '/reviews',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      posts: '200+'
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-secondary-900">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-green-300 mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 dark:text-green-200/80 max-w-3xl mx-auto">
            Dive deep into specific technology topics that interest you most. 
            Our content is organized to help you find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link
                key={index}
                href={category.href}
                className="group"
              >
                <div className={`${category.bgColor} dark:bg-black/50 dark:border dark:border-green-500/30 rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 dark:group-hover:shadow-green-500/20`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${category.color} dark:from-green-500 dark:to-emerald-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-green-400">
                      {category.posts}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-green-300 mb-3 group-hover:text-gray-700 dark:group-hover:text-green-200 transition-colors duration-200">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-green-200/70 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-gray-700 dark:text-green-400 group-hover:text-gray-900 dark:group-hover:text-green-300 transition-colors duration-200">
                    Explore Category
                    <Zap className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-white dark:bg-black/50 dark:border dark:border-green-500/30 rounded-full shadow-sm border border-gray-200 dark:shadow-green-500/20">
            <Users className="w-5 h-5 text-primary-600 dark:text-green-400 mr-2" />
            <span className="text-gray-700 dark:text-green-300 font-medium">
              Join our community of 10,000+ tech enthusiasts
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories


