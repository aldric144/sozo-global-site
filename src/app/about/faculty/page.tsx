import type { Metadata } from 'next'
import Link from 'next/link'
import { faculty } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Faculty & Staff',
  description: 'Meet the Spirit-filled leaders, seasoned practitioners, and apostolic voices of SOZO Global.',
}

export default function FacultyPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Faculty & Staff</h1>
          <p className="text-xl text-blue-100">Spirit-filled leaders with a heart for global transformation</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At SOZO Global, our faculty and staff are not just educators—they are Spirit-filled leaders,
            seasoned practitioners, and apostolic voices with a heart for global transformation. Each
            team member is hand-selected for their commitment to biblical truth, supernatural
            demonstration, academic excellence, and Kingdom character.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            Through personal mentorship, prophetic guidance, and hands-on impartation, our faculty
            don&apos;t just teach about revival—they live it and release it.
          </p>

          <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-6">Core Values of Our Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              'Biblical Integrity — Rooted in sound doctrine',
              'Supernatural Lifestyle — Flowing in prophecy, healing, and miracles',
              'Academic Excellence — Highly trained in theology and leadership',
              'Discipleship-Focused — Committed to student spiritual growth',
              'Diversity-Minded — Representing a global Kingdom family',
              'Servant Leadership — Modeling humility and apostolic responsibility',
            ].map((value) => (
              <div key={value} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                <span className="text-gray-700 text-sm">{value}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-8">Our Leadership & Faculty</h2>
          <div className="space-y-6">
            {faculty.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-sozo-blue">{member.name}</h3>
                <p className="text-sozo-gold font-medium text-sm mb-3">{member.title}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-sozo-blue rounded-xl p-8 text-white text-center">
            <h3 className="text-xl font-serif font-bold mb-3">Join the SOZO Faculty</h3>
            <p className="text-blue-200 mb-4">
              Are you a passionate, Spirit-led teacher with a call to train global revivalists?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-sozo-gold text-sozo-blue px-6 py-3 rounded-lg font-bold hover:bg-sozo-gold-light transition-colors"
            >
              Contact Us About Faculty Openings
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
