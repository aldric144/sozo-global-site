import React from 'react'
import Link from 'next/link'
import { ArrowRight, Clock, Users, BookOpen, Award } from 'lucide-react'
import { notFound } from 'next/navigation'

const mockPrograms = [
  {
    slug: 'diploma',
    title: 'Diploma in Supernatural Biblical Ministry',
    level: 'Diploma',
    overview: 'Details coming soon',
    outcomes: [],
    admissionRequirements: 'Details coming soon',
    curriculumNote: '',
    programLength: '',
    totalCredits: null,
    delivery: '',
    tuitionNote: '',
    courses: []
  },
  {
    slug: 'masters',
    title: "Master's in Supernatural Ministry Leadership",
    level: "Master's",
    overview: 'Details coming soon',
    outcomes: [],
    admissionRequirements: 'Details coming soon',
    curriculumNote: '',
    programLength: '',
    totalCredits: null,
    delivery: '',
    tuitionNote: '',
    courses: []
  },
  {
    slug: 'doctoral',
    title: 'Doctor of Ministry in Global Transformation',
    level: 'Doctoral',
    overview: 'Details coming soon',
    outcomes: [],
    admissionRequirements: 'Details coming soon',
    curriculumNote: '',
    programLength: '',
    totalCredits: null,
    delivery: '',
    tuitionNote: '',
    courses: []
  },
  {
    slug: 'chaplaincy',
    title: 'Chaplaincy Certification Program',
    level: 'Chaplaincy',
    overview: 'Details coming soon',
    outcomes: [],
    admissionRequirements: 'Details coming soon',
    curriculumNote: '',
    programLength: '',
    totalCredits: null,
    delivery: '',
    tuitionNote: '',
    courses: []
  }
]

interface PageProps {
  params: {
    programSlug: string
  }
}

export default function ProgramPage({ params }: PageProps) {
  const program = mockPrograms.find(p => p.slug === params.programSlug)
  
  if (!program) {
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
                <Link href="/academics" className="text-gray-500 hover:text-blue-900">Academics</Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-blue-900 font-medium">{program.level}</span>
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
              {program.level} Program
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {program.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {program.overview === 'Details coming soon' ? 
                'Program details are being finalized. Please check back soon for comprehensive information about this exciting program.' :
                program.overview
              }
            </p>
          </div>
        </div>
      </section>

      {/* Program Quick Facts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="h-8 w-8 text-blue-900 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-900 mb-2">Duration</h3>
              <p className="text-gray-600">
                {program.programLength || 'Details coming soon'}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <BookOpen className="h-8 w-8 text-blue-900 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-900 mb-2">Credits</h3>
              <p className="text-gray-600">
                {program.totalCredits ? `${program.totalCredits} credits` : 'Details coming soon'}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users className="h-8 w-8 text-blue-900 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-900 mb-2">Delivery</h3>
              <p className="text-gray-600">
                {program.delivery || 'Details coming soon'}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="h-8 w-8 text-blue-900 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-900 mb-2">Tuition</h3>
              <p className="text-gray-600">
                {program.tuitionNote || 'Details coming soon'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8 text-center">
            Program Overview
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              {program.overview === 'Details coming soon' ? 
                'Our comprehensive program overview is currently being developed. This program will combine academic excellence with supernatural ministry training, preparing students for effective leadership in their chosen field. Please check back soon for detailed information about curriculum, learning outcomes, and program structure.' :
                program.overview
              }
            </p>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8 text-center">
            Intended Learning Outcomes
          </h2>
          <div className="bg-gray-50 rounded-lg p-8">
            {program.outcomes.length > 0 ? (
              <ul className="space-y-4">
                {program.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{outcome}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 text-center">
                Learning outcomes are being finalized. Please check back soon for detailed information about what you'll achieve in this program.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8 text-center">
            Curriculum
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            {program.courses.length > 0 ? (
              <div className="space-y-6">
                {/* Group courses by quarter would go here */}
                <p className="text-gray-600">Course listings will be displayed here.</p>
              </div>
            ) : (
              <div className="text-center">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  Curriculum outline is being finalized. Please check back soon.
                </p>
                {program.curriculumNote && (
                  <p className="text-gray-500 mt-2">{program.curriculumNote}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8 text-center">
            Admission Requirements
          </h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              {program.admissionRequirements === 'Details coming soon' ? 
                'Admission requirements are being finalized. Please check back soon for detailed information about prerequisites, application materials, and the admission process.' :
                program.admissionRequirements
              }
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Take the next step toward transforming your ministry and impacting nations 
            through supernatural biblical education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/admissions" 
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors inline-flex items-center justify-center"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
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
