import Hero from '@/components/home/Hero'
import FeaturedPosts from '@/components/home/FeaturedPosts'
import Categories from '@/components/home/Categories'
import Newsletter from '@/components/home/Newsletter'

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-secondary-900">
      <Hero />
      <FeaturedPosts />
      <Categories />
      <Newsletter />
    </div>
  )
}


