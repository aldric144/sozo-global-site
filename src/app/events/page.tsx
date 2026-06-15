import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'
import { events } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Events & Kingdom Calendar',
  description: 'Upcoming SOZO Global events — conferences, enrollment deadlines, summits, prophetic encounters, and more.',
}

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Events & Kingdom Calendar</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            The move of God is not confined to classrooms—stay connected, stay equipped, stay ignited.
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-sozo-blue mb-10">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="border border-gray-200 rounded-xl overflow-hidden hover:border-sozo-gold hover:shadow-lg transition-all">
                <div className="bg-sozo-blue p-4">
                  <span className="inline-block px-3 py-1 bg-sozo-gold text-sozo-blue text-xs font-bold rounded-full">
                    {event.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-sozo-blue mb-3">{event.eventName}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-sozo-gold" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-sozo-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-sozo-gold" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <Link
                    href={event.registrationLink}
                    className="inline-flex items-center text-sm text-sozo-blue font-bold hover:text-sozo-gold transition-colors"
                  >
                    Register / Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-8 text-center">Event Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Supernatural Intensives',
              'Enrollment & Orientation',
              'Deliverance & Healing',
              'Course Start Dates',
              'Live Webinars',
              'Guest Speakers',
              'Chaplaincy Training',
              'Graduation Ceremonies',
            ].map((cat) => (
              <div key={cat} className="bg-white rounded-lg p-4 text-center text-sm font-medium text-sozo-blue border border-gray-200">
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 hero-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-4">Never Miss a Move of God</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to receive reminders, event updates, and early access to special events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sozo-gold"
            />
            <button type="submit" className="bg-sozo-gold text-sozo-blue px-8 py-3 rounded-lg font-bold hover:bg-sozo-gold-light transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
