'use client'

import React from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We&apos;d love to hear from you. Reach out for admissions, prayer, ministry inquiries, or general questions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-6">Send a Message</h2>
              <form className="space-y-5">
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent">
                    <option value="">Select a topic</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="ministry">Ministry Inquiry</option>
                    <option value="licensing">Ministry Licensing</option>
                    <option value="chaplaincy">Chaplaincy Information</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-sozo-gold text-sozo-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-sozo-gold-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sozo-blue rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-sozo-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-sozo-blue">Email</p>
                    <p className="text-gray-600">info@sozoglobal.school</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sozo-blue rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-sozo-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-sozo-blue">Phone</p>
                    <p className="text-gray-600">Contact for phone number</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sozo-blue rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-sozo-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-sozo-blue">Location</p>
                    <p className="text-gray-600">Palm Beach, Florida</p>
                    <p className="text-sm text-gray-500">Online & Hybrid Programs Worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sozo-blue rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-sozo-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-sozo-blue">Office Hours</p>
                    <p className="text-gray-600">Monday – Friday | 9 AM – 5 PM (EST)</p>
                  </div>
                </div>
              </div>

              {/* Schedule a Call */}
              <div id="schedule" className="bg-sozo-blue rounded-xl p-8 text-white">
                <h3 className="text-xl font-serif font-bold mb-3 text-sozo-gold">Schedule a Discovery Call</h3>
                <p className="text-blue-200 mb-4 text-sm">
                  Want to learn more about SOZO Global? Schedule a one-on-one call with our admissions
                  team to discuss your calling, program options, and next steps.
                </p>
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sozo-gold"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sozo-gold"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sozo-gold"
                  />
                  <button
                    type="submit"
                    className="w-full bg-sozo-gold text-sozo-blue px-6 py-3 rounded-lg font-bold hover:bg-sozo-gold-light transition-colors"
                  >
                    Request a Call
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Request */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-4">Submit a Prayer Request</h2>
          <p className="text-gray-600 mb-8">
            Our intercessory team prays over every request submitted. You are not alone in this season.
          </p>
          <form className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name (Optional)</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prayer Request *</label>
              <textarea rows={4} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sozo-gold focus:border-transparent" placeholder="Share your prayer need..." />
            </div>
            <div className="text-center">
              <button type="submit" className="bg-sozo-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-sozo-blue-light transition-colors">
                Submit Prayer Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
