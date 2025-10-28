import TutorialsHeader from '@/components/tutorials/TutorialsHeader'
import TutorialsGrid from '@/components/tutorials/TutorialsGrid'
import TutorialFilters from '@/components/tutorials/TutorialFilters'

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-secondary-900">
      <TutorialsHeader />
      <div className="container-custom section-padding py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80">
              <TutorialFilters />
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              <TutorialsGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


