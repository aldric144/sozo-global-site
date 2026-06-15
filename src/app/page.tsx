import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Globe, Users, BookOpen, Award, GraduationCap, Heart, Calendar, Star } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80"
            alt="Students collaborating"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A174E]/95 via-[#0A174E]/85 to-[#1a2a6c]/75" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="/logo.jpg"
                  alt="SOZO Global"
                  width={96}
                  height={96}
                  className="rounded-full border-2 border-sozo-gold shadow-2xl"
                />
                <div>
                  <p className="text-sozo-gold font-bold text-sm tracking-widest uppercase">SOZO Global</p>
                  <p className="text-blue-200 text-xs">School of the Supernatural & Biblical Studies</p>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Empowering Nations.<br />
                Advancing the Kingdom.<br />
                <span className="text-sozo-gold">Transforming Lives.</span>
              </h1>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
                A world-class institution equipping believers through Spirit-led education,
                supernatural ministry training, and academic excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/admissions/apply"
                  className="bg-sozo-gold text-sozo-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-sozo-gold-light transition-colors flex items-center justify-center shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/programs"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-sozo-blue transition-colors text-center"
                >
                  Explore Programs
                </Link>
                <Link
                  href="/contact#schedule"
                  className="border-2 border-sozo-gold text-sozo-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-sozo-gold hover:text-sozo-blue transition-colors text-center"
                >
                  Schedule a Discovery Call
                </Link>
              </div>
            </div>

            {/* Right: Image grid showcasing diverse community */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80"
                    alt="Students in graduation ceremony"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
                    alt="Professor teaching class"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
                    alt="Diverse group of students studying together"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80"
                    alt="Students in worship and fellowship"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sozo-blue mb-6">
              Welcome to SOZO Global
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              SOZO Global is a private, Spirit-led Christian school committed to equipping, empowering,
              and commissioning believers around the world to walk in supernatural identity, biblical
              wisdom, and apostolic authority. We are more than a school—we are a global equipping
              center for the end-time Church.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Rooted in the truth of Scripture and ignited by the power of the Holy Spirit, SOZO
              exists to raise and release bold reformers, compassionate healers, prophetic voices,
              and apostolic builders across every sphere of society.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sozo-blue mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From foundational certificates to doctoral degrees, discover a path that matches your calling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Diploma Program',
                desc: 'Diploma in Supernatural Biblical Ministry — foundational training in theology, spiritual gifts, and ministry.',
                href: '/programs/diploma',
              },
              {
                icon: GraduationCap,
                title: "Master's Program",
                desc: 'Master of Supernatural Leadership & Global Awakening (MSLGA) — advanced leadership and theological education.',
                href: '/programs/masters',
              },
              {
                icon: Award,
                title: 'Doctoral Program',
                desc: 'Doctor of Supernatural Leadership & Global Awakening (DSLGA) — the highest level of academic achievement.',
                href: '/programs/doctoral',
              },
              {
                icon: Heart,
                title: 'Chaplaincy Certification',
                desc: 'Comprehensive chaplaincy training for hospitals, law enforcement, military, and crisis ministry.',
                href: '/programs/chaplaincy',
              },
              {
                icon: Users,
                title: 'Ministry Licensing & Ordination',
                desc: 'Formal recognition and commissioning for Kingdom leaders with accountability and authority.',
                href: '/programs/licensing',
              },
              {
                icon: Globe,
                title: 'Continuing Education',
                desc: 'Masterclasses, workshops, and short-term courses for ongoing spiritual and professional development.',
                href: '/programs/continuing-education',
              },
            ].map((program) => (
              <Link
                key={program.title}
                href={program.href}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-sozo-blue rounded-lg flex items-center justify-center mb-5 group-hover:bg-sozo-gold transition-colors">
                  <program.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-sozo-blue mb-3 group-hover:text-sozo-gold transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{program.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center text-sozo-blue font-bold hover:text-sozo-gold transition-colors text-lg"
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-sozo-blue mb-6">
                A Word from Our Founder
              </h2>
              <blockquote className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-sozo-gold pl-6 mb-6">
                &ldquo;We are not just educating minds—we are igniting mantles. SOZO Global
                was born out of a deep burden and prophetic call to equip a global remnant
                for end-time Kingdom impact.&rdquo;
              </blockquote>
              <p className="text-gray-700 mb-4">
                Dr. Aldric Marshall is an apostolic leader, bestselling author, and visionary
                educator with advanced degrees in counseling and organizational leadership.
                Having spoken at the United Nations and trained law enforcement professionals,
                he leads SOZO with boldness, compassion, and Kingdom clarity.
              </p>
              <Link
                href="/about/founder"
                className="inline-flex items-center text-sozo-blue font-bold hover:text-sozo-gold transition-colors"
              >
                Read Full Biography
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-sozo-blue to-sozo-blue-light rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-serif font-bold mb-6 text-sozo-gold">Why SOZO?</h3>
              <ul className="space-y-4">
                {[
                  'Spirit-led & academically rigorous',
                  'Global faculty of apostolic leaders',
                  'Canvas-powered university structure',
                  'Certificate through Doctoral programs',
                  'Hands-on ministry practicums',
                  'Personal mentorship & spiritual formation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-sozo-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '150+', label: 'Programs & Certificates' },
              { num: '12', label: 'Academic Schools' },
              { num: 'Global', label: 'Student Community' },
              { num: '100%', label: 'Online & Flexible' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-sozo-gold mb-2">{stat.num}</p>
                <p className="text-blue-200 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sozo-blue mb-4">
              Student Testimonials
            </h2>
            <p className="text-lg text-gray-600">Hear from students whose lives have been transformed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'SOZO has completely transformed my understanding of supernatural ministry. The faculty pours into you personally and prophetically.',
                name: 'Minister Sarah T.',
                program: 'Diploma Program',
              },
              {
                quote: 'The doctoral program challenged me academically while deepening my walk with the Holy Spirit. I am a more effective leader because of SOZO.',
                name: 'Dr. James K.',
                program: 'Doctoral Program',
              },
              {
                quote: 'As a chaplain, the training I received at SOZO equipped me for real-world crisis ministry in ways no other school could.',
                name: 'Chaplain Maria L.',
                program: 'Chaplaincy Certification',
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-5 w-5 text-sozo-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-sozo-blue">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.program}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sozo-blue mb-4">
              Upcoming Events
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'SOZO Fire & Glory Conference',
                date: 'TBA',
                location: 'Palm Beach, FL & Livestream',
                desc: 'A 3-day apostolic and prophetic encounter featuring global revivalists, worship leaders, and hands-on supernatural equipping.',
              },
              {
                title: 'Winter Quarter Enrollment Deadline',
                date: 'September 1, 2026',
                location: 'Online',
                desc: 'All students enrolling in Q1 must complete registration and Canvas onboarding.',
              },
              {
                title: 'Global Awakening Virtual Summit',
                date: 'TBA',
                location: 'Zoom & Facebook Live',
                desc: 'Topic: "Spiritual Intelligence & Apostolic Governance in Chaotic Times"',
              },
            ].map((event) => (
              <div key={event.title} className="border border-gray-200 rounded-xl p-6 hover:border-sozo-gold transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-sozo-gold" />
                  <span className="text-sm font-medium text-sozo-gold">{event.date}</span>
                </div>
                <h3 className="text-lg font-bold text-sozo-blue mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{event.location}</p>
                <p className="text-sm text-gray-600">{event.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/events"
              className="inline-flex items-center text-sozo-blue font-bold hover:text-sozo-gold transition-colors"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Stay Connected</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to receive updates on events, enrollment deadlines, and Kingdom resources.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sozo-gold"
            />
            <button
              type="submit"
              className="bg-sozo-gold text-sozo-blue px-8 py-3 rounded-lg font-bold hover:bg-sozo-gold-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
