import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, Monitor, CheckCircle } from 'lucide-react'
import { programs, courses } from '@/lib/data'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const program = programs.find((p) => p.slug === slug)
  if (!program) return {}
  return {
    title: program.shortTitle,
    description: program.description,
  }
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params
  const program = programs.find((p) => p.slug === slug)
  if (!program) notFound()

  const programCourses = courses.filter(
    (c) => c.program.toLowerCase() === program.degreeType.toLowerCase()
  )

  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-sozo-gold text-sozo-blue text-sm font-bold rounded-full mb-4">
            {program.degreeType}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">{program.programName}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">{program.description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Program Info */}
          <div className="flex flex-wrap gap-6 mb-10 p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-sozo-gold" />
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="font-medium text-sozo-blue">{program.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Monitor className="h-5 w-5 text-sozo-gold" />
              <div>
                <p className="text-xs text-gray-500">Delivery</p>
                <p className="font-medium text-sozo-blue">{program.delivery}</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-6">Program Highlights</h2>
          <ul className="space-y-4 mb-12">
            {program.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-sozo-gold shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          {/* Courses */}
          {programCourses.length > 0 && (
            <>
              <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-6">Course Catalog</h2>
              <div className="space-y-3 mb-12">
                {programCourses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:border-sozo-gold transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="text-sm font-mono font-bold text-sozo-blue">{course.courseNumber}</span>
                      <span className="text-gray-700 font-medium">{course.courseName}</span>
                      <span className="sm:ml-auto text-sm text-gray-500">{course.credits} Credits</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{course.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Admission Requirements */}
          <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-6">Admission Requirements</h2>
          <ul className="space-y-3 mb-12">
            {program.admissionRequirements.map((req) => (
              <li key={req} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                <span className="text-gray-700">{req}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/admissions/apply"
              className="bg-sozo-gold text-sozo-blue px-8 py-4 rounded-lg font-bold text-center hover:bg-sozo-gold-light transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/admissions"
              className="border-2 border-sozo-blue text-sozo-blue px-8 py-4 rounded-lg font-bold text-center hover:bg-sozo-blue hover:text-white transition-colors"
            >
              View All Requirements
            </Link>
            <Link
              href="/contact#schedule"
              className="border-2 border-sozo-gold text-sozo-gold px-8 py-4 rounded-lg font-bold text-center hover:bg-sozo-gold hover:text-sozo-blue transition-colors"
            >
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
