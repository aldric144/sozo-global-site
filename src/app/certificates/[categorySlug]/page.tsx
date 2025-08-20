import React from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, Clock, Users } from 'lucide-react'
import { notFound } from 'next/navigation'
import { mockCategories } from '@/lib/sanity'

interface PageProps {
  params: {
    categorySlug: string
  }
}

export default function CategoryPage({ params }: PageProps) {
  const category = mockCategories.find(c => c.slug.current === params.categorySlug)
  
  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-blue-900">Home</Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link href="/certificates" className="text-gray-500 hover:text-blue-900">Certificates</Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-blue-900 font-medium">{category.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-yellow-500 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Category {category.order}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {category.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Specialized certificate programs designed to enhance your ministry 
              effectiveness and spiritual authority in {category.title.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-lg p-12">
            <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-12 w-12 text-blue-900" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're currently developing comprehensive certificate programs for {category.title}. 
              These specialized courses will provide in-depth training and practical application 
              for ministry excellence in this area.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-900 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-900 mb-1">Duration</h3>
                <p className="text-gray-600 text-sm">6-12 weeks typical</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-blue-900 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-900 mb-1">Format</h3>
                <p className="text-gray-600 text-sm">Online and In-Person</p>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-blue-900 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-900 mb-1">Modules</h3>
                <p className="text-gray-600 text-sm">3-6 per certificate</p>
              </div>
            </div>

            <p className="text-gray-500 mb-6">
              Be the first to know when these programs become available. 
              Sign up for updates or contact us for more information.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
              >
                Get Notified
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/certificates" 
                className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-900 hover:text-white transition-colors"
              >
                Browse Other Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-4">
              Explore Other Categories
            </h2>
            <p className="text-xl text-gray-600">
              Discover additional certificate programs across our comprehensive curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockCategories
              .filter(c => c._id !== category._id)
              .slice(0, 3)
              .map((relatedCategory) => (
                <div key={relatedCategory._id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-blue-900 mb-3">
                    {relatedCategory.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Specialized training in {relatedCategory.title.toLowerCase()} 
                    for ministry excellence.
                  </p>
                  <Link 
                    href={`/certificates/${relatedCategory.slug.current}`}
                    className="text-blue-900 font-semibold hover:text-yellow-500 flex items-center"
                  >
                    View Category
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
