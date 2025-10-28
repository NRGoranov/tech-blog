import { BlogPost, Review, Tutorial, CommunityPost } from '@/types/blog'

export const featuredPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI: How Large Language Models Are Transforming Software Development',
    excerpt: 'Explore how AI is revolutionizing the way we write code, from automated testing to intelligent debugging tools.',
    content: 'Full article content would go here...',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      bio: 'Senior AI Research Engineer with 8+ years in machine learning and software development.'
    },
    category: 'ai',
    tags: ['AI', 'Machine Learning', 'Software Development', 'Future Tech'],
    publishedAt: '2024-01-15',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    featured: true,
    views: 15420,
    likes: 342
  },
  {
    id: '2',
    title: 'Building Scalable React Applications with Next.js 14',
    excerpt: 'Learn the latest features in Next.js 14 and how to build high-performance React applications that scale.',
    content: 'Full article content would go here...',
    author: {
      name: 'Mike Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Full-stack developer specializing in React, Node.js, and cloud architecture.'
    },
    category: 'software',
    tags: ['React', 'Next.js', 'JavaScript', 'Web Development'],
    publishedAt: '2024-01-12',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    featured: true,
    views: 8930,
    likes: 156
  },
  {
    id: '3',
    title: 'NVIDIA RTX 4090 Review: The Ultimate GPU for Content Creators',
    excerpt: 'Comprehensive review of NVIDIA\'s flagship GPU, testing performance across gaming, 3D rendering, and AI workloads.',
    content: 'Full article content would go here...',
    author: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      bio: 'Hardware reviewer and tech journalist with expertise in GPUs and PC components.'
    },
    category: 'hardware',
    tags: ['GPU', 'NVIDIA', 'Hardware Review', 'Gaming', 'Content Creation'],
    publishedAt: '2024-01-10',
    readTime: 15,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=400&fit=crop',
    featured: true,
    views: 22100,
    likes: 489
  }
]

export const blogPosts: BlogPost[] = [
  ...featuredPosts,
  {
    id: '4',
    title: 'Understanding TypeScript Generics: A Deep Dive',
    excerpt: 'Master TypeScript generics with practical examples and real-world use cases.',
    content: 'Full article content would go here...',
    author: {
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'TypeScript expert and software architect with 10+ years of experience.'
    },
    category: 'software',
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Tutorial'],
    publishedAt: '2024-01-08',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    featured: false,
    views: 5670,
    likes: 123
  },
  {
    id: '5',
    title: 'The Rise of Edge Computing: What Developers Need to Know',
    excerpt: 'Explore how edge computing is changing the landscape of web applications and IoT development.',
    content: 'Full article content would go here...',
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      bio: 'Cloud architect and IoT specialist with expertise in distributed systems.'
    },
    category: 'news',
    tags: ['Edge Computing', 'IoT', 'Cloud', 'Architecture'],
    publishedAt: '2024-01-05',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    featured: false,
    views: 3420,
    likes: 67
  }
]

export const reviews: Review[] = [
  {
    id: '1',
    title: 'MacBook Pro M3 Max Review: Powerhouse for Developers',
    product: 'MacBook Pro 16-inch with M3 Max',
    category: 'hardware',
    rating: 4.5,
    pros: [
      'Exceptional performance for development tasks',
      'Excellent battery life (up to 22 hours)',
      'Beautiful Liquid Retina XDR display',
      'Silent operation under normal loads'
    ],
    cons: [
      'Very expensive',
      'Limited upgrade options',
      'Can get hot under heavy loads'
    ],
    summary: 'The MacBook Pro M3 Max delivers exceptional performance for developers, with industry-leading battery life and a stunning display.',
    detailedReview: 'Full detailed review content would go here...',
    author: {
      name: 'Lisa Park',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      expertise: 'Hardware reviewer and developer tools specialist'
    },
    publishedAt: '2024-01-14',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=400&fit=crop',
    price: '$3,199',
    tags: ['MacBook', 'Apple', 'Laptop', 'Development']
  },
  {
    id: '2',
    title: 'VS Code Extensions That Every Developer Should Know',
    product: 'Visual Studio Code Extensions',
    category: 'software',
    rating: 4.8,
    pros: [
      'Huge variety of extensions available',
      'Easy installation and management',
      'Active community support',
      'Regular updates and improvements'
    ],
    cons: [
      'Some extensions can slow down performance',
      'Quality varies between extensions'
    ],
    summary: 'Essential VS Code extensions that will boost your productivity and streamline your development workflow.',
    detailedReview: 'Full detailed review content would go here...',
    author: {
      name: 'John Martinez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      expertise: 'Software developer and productivity tools expert'
    },
    publishedAt: '2024-01-11',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop',
    tags: ['VS Code', 'Extensions', 'Development Tools', 'Productivity']
  }
]

