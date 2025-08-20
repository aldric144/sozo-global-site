import React from 'react'
import Link from 'next/link'
import { Search, Filter, BookOpen, ArrowRight } from 'lucide-react'
import { mockCategories } from '@/lib/sanity'

export default function CertificatesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Certificates of Biblical & Supernatural Studies
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover specialized training programs designed to enhance your ministry 
              skills and spiritual authority across 10 comprehensive categories.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search certificates by title or topic..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Filter Dropdowns */}
              <div className="flex flex-col sm:flex-row gap-4">
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                  <option value="">All Categories</option>
                  {mockCategories.map((category) => (
                    <option key={category._id} value={category.slug.current}>
                      {category.title}
                    </option>
                  ))}
                </select>

                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                  <option value="">Duration</option>
                  <option value="short">≤6 weeks</option>
                  <option value="medium">7-9 weeks</option>
                  <option value="long">10-12 weeks</option>
                  <option value="extended">12+ weeks</option>
                </select>

                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                  <option value="">Delivery</option>
                  <option value="online">Online</option>
                  <option value="in-person">In-Person</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">
              Certificate Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of certificate programs organized 
              into 10 specialized categories for focused ministry training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockCategories.map((category, index) => (
              <div key={category._id} className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-blue-900 mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500">Category {category.order}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Specialized training programs in {category.title.toLowerCase()} 
                  designed to enhance your ministry effectiveness and spiritual authority.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 bg-yellow-100 px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                  <Link 
                    href={`/certificates/${category.slug.current}`}
                    className="text-blue-900 font-semibold hover:text-yellow-500 flex items-center"
                  >
                    View Category
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Enhance Your Ministry?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who are advancing their ministry skills 
            through our specialized certificate programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/admissions" 
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors"
            >
              Apply for Certificates
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Request Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
