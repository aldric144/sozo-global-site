import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { admissionRequirements } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Admissions',
  description: 'Apply to SOZO Global — discover admission requirements for certificate, diploma, masters, and doctoral programs.',
}

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover Your Divine Assignment — Step into Alignment with Your Calling
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At SOZO Global, admissions isn&apos;t just enrollment—it&apos;s an encounter with destiny.
            Whether you&apos;re entering ministry for the first time or advancing into apostolic leadership,
            we offer transformational tracks designed to meet you at your spiritual and academic level.
          </p>

          {/* Quick links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[
              { label: 'Process', href: '/admissions/process' },
              { label: 'Tuition & Fees', href: '/admissions/tuition' },
              { label: 'Request Info', href: '/admissions/request-info' },
              { label: 'Apply Now', href: '/admissions/apply' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-sozo-blue hover:text-white transition-colors group"
              >
                <span className="font-medium">{link.label}</span>
                <ArrowRight className="h-4 w-4 group-hover:text-sozo-gold" />
              </Link>
            ))}
          </div>

          {/* General Requirements */}
          <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-4">General Requirements (All Applicants)</h2>
          <ul className="space-y-3 mb-10">
            {admissionRequirements.general.map((req) => (
              <li key={req} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-sozo-gold shrink-0 mt-0.5" />
                <span className="text-gray-700">{req}</span>
              </li>
            ))}
          </ul>

          {/* By Program */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-sozo-blue mb-3">Certificate & Diploma Applicants</h3>
              <ul className="space-y-2">
                {admissionRequirements.diploma.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-sozo-blue mb-3">Master&apos;s Program (MSLGA)</h3>
              <ul className="space-y-2">
                {admissionRequirements.masters.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-sozo-blue mb-3">Doctoral Program (DSLGA)</h3>
              <ul className="space-y-2">
                {admissionRequirements.doctoral.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/admissions/apply" className="bg-sozo-gold text-sozo-blue px-8 py-4 rounded-lg font-bold text-center hover:bg-sozo-gold-light transition-colors">
              Apply Now
            </Link>
            <Link href="/contact#schedule" className="border-2 border-sozo-blue text-sozo-blue px-8 py-4 rounded-lg font-bold text-center hover:bg-sozo-blue hover:text-white transition-colors">
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
