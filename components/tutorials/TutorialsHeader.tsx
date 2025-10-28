import { BookOpen, Clock, Users, Code2, Play, Award } from 'lucide-react'

const TutorialsHeader = () => {
  const features = [
    {
      icon: Play,
      title: 'Step-by-Step Guides',
      description: 'Detailed tutorials with clear instructions'
    },
    {
      icon: Code2,
      title: 'Code Examples',
      description: 'Real-world code samples and projects'
    },
    {
      icon: Award,
      title: 'Expert Content',
      description: 'Created by industry professionals'
    }
  ]

  const stats = [
    { label: 'Tutorials Available', value: '150+' },
    { label: 'Total Hours', value: '500+' },
    { label: 'Students', value: '25K+' },
    { label: 'Success Rate', value: '95%' },
  ]

  const difficultyLevels = [
    { level: 'Beginner', color: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300', count: 60 },
    { level: 'Intermediate', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300', count: 70 },
    { level: 'Advanced', color: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300', count: 20 },
  ]

  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 dark:from-secondary-900 dark:to-secondary-900 dark:border-b dark:border-green-500/30 text-white py-20">
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-7 h-7" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">Tutorials</h1>
            </div>
            
            <p className="text-xl text-primary-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Master new skills with our comprehensive tutorials. From beginner to advanced, 
              learn programming, web development, AI, and more with step-by-step guides 
              and real-world projects.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

          {/* Difficulty Levels */}
          <div className="bg-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Difficulty Levels</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {difficultyLevels.map((difficulty, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-3 ${difficulty.color}`}>
                    {difficulty.level}
                  </div>
                  <div className="text-2xl font-bold mb-1">{difficulty.count}</div>
                  <div className="text-primary-200 text-sm">Tutorials</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TutorialsHeader


