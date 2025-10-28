import { Users, MessageCircle, TrendingUp, Award, Heart, Zap } from 'lucide-react'

const CommunityHeader = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Tech Discussions',
      description: 'Engage in meaningful conversations about technology'
    },
    {
      icon: TrendingUp,
      title: 'Trending Topics',
      description: 'Stay updated with what\'s hot in tech'
    },
    {
      icon: Award,
      title: 'Expert Insights',
      description: 'Learn from industry professionals and thought leaders'
    }
  ]

  const stats = [
    { label: 'Active Members', value: '10K+' },
    { label: 'Daily Discussions', value: '500+' },
    { label: 'Expert Contributors', value: '50+' },
    { label: 'Solved Problems', value: '2K+' },
  ]

  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 dark:from-secondary-900 dark:to-secondary-900 dark:border-b dark:border-green-500/30 text-white py-20">
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-7 h-7" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">Tech Community</h1>
            </div>
            
            <p className="text-xl text-primary-100 dark:text-green-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join thousands of developers, designers, and tech enthusiasts in discussions, 
              sharing knowledge, and collaborating on projects. Ask questions, share insights, 
              and grow together in the world of technology.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-200 dark:text-green-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-primary-100 dark:text-green-200">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunityHeader


