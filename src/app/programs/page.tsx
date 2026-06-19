import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Monitor } from 'lucide-react'
import { programs } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Explore SOZO Global programs — Diploma, Masters, Doctoral, Chaplaincy, Ministry Licensing, and 150+ continuing education certificates.',
}

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From foundational certificates to doctoral degrees — discover the program that matches your calling.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program) => (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="block bg-white border border-gray-200 rounded-xl p-8 hover:border-sozo-gold hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-sozo-blue text-white text-xs font-bold rounded-full mb-3">
                      {program.degreeType}
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-3 group-hover:text-sozo-gold transition-colors">
                      {program.programName}
                    </h2>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {program.duration}</span>
                      <span className="flex items-center gap-1"><Monitor className="h-4 w-4" /> {program.delivery}</span>
                    </div>
                  </div>
                  <div className="lg:shrink-0">
                    <span className="inline-flex items-center text-sozo-blue font-bold group-hover:text-sozo-gold transition-colors">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-blue-100 mb-8">Take the first step toward your divine assignment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions/apply" className="bg-sozo-gold text-sozo-blue px-8 py-4 rounded-lg font-bold hover:bg-sozo-gold-light transition-colors">
              Apply Now
            </Link>
            <Link href="/contact#schedule" className="border-2 border-sozo-gold text-sozo-gold px-8 py-4 rounded-lg font-bold hover:bg-sozo-gold hover:text-sozo-blue transition-colors">
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
