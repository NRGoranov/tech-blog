import { Code2, TrendingUp, Users, BookOpen } from 'lucide-react'

const BlogHeader = () => {
  const stats = [
    { icon: BookOpen, label: 'Total Articles', value: '500+' },
    { icon: TrendingUp, label: 'Monthly Readers', value: '50K+' },
    { icon: Users, label: 'Expert Authors', value: '25+' },
    { icon: Code2, label: 'Tech Categories', value: '6' },
  ]

  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 dark:from-secondary-900 dark:to-secondary-900 dark:border-b dark:border-green-500/30 text-white py-20">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
              <Code2 className="w-7 h-7" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">Tech Blog</h1>
          </div>
          
          <p className="text-xl text-primary-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Explore the latest insights in technology, software development, AI, hardware, 
            and more. Our expert authors bring you comprehensive articles, tutorials, and 
            industry analysis.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-200 text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogHeader


