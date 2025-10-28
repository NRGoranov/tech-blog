import Link from 'next/link'
import { Users, TrendingUp, Star, MessageCircle, HelpCircle, Megaphone, Trophy } from 'lucide-react'

const CommunitySidebar = () => {
  const categories = [
    { id: 'all', name: 'All Discussions', icon: MessageCircle, count: 1250 },
    { id: 'discussion', name: 'General Discussion', icon: MessageCircle, count: 450 },
    { id: 'question', name: 'Q&A', icon: HelpCircle, count: 380 },
    { id: 'announcement', name: 'Announcements', icon: Megaphone, count: 120 },
    { id: 'showcase', name: 'Showcase', icon: Trophy, count: 300 },
  ]

  const topContributors = [
    { name: 'Sarah Chen', role: 'Senior Developer', posts: 245, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' },
    { name: 'Mike Rodriguez', role: 'Tech Lead', posts: 198, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
    { name: 'Alex Thompson', role: 'DevOps Engineer', posts: 156, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
    { name: 'Emma Wilson', role: 'UI/UX Designer', posts: 142, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' },
  ]

  const trendingTopics = [
    'React 18 New Features',
    'AI Development Tools',
    'Web3 Development',
    'Cloud Architecture',
    'Mobile App Security',
  ]

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <Link href="/community/new" className="w-full btn-primary text-center block">
            Start Discussion
          </Link>
          <Link href="/community/ask" className="w-full btn-secondary text-center block">
            Ask Question
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.id}
                href={`/community?category=${category.id}`}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-green-500/10 transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-gray-600 dark:text-green-400 group-hover:text-primary-600 dark:group-hover:text-green-300 transition-colors duration-200" />
                  <span className="font-medium text-gray-700 dark:text-green-200 group-hover:text-gray-900 dark:group-hover:text-green-300 transition-colors duration-200">
                    {category.name}
                  </span>
                </div>
                <span className="px-2 py-1 bg-gray-100 dark:bg-green-500/20 text-gray-600 dark:text-green-400 rounded-full text-xs font-medium">
                  {category.count}
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Top Contributors */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4 flex items-center">
          <Star className="w-5 h-5 mr-2 text-yellow-500" />
          Top Contributors
        </h3>
        <div className="space-y-3">
          {topContributors.map((contributor, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="w-10 h-10 rounded-full"
                />
                {index === 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-green-300 text-sm">{contributor.name}</p>
                <p className="text-xs text-gray-500 dark:text-green-400">{contributor.role}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-green-300">{contributor.posts}</p>
                <p className="text-xs text-gray-500 dark:text-green-400">posts</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
          Trending Topics
        </h3>
        <div className="space-y-2">
          {trendingTopics.map((topic, index) => (
            <Link
              key={index}
              href={`/community?topic=${topic.toLowerCase().replace(/\s+/g, '-')}`}
              className="block p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-green-500/10 transition-colors duration-200"
            >
              <p className="text-sm font-medium text-gray-700 dark:text-green-200 hover:text-gray-900 dark:hover:text-green-300 transition-colors duration-200">
                {topic}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 dark:text-green-300 mb-4">Community Guidelines</h3>
        <div className="space-y-2 text-sm text-gray-600 dark:text-green-200">
          <div className="flex items-start space-x-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>Be respectful and constructive</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>Search before asking questions</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>Provide helpful answers</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>Share knowledge and resources</span>
          </div>
        </div>
        <Link href="/community/guidelines" className="text-primary-600 hover:text-primary-700 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium mt-3 block">
          Read Full Guidelines →
        </Link>
      </div>
    </div>
  )
}

export default CommunitySidebar


