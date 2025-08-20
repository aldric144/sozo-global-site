import React from 'react'
import Link from 'next/link'
import { ArrowRight, Globe, Users, BookOpen, Award } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Equipping Believers.<br />
              Empowering Leaders.<br />
              <span className="text-yellow-500">Transforming Nations.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of students worldwide in Spirit-led education that bridges 
              academic excellence with supernatural ministry training.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/admissions" 
                className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/academics" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Explore Academics
              </Link>
              <Link 
                href="/resources#events" 
                className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 hover:text-blue-900 transition-colors"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blocks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About SOZO */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-blue-900 mb-3">About SOZO</h3>
              <p className="text-gray-600 mb-4">
                Discover our mission to equip believers with both academic excellence and 
                supernatural ministry training for global impact.
              </p>
              <Link 
                href="/about" 
                className="text-blue-900 font-semibold hover:text-yellow-500 flex items-center"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Our Programs */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-serif font-bold text-blue-900 mb-3">Our Programs</h3>
              <p className="text-gray-600 mb-4">
                From certificates to doctoral degrees, explore our comprehensive 
                programs designed for every stage of your ministry journey.
              </p>
              <Link 
                href="/academics" 
                className="text-blue-900 font-semibold hover:text-yellow-500 flex items-center"
              >
                View Programs
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Global Reach */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-blue-900 mb-3">Global Reach</h3>
              <p className="text-gray-600 mb-4">
                Join students from over 50 nations in our mission to transform 
                communities through supernatural ministry and biblical education.
              </p>
              <Link 
                href="/student-life" 
                className="text-blue-900 font-semibold hover:text-yellow-500 flex items-center"
              >
                Our Community
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Student Voices */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-serif font-bold text-blue-900 mb-3">Student Voices</h3>
              <p className="text-gray-600 mb-4">
                Hear from graduates who are making a difference in churches, 
                missions, and marketplace ministry around the world.
              </p>
              <Link 
                href="/student-life#testimonials" 
                className="text-blue-900 font-semibold hover:text-yellow-500 flex items-center"
              >
                Read Stories
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">
              Transforming Lives Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates are making an impact in every sphere of society, 
              from local churches to international missions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-blue-900">Maria Santos</h4>
                  <p className="text-gray-600 text-sm">Missionary, Brazil</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The prophetic training I received at SOZO transformed my ministry. 
                I'm now leading healing services that are impacting entire communities."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-blue-900 font-bold">D</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-blue-900">David Kim</h4>
                  <p className="text-gray-600 text-sm">Pastor, South Korea</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "SOZO's biblical leadership program equipped me with both practical 
                skills and spiritual authority. Our church has grown 300% in two years."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-blue-900">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Business Leader, USA</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The marketplace ministry certificate helped me integrate my faith 
                with business. I'm now mentoring Christian entrepreneurs globally."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Ministry?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who are being equipped for supernatural ministry 
            and global impact through our Spirit-led education programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/admissions" 
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors"
            >
              Start Your Application
            </Link>
            <Link 
              href="/certificates" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Browse Certificates
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
