import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, BookOpen, Heart, Wifi, GraduationCap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Student Life',
  description: 'Discover student services, scholarships, technology tools, spiritual formation, and alumni network at SOZO Global.',
}

export default function StudentLifePage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Student Life</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            More than academics — a Spirit-filled community of growth, support, and Kingdom purpose.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Student Services',
                desc: 'Dedicated support from enrollment through graduation. Our student services team provides academic advising, spiritual mentorship, and personal guidance.',
              },
              {
                icon: GraduationCap,
                title: 'Scholarships & Financial Grace',
                desc: 'We believe finances should never stand between you and your calling. Scholarships, payment plans, and sponsorship letters are available.',
              },
              {
                icon: Wifi,
                title: 'Technology Tools',
                desc: 'Canvas LMS, Zoom integration, digital library access, and tech support to ensure a seamless online learning experience.',
              },
              {
                icon: Heart,
                title: 'Spiritual Formation',
                desc: 'Weekly impartation, prophetic activations, personal mentorship, and spiritual wellness resources for holistic growth.',
              },
              {
                icon: Shield,
                title: 'Alumni Network',
                desc: 'Join a global community of SOZO graduates serving in ministry, marketplace, chaplaincy, and missions worldwide.',
              },
              {
                icon: BookOpen,
                title: 'Online Student Hub',
                desc: 'Access course materials, community forums, prayer groups, and ministry opportunities all in one place.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-8">
                <div className="w-12 h-12 bg-sozo-blue rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-sozo-gold" />
                </div>
                <h3 className="text-xl font-bold text-sozo-blue mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-sozo-blue text-center mb-10">
            What You&apos;ll Experience as a Student
          </h2>
          <ul className="space-y-4">
            {[
              'Intense biblical study and revelation-based learning',
              'Weekly impartation and prophetic activations',
              'Training in healing, deliverance, the prophetic, and supernatural evangelism',
              'Personal mentorship and spiritual formation',
              'Opportunities to serve, lead, and minister in real-world contexts',
              'A like-minded community of Spirit-filled leaders from across the globe',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Join the SOZO Community?</h2>
          <p className="text-blue-100 mb-8">Your journey into supernatural education starts here.</p>
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
