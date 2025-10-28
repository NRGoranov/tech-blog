import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechBlog - Technology Insights & Tutorials',
  description: 'Your ultimate destination for technology news, tutorials, reviews, and community discussions. Stay updated with the latest in software development, AI, hardware, and more.',
  keywords: 'technology, programming, AI, software development, tutorials, reviews, tech news',
  authors: [{ name: 'TechBlog Team' }],
  openGraph: {
    title: 'TechBlog - Technology Insights & Tutorials',
    description: 'Your ultimate destination for technology news, tutorials, reviews, and community discussions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-secondary-900 dark:text-green-300 antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col relative dark:bg-secondary-900">
            {/* Matrix-style dark mode background grid - full site */}
            <div className="hidden dark:block fixed inset-0 pointer-events-none z-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 0, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 0, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
            
            {/* Floating background elements */}
            <div className="hidden dark:block fixed inset-0 overflow-hidden pointer-events-none z-0">
              <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/5 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-float"></div>
              <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-500/5 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-float animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-80 h-80 bg-green-400/5 rounded-full mix-blend-screen filter blur-xl opacity-35 animate-float animation-delay-4000"></div>
            </div>
            
            <Header />
            <main className="flex-1 relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


