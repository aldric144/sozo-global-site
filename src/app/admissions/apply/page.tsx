'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function ApplyPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Apply Now</h1>
          <p className="text-xl text-blue-100">Begin Your Journey at SOZO Global</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-xl font-bold text-sozo-blue mb-4">Before You Apply</h2>
            <ul className="space-y-3">
              {[
                'Review admission requirements for your desired program',
                'Prepare your personal salvation testimony',
                'Gather transcripts and references',
                'Have your $50 application fee ready',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-sozo-gold shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <form className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-sozo-blue">Application Form</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Program *</label>
              <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent">
                <option value="">Select your desired program</option>
                <option value="diploma">Diploma in Supernatural Biblical Ministry</option>
                <option value="masters">Master of Supernatural Leadership & Global Awakening</option>
                <option value="doctoral">Doctor of Supernatural Leadership & Global Awakening</option>
                <option value="chaplaincy">Chaplaincy Certification</option>
                <option value="certificates">Certificate Programs</option>
                <option value="licensing">Ministry Licensing & Ordination</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Personal Salvation Testimony *</label>
              <textarea rows={5} required placeholder="Share your testimony briefly..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Why are you called to this program? *</label>
              <textarea rows={4} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pastor/Ministry Reference Name & Contact</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent" />
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" required className="mt-1" />
              <label className="text-sm text-gray-700">
                I agree to SOZO Global&apos;s Code of Conduct and commit to spiritual growth and academic integrity. *
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-sozo-gold text-sozo-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-sozo-gold-light transition-colors"
            >
              Submit Application
            </button>

            <p className="text-sm text-gray-500 text-center">
              Application fee of $50 will be collected after submission. Questions?{' '}
              <Link href="/contact" className="text-sozo-blue underline">Contact us</Link>.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