export const tutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Complete Guide to React Hooks',
    description: 'Learn how to use React Hooks effectively in your applications with practical examples and best practices.',
    difficulty: 'intermediate',
    category: 'web-dev',
    estimatedTime: '2 hours',
    prerequisites: ['Basic React knowledge', 'JavaScript ES6+', 'Node.js installed'],
    steps: [
      {
        id: '1',
        title: 'Introduction to Hooks',
        description: 'Understanding what hooks are and why they were introduced.',
        explanation: 'React Hooks allow you to use state and other React features without writing a class component.'
      },
      {
        id: '2',
        title: 'useState Hook',
        description: 'Learn how to manage component state with useState.',
        code: `const [count, setCount] = useState(0);`,
        explanation: 'useState returns a stateful value and a function to update it.'
      }
    ],
    author: {
      name: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      expertise: 'Senior React Developer and Technical Writer'
    },
    publishedAt: '2024-01-13',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    tags: ['React', 'Hooks', 'JavaScript', 'Frontend'],
    codeExamples: [
      {
        id: '1',
        title: 'Counter Component with useState',
        language: 'jsx',
        code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
        description: 'A simple counter component demonstrating useState hook'
      }
    ]
  },
  {
    id: '2',
    title: 'Building REST APIs with Node.js and Express',
    description: 'Create robust and scalable REST APIs using Node.js and Express framework.',
    difficulty: 'beginner',
    category: 'programming',
    estimatedTime: '3 hours',
    prerequisites: ['JavaScript knowledge', 'Basic understanding of HTTP', 'Node.js installed'],
    steps: [
      {
        id: '1',
        title: 'Setting up Express Server',
        description: 'Initialize a new Express application and set up basic routing.',
        explanation: 'Express is a minimal and flexible Node.js web application framework.'
      }
    ],
    author: {
      name: 'Tom Anderson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      expertise: 'Backend Developer and API Design Expert'
    },
    publishedAt: '2024-01-09',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    tags: ['Node.js', 'Express', 'API', 'Backend']
  }
]

export const communityPosts: CommunityPost[] = [
  {
    id: '1',
    title: 'What\'s your favorite programming language in 2024?',
    content: 'With so many new languages and frameworks emerging, I\'m curious about what the community is excited about this year.',
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      role: 'Community Member'
    },
    category: 'discussion',
    tags: ['programming', 'languages', 'discussion'],
    publishedAt: '2024-01-15',
    replies: 47,
    views: 234,
    likes: 23,
    pinned: false
  },
  {
    id: '2',
    title: 'Showcase: My AI-Powered Code Review Tool',
    content: 'I built a tool that uses AI to automatically review code and suggest improvements. Here\'s how it works...',
    author: {
      name: 'Sarah Kim',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      role: 'Contributor'
    },
    category: 'showcase',
    tags: ['AI', 'tools', 'code-review', 'showcase'],
    publishedAt: '2024-01-14',
    replies: 12,
    views: 156,
    likes: 45,
    pinned: true
  }
]


