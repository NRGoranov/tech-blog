import BlogHeader from '@/components/blog/BlogHeader'
import BlogGrid from '@/components/blog/BlogGrid'
import CategoryFilter from '@/components/blog/CategoryFilter'
import SearchBar from '@/components/blog/SearchBar'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-secondary-900">
      <BlogHeader />
      <div className="container-custom section-padding py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80 space-y-6">
              <SearchBar />
              <CategoryFilter />
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              <BlogGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


