import ReviewsHeader from '@/components/reviews/ReviewsHeader'
import ReviewsGrid from '@/components/reviews/ReviewsGrid'
import ReviewFilters from '@/components/reviews/ReviewFilters'

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-secondary-900">
      <ReviewsHeader />
      <div className="container-custom section-padding py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80">
              <ReviewFilters />
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              <ReviewsGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


