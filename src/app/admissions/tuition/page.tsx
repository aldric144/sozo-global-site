import type { Metadata } from 'next'
import Link from 'next/link'
import { tuitionInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Tuition & Fees',
  description: 'SOZO Global tuition information, payment plans, scholarships, and financial resources.',
}

export default function TuitionPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Tuition & Fees</h1>
          <p className="text-xl text-blue-100">Investing in Your Kingdom Calling</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            SOZO Global is committed to making Kingdom education accessible. We offer flexible
            payment options and financial resources to help you pursue your calling.
          </p>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-xl font-bold text-sozo-blue mb-4">Application Fee</h2>
            <p className="text-2xl font-bold text-sozo-gold">{tuitionInfo.applicationFee}</p>
          </div>

          <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-4">Financial Information</h2>
          <ul className="space-y-3 mb-10">
            {tuitionInfo.details.map((detail) => (
              <li key={detail} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                <span className="text-gray-700">{detail}</span>
              </li>
            ))}
          </ul>

          <div className="bg-sozo-blue rounded-xl p-8 text-white">
            <h3 className="text-xl font-serif font-bold mb-3 text-sozo-gold">Need Financial Assistance?</h3>
            <p className="text-blue-200 mb-4">
              We believe finances should never stand between you and your calling. Contact our
              Financial Aid Team to discuss scholarships, payment plans, and sponsorship options.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-sozo-gold text-sozo-blue px-6 py-3 rounded-lg font-bold hover:bg-sozo-gold-light transition-colors"
            >
              Contact Financial Aid
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
