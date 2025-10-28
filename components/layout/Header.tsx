'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Menu, X, Code2, Sun, Moon } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Community', href: '/community' },
  ]

  return (
    <header className="bg-white dark:bg-secondary-900/95 dark:backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-green-500/30 sticky top-0 z-50">
      <div className="container-custom section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-green-400 dark:to-emerald-300 rounded-lg flex items-center justify-center dark:matrix-glow group-hover:scale-110 transition-transform duration-300 ring-2 ring-transparent dark:ring-green-500/30">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">TechBlog</span>
              {mounted && theme === 'dark' && (
                <span className="hidden sm:block text-xs font-mono neon-text">MATRIX.exe</span>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-green-300 hover:text-primary-600 dark:hover:text-yellow-400 font-medium transition-all duration-300 dark:hover:drop-shadow-[0_0_8px_rgba(229,255,0,0.8)] relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 dark:bg-green-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & Mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200 border border-gray-200 dark:border-green-900/50 dark:hover:border-green-500/50 dark:hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            )}
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200 border border-gray-200 dark:border-green-900/50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 dark:text-green-300" />
              ) : (
                <Menu className="w-6 h-6 dark:text-green-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-green-900/50">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 dark:text-green-300 hover:text-primary-600 dark:hover:text-yellow-400 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg font-medium transition-all duration-300 dark:hover:drop-shadow-[0_0_8px_rgba(229,255,0,0.5)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header


