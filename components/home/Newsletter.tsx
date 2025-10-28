'use client'

import { useState } from 'react'
import { Mail, Check, Send } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-secondary-900 dark:to-secondary-900 dark:border-t dark:border-green-500/30">
        <div className="container-custom section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome to TechBlog!
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              You're now subscribed to our newsletter. Get ready for the latest tech insights delivered to your inbox.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="text-white hover:text-primary-200 font-medium transition-colors duration-200"
            >
              Subscribe another email
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
          <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-secondary-900 dark:to-secondary-900 dark:border-t dark:border-green-500/30">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white dark:text-green-300">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Stay Updated with TechBlog
              </h2>
              <p className="text-xl text-primary-100 dark:text-green-200/80 mb-8 leading-relaxed">
                Get the latest technology insights, tutorials, and reviews delivered 
                directly to your inbox. Join thousands of developers and tech enthusiasts 
                who trust us for their daily tech news.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-200 dark:bg-green-400 rounded-full"></div>
                  <span className="text-primary-100 dark:text-green-200/80">Weekly curated tech articles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-200 dark:bg-green-400 rounded-full"></div>
                  <span className="text-primary-100 dark:text-green-200/80">Exclusive tutorials and guides</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-200 dark:bg-green-400 rounded-full"></div>
                  <span className="text-primary-100 dark:text-green-200/80">Early access to new content</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-200 dark:bg-green-400 rounded-full"></div>
                  <span className="text-primary-100 dark:text-green-200/80">No spam, unsubscribe anytime</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-black/50 dark:border dark:border-green-500/30 rounded-2xl p-8 shadow-xl dark:shadow-green-500/20">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 dark:bg-green-500/20 dark:border dark:border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-green-300 mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-600 dark:text-green-200/70">
                  Join 10,000+ subscribers and never miss an update
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-green-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-green-500/30 dark:bg-black/30 dark:text-green-300 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-green-600 dark:hover:bg-green-700 disabled:bg-primary-400 dark:disabled:bg-green-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Subscribe Now
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 dark:text-green-200/60 text-center">
                  By subscribing, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter


