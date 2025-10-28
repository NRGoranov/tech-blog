import { Star, TrendingUp, Users, Award, Shield, Zap } from 'lucide-react'

const ReviewsHeader = () => {
  const features = [
    {
      icon: Star,
      title: 'Expert Reviews',
      description: 'In-depth analysis by industry professionals'
    },
    {
      icon: Shield,
      title: 'Unbiased Opinions',
      description: 'Honest reviews without sponsored bias'
    },
    {
      icon: Zap,
      title: 'Latest Products',
      description: 'Reviews of cutting-edge technology'
    }
  ]

  const stats = [
    { label: 'Products Reviewed', value: '200+' },
    { label: 'Expert Reviewers', value: '15+' },
    { label: 'Average Rating', value: '4.2/5' },
    { label: 'Trusted by', value: '25K+' },
  ]

  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 dark:from-secondary-900 dark:to-secondary-900 dark:border-b dark:border-green-500/30 text-white py-20">
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <Star className="w-7 h-7" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">Product Reviews</h1>
            </div>
            
            <p className="text-xl text-primary-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Get honest, in-depth reviews of the latest technology products. 
              Our expert reviewers test everything from software to hardware, 
              helping you make informed purchasing decisions.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-200 text-sm">{stat.label}</div>
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
                  <p className="text-primary-100">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsHeader


