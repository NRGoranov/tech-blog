export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  category: 'software' | 'ai' | 'hardware' | 'news' | 'tutorial'
  tags: string[]
  publishedAt: string
  readTime: number
  image: string
  featured: boolean
  views: number
  likes: number
}

export interface Review {
  id: string
  title: string
  product: string
  category: 'software' | 'hardware' | 'service' | 'book' | 'course'
  rating: number
  pros: string[]
  cons: string[]
  summary: string
  detailedReview: string
  author: {
    name: string
    avatar: string
    expertise: string
  }
  publishedAt: string
  image: string
  price?: string
  affiliateLink?: string
  tags: string[]
}

export interface Tutorial {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: 'programming' | 'web-dev' | 'mobile' | 'data-science' | 'devops' | 'ai'
  estimatedTime: string
  prerequisites: string[]
  steps: TutorialStep[]
  author: {
    name: string
    avatar: string
    expertise: string
  }
  publishedAt: string
  image: string
  tags: string[]
  codeExamples?: CodeExample[]
}

export interface TutorialStep {
  id: string
  title: string
  description: string
  code?: string
  explanation?: string
  tips?: string[]
}

export interface CodeExample {
  id: string
  title: string
  language: string
  code: string
  description: string
}

export interface CommunityPost {
  id: string
  title: string
  content: string
  author: {
    name: string
    avatar: string
    role: string
  }
  category: 'discussion' | 'question' | 'announcement' | 'showcase'
  tags: string[]
  publishedAt: string
  replies: number
  views: number
  likes: number
  pinned: boolean
}


