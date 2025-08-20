import React from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, GraduationCap, Award, Users } from 'lucide-react'

export default function AcademicsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Academic Programs
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover world-class education that combines academic rigor with 
              supernatural ministry training for global impact.
            </p>
          </div>
        </div>
      </section>

      {/* Degree Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">
              Degree Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive degree tracks designed to equip you 
              for leadership in ministry, missions, and marketplace influence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Diploma Track */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-blue-900 mb-3">Diploma Track</h3>
              <p className="text-gray-600 mb-4">
                Foundation-level program covering essential biblical studies and 
                supernatural ministry principles.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Duration: Details coming soon</p>
                <p className="text-sm text-gray-500">Delivery: Details coming soon</p>
              </div>
              <Link 
                href="/academics/diploma" 
                className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Master's Track */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-serif font-bold text-blue-900 mb-3">Master's Track</h3>
              <p className="text-gray-600 mb-4">
                Advanced theological education with specialization in supernatural 
                ministry and global leadership.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Duration: Details coming soon</p>
                <p className="text-sm text-gray-500">Delivery: Details coming soon</p>
              </div>
              <Link 
                href="/academics/masters" 
                className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Doctoral Track */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-blue-900 mb-3">Doctoral Track</h3>
              <p className="text-gray-600 mb-4">
                Highest level of academic achievement with research focus on 
                supernatural ministry and global transformation.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Duration: Details coming soon</p>
                <p className="text-sm text-gray-500">Delivery: Details coming soon</p>
              </div>
              <Link 
                href="/academics/doctoral" 
                className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Chaplaincy Certification */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-serif font-bold text-blue-900 mb-3">Chaplaincy Certification</h3>
              <p className="text-gray-600 mb-4">
                Specialized training for military, hospital, and corporate 
                chaplaincy with supernatural ministry integration.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Duration: Details coming soon</p>
                <p className="text-sm text-gray-500">Delivery: Details coming soon</p>
              </div>
              <Link 
                href="/academics/chaplaincy" 
                className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">
              Certificate Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our extensive collection of specialized certificates designed 
              to enhance your ministry skills and spiritual authority.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-blue-900" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">
              150+ Certificate Programs
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              From prophetic studies to marketplace ministry, discover specialized 
              training programs organized into 10 comprehensive categories.
            </p>
            <Link 
              href="/certificates" 
              className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors inline-flex items-center text-lg font-semibold"
            >
              Browse All Certificates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose SOZO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">
              Why Choose SOZO Global?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Academic Excellence</h3>
              <p className="text-gray-600">
                Rigorous academic standards combined with practical ministry application 
                for comprehensive spiritual education.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Global Community</h3>
              <p className="text-gray-600">
                Connect with students and faculty from over 50 nations in a 
                diverse, Spirit-led learning environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Supernatural Training</h3>
              <p className="text-gray-600">
                Unique integration of supernatural ministry training with traditional 
                theological education for complete preparation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
