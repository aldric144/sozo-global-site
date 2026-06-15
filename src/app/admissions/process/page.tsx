import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Admission Process',
  description: 'Step-by-step guide to applying to SOZO Global — from application to enrollment.',
}

export default function ProcessPage() {
  const steps = [
    { num: 1, title: 'Apply Online', desc: "Choose your track (Certificate, Master's, Doctorate) and submit the application." },
    { num: 2, title: 'Document Upload', desc: 'Provide transcripts, references, testimony, and creative work (if applicable).' },
    { num: 3, title: 'Application Fee', desc: '$50 non-refundable fee (applies to all programs).' },
    { num: 4, title: "Review & Interview (Master's/Doctoral Only)", desc: 'We prayerfully assess your application and may request a virtual interview.' },
    { num: 5, title: 'Decision Notification', desc: 'Expect a decision in 7–10 business days.' },
    { num: 6, title: 'Enrollment Packet + Orientation Access', desc: "Upon acceptance, you'll receive your class schedule, login credentials, and next steps." },
    { num: 7, title: 'SOZO Welcome Session', desc: 'Every semester begins with a powerful time of impartation, activation, and Kingdom community.' },
  ]

  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Admission Process</h1>
          <p className="text-xl text-blue-100">Your Step-by-Step Journey to Enrollment</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            SOZO has a spiritually sensitive, academically sound admissions process. Follow these
            steps to begin your journey:
          </p>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-sozo-blue text-white font-bold rounded-full shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-sozo-blue">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h3 className="text-lg font-bold text-sozo-blue mb-2">Admissions & Records Office</h3>
            <p className="text-gray-700 text-sm mb-2">
              Our team is here to track application status, review transfer credits, manage
              registration, and support alumni records.
            </p>
            <p className="text-gray-600 text-sm">Office Hours: Monday–Friday | 9 AM–5 PM (EST)</p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/admissions/apply" className="inline-block bg-sozo-gold text-sozo-blue px-8 py-4 rounded-lg font-bold hover:bg-sozo-gold-light transition-colors">
              Start Your Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
