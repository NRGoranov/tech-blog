import Link from 'next/link'
import { ArrowRight, Code2, Brain, Cpu, Zap } from 'lucide-react'

const Hero = () => {
  const stats = [
    { label: 'Articles', value: '500+' },
    { label: 'Tutorials', value: '150+' },
    { label: 'Community Members', value: '10K+' },
    { label: 'Reviews', value: '200+' },
  ]

  const features = [
    {
      icon: Code2,
      title: 'Latest Tech',
      description: 'Stay updated with cutting-edge technology trends'
    },
    {
      icon: Brain,
      title: 'AI Insights',
      description: 'Deep dives into artificial intelligence and machine learning'
    },
    {
      icon: Cpu,
      title: 'Hardware Reviews',
      description: 'Comprehensive reviews of the latest tech hardware'
    },
    {
      icon: Zap,
      title: 'Quick Tutorials',
      description: 'Step-by-step guides for developers of all levels'
    }
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-900 dark:to-secondary-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-0"></div>
      
      <div className="container-custom section-padding relative">
        <div className="py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-green-500/20 dark:text-green-400 text-primary-700 rounded-full text-sm font-medium border border-green-500/30">
                  🚀 Welcome to TechBlog
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-green-300 leading-tight">
                  Your Gateway to
                  <span className="block gradient-text">Tech Innovation</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-green-200/80 leading-relaxed max-w-2xl">
                  Discover the latest in technology, learn from expert tutorials, 
                  read comprehensive reviews, and join a thriving community of tech enthusiasts.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/blog" className="btn-primary inline-flex items-center justify-center group">
                  Explore Articles
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link href="/tutorials" className="btn-secondary inline-flex items-center justify-center">
                  Start Learning
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-green-500/30">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-green-400">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-green-200/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="card p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary-100 dark:bg-green-500/20 dark:border dark:border-green-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-green-500/30 transition-colors duration-200">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-green-200/70 text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  )
}

export default Hero


