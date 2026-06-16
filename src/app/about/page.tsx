import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, Award, Globe, Lightbulb } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About SOZO Global',
  description: 'Learn about SOZO Global School of the Supernatural & Biblical Studies — a private, Spirit-led Christian institution committed to equipping believers worldwide.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About SOZO Global</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A Private Prophetic Training Institution for Global Kingdom Leaders
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SOZO Global is a private, Spirit-led Christian school committed to equipping, empowering,
                and commissioning believers around the world to walk in supernatural identity, biblical
                wisdom, and apostolic authority. We are more than a school—we are a global equipping
                center for the end-time Church.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Rooted in the truth of Scripture and ignited by the power of the Holy Spirit, SOZO exists
                to raise and release bold reformers, compassionate healers, prophetic voices, and
                apostolic builders across every sphere of society.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"
                alt="Diverse students studying Scripture together"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-16">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Faculty mentoring students in small group setting"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-4">
                What Makes SOZO Global Unique?
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                  Full autonomy to develop robust, biblically faithful, and spiritually transformative curriculum
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                  Exclusive access to proprietary Certificate, Diploma, Master&apos;s, and Doctoral programs
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                  Training in both academic excellence and supernatural demonstration
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                  Intimate mentoring, hands-on ministry practicums, and personalized growth pathways
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                  Chaplaincy certification, fivefold ministry training, and marketplace evangelism in one model
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-4">
              Our Name: What Does &ldquo;SOZO&rdquo; Mean?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              &ldquo;Sozo&rdquo; (Greek σωζω) means to save, heal, and deliver. That&apos;s not just a mission
              statement—it&apos;s a prophetic declaration of what happens to every student who comes
              through these doors. At SOZO, we believe that true education heals the soul, empowers
              the spirit, and transforms lives for eternity.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-sozo-blue text-center mb-12">
            Our Core Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: 'Diversity', desc: 'A global family of Kingdom voices—multiethnic, multigenerational, and multicultural.' },
              { icon: Award, title: 'Excellence', desc: 'Spiritual fire matched by academic and organizational excellence in everything we do.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'Spirit-led, technology-forward, and apostolically future-ready education.' },
              { icon: BookOpen, title: 'Academic Distinction', desc: 'Supernatural revelation meets scholarly rigor at the intersection of depth and power.' },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-14 h-14 bg-sozo-blue rounded-lg flex items-center justify-center mx-auto mb-5">
                  <pillar.icon className="h-7 w-7 text-sozo-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-sozo-blue mb-3">{pillar.title}</h3>
                <p className="text-gray-600 text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Pages Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-sozo-blue text-center mb-12">
            Learn More About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Mission & Vision', href: '/about/mission', desc: 'Our God-given mandate and prophetic vision for global impact.' },
              { title: 'History of SOZO', href: '/about/history', desc: 'How SOZO Global was born from prophetic revelation and apostolic assignment.' },
              { title: "Founder's Biography", href: '/about/founder', desc: 'Meet Dr. Aldric Marshall, apostolic leader and visionary educator.' },
              { title: 'Faculty & Staff', href: '/about/faculty', desc: 'Spirit-filled leaders with a heart for global transformation.' },
              { title: 'Accreditation & Recognition', href: '/about/accreditation', desc: 'Our commitment to academic standards and Kingdom excellence.' },
            ].map((page) => (
              <Link
                key={page.title}
                href={page.href}
                className="border border-gray-200 rounded-xl p-6 hover:border-sozo-gold hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-bold text-sozo-blue mb-2 group-hover:text-sozo-gold transition-colors">
                  {page.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{page.desc}</p>
                <span className="inline-flex items-center text-sm text-sozo-blue font-medium group-hover:text-sozo-gold transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
