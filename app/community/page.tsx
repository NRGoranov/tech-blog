import CommunityHeader from '@/components/community/CommunityHeader'
import CommunityTabs from '@/components/community/CommunityTabs'
import DiscussionForm from '@/components/community/DiscussionForm'
import CommunitySidebar from '@/components/community/CommunitySidebar'

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-secondary-900">
      <CommunityHeader />
      <div className="container-custom section-padding py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80">
              <CommunitySidebar />
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              <DiscussionForm />
              <CommunityTabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


