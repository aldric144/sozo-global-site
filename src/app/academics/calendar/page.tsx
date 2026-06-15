import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Academic Calendar',
  description: 'View the SOZO Global academic calendar including quarter dates, enrollment deadlines, and key academic events.',
}

export default function CalendarPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Academic Calendar</h1>
          <p className="text-xl text-blue-100">2025–2026 Academic Year</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            SOZO Global operates on a quarter-based academic structure. Doctoral and certificate tracks
            may follow modified intensive or modular formats. All calendar dates are subject to change.
            National holidays are observed.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            You&apos;ll receive access to our full academic calendar via your Canvas dashboard, including
            exam periods, registration deadlines, ministry trips, and special events.
          </p>

          <div className="space-y-6">
            {[
              { quarter: 'Fall Quarter', dates: 'September – November 2025', events: ['Orientation & Welcome Session', 'New Student Enrollment Opens', 'Ministry Practicum Begins'] },
              { quarter: 'Winter Quarter', dates: 'January – March 2026', events: ['Winter Enrollment Deadline', 'Mid-Year Evaluations', 'Prophetic Summit'] },
              { quarter: 'Spring Quarter', dates: 'April – June 2026', events: ['Spring Enrollment Opens', 'Research Presentations', 'Guest Speaker Series'] },
              { quarter: 'Summer Quarter', dates: 'July – August 2026', events: ['Summer Intensive Programs', 'SOZO Fire & Glory Conference', 'Graduation Ceremony'] },
            ].map((q) => (
              <div key={q.quarter} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-sozo-blue mb-1">{q.quarter}</h3>
                <p className="text-sozo-gold font-medium text-sm mb-3">{q.dates}</p>
                <ul className="space-y-2">
                  {q.events.map((event) => (
                    <li key={event} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-sozo-gold rounded-full shrink-0" />
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> This is a general overview. For the complete, detailed academic
              calendar with specific dates, please log into your Canvas student portal or contact
              the Admissions & Records office.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
