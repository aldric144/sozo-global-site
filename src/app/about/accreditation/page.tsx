import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accreditation & Recognition',
  description: 'SOZO Global is committed to the highest standards of academic excellence and Kingdom-aligned accreditation.',
}

export default function AccreditationPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Accreditation & Recognition</h1>
          <p className="text-xl text-blue-100">Our Commitment to Academic Excellence</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            SOZO Global School of the Supernatural & Biblical Studies is committed to the highest
            standards of academic excellence, spiritual integrity, and institutional accountability.
            As a private, faith-based institution, we operate with full autonomy to develop biblically
            faithful, Spirit-led curriculum while maintaining rigorous academic standards.
          </p>

          <h2 className="text-2xl font-serif font-bold text-sozo-blue mt-10 mb-4">Our Academic Standards</h2>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
              University-level course structure with numbered courses and credit hours
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
              Canvas LMS-powered learning management system
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
              Faculty with advanced theological and professional degrees
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
              Rigorous assessment, scholarly research requirements, and dissertation standards
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
              Structured academic calendar with quarterly progression
            </li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-sozo-blue mt-10 mb-4">Affiliations & Partnerships</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            SOZO Global maintains partnerships with chaplaincy organizations, city leaders, victim
            advocacy networks, and ministry organizations worldwide. We are actively pursuing
            additional affiliations and recognition as we continue to grow.
          </p>

          <div className="bg-gray-50 rounded-xl p-8 mt-10">
            <h3 className="text-xl font-serif font-bold text-sozo-blue mb-3">Private Institution Status</h3>
            <p className="text-gray-700 leading-relaxed">
              As a private institution, SOZO Global operates with the freedom to develop curriculum
              that is both academically rigorous and Spirit-led, without compromise to secular
              standards that might limit supernatural pedagogy. Our programs are designed to prepare
              students for real-world ministry impact while maintaining scholarly excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
