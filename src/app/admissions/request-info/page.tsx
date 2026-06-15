'use client'

import React from 'react'

export default function RequestInfoPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Request Information</h1>
          <p className="text-xl text-blue-100">Learn more about SOZO Global programs and admissions</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            Fill out the form below to receive detailed information about our programs, admissions
            process, and financial options. A member of our admissions team will reach out within
            24-48 hours.
          </p>
          <form className="space-y-6">
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Program of Interest *</label>
              <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent">
                <option value="">Select a program</option>
                <option value="diploma">Diploma Program</option>
                <option value="masters">Master&apos;s Program (MSLGA)</option>
                <option value="doctoral">Doctoral Program (DSLGA)</option>
                <option value="chaplaincy">Chaplaincy Certification</option>
                <option value="certificates">Certificate Programs</option>
                <option value="licensing">Ministry Licensing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Questions or Comments</label>
              <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent" />
            </div>
            <button
              type="submit"
              className="w-full bg-sozo-gold text-sozo-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-sozo-gold-light transition-colors"
            >
              Request Information
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
