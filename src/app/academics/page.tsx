import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { departments } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Academics',
  description: 'Explore SOZO Global academic programs, departments, and research across 12 core schools offering 150+ programs.',
}

export default function AcademicsPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Academics</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Spirit-led instruction, biblical truth, and practical activation across 12 core schools.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-sozo-blue mb-6">Academic Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At SOZO Global, our academic approach is deeply rooted in biblical truth, Spirit-led
            instruction, and practical activation. Our programs are designed to cultivate mature,
            Spirit-empowered believers who walk in authority, revelation, and purpose.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            We offer a dynamic blend of theological study, supernatural ministry training, spiritual
            leadership development, and advanced research opportunities. Whether you&apos;re pursuing a
            certificate, diploma, or doctoral degree, our academic pathways are designed to deepen
            your faith, sharpen your gifts, and equip you for Kingdom impact globally.
          </p>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[
              { label: 'Departments', href: '/academics/departments' },
              { label: 'Calendar', href: '/academics/calendar' },
              { label: 'Policies', href: '/academics/policies' },
              { label: 'Research', href: '/academics/research' },
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
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-sozo-blue text-center mb-12">
            Our 12 Academic Schools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <div key={dept.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-sozo-gold transition-colors">
                <span className="inline-block w-8 h-8 bg-sozo-blue text-white text-sm font-bold rounded-full flex items-center justify-center mb-3">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-sozo-blue mb-2">{dept.name}</h3>
                <p className="text-gray-600 text-sm">{dept.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-sozo-blue mb-6">Educational Philosophy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            SOZO Global stands at the unique intersection of biblical depth, doctrinal accuracy, and
            intellectual excellence. Every course—whether in prophetic ministry, Kingdom economics,
            or deliverance—is grounded in Scripture, scholarly sources, and Spirit-breathed insight.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Students are trained to think critically, study the Word deeply, and apply revelation
            responsibly. We don&apos;t just teach students what to believe—we train them to know why,
            how, and when to move with Kingdom precision.
          </p>
        </div>
      </section>

      <section className="py-16 hero-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-4">Begin Your Academic Journey</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions/apply" className="bg-sozo-gold text-sozo-blue px-8 py-4 rounded-lg font-bold hover:bg-sozo-gold-light transition-colors">
              Apply Now
            </Link>
            <Link href="/programs" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-sozo-blue transition-colors">
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
