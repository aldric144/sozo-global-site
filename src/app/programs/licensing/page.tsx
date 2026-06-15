import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Shield, Award, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ministry Licensing & Ordination',
  description: 'SOZO Global Ministry Licensing Program — answering the call, equipping the commissioned, releasing the anointed.',
}

export default function LicensingPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Ministry Licensing & Ordination</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Answering the Call. Equipping the Commissioned. Releasing the Anointed.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At SOZO Global, we believe that true Kingdom leaders are not only educated—they are
            commissioned, licensed, and affirmed for the work of the ministry. Whether you&apos;re called
            to preach, teach, serve in the prophetic, counsel the broken, or build apostolic movements,
            our Ministry Licensing Program is designed to recognize, equip, and release those walking
            in their God-given calling with accountability and authority.
          </p>

          <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-4">What is Ministry Licensing?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ministry Licensing is the formal acknowledgment and legal recognition of a believer&apos;s
            spiritual authority to operate in a specific area of ministry. Licensing opens doors for:
          </p>
          <ul className="space-y-2 mb-10 text-gray-700">
            <li className="flex items-start gap-3"><span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" /> Preaching and teaching in churches and ministries</li>
            <li className="flex items-start gap-3"><span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" /> Officiating weddings and funerals</li>
            <li className="flex items-start gap-3"><span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" /> Pastoral and chaplaincy service</li>
            <li className="flex items-start gap-3"><span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" /> Hospital, prison, or marketplace ministry</li>
            <li className="flex items-start gap-3"><span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" /> Spiritual counseling and deliverance work</li>
          </ul>

          {/* Three Levels */}
          <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-6">Licensing Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-gray-200 rounded-xl p-6 hover:border-sozo-gold transition-colors">
              <div className="w-10 h-10 bg-sozo-blue rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-5 w-5 text-sozo-gold" />
              </div>
              <h3 className="text-lg font-bold text-sozo-blue mb-2">Level I: Ministry License</h3>
              <p className="text-gray-600 text-sm">For emerging leaders, evangelists, and new ministers operating under supervision.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 hover:border-sozo-gold transition-colors">
              <div className="w-10 h-10 bg-sozo-blue rounded-lg flex items-center justify-center mb-4">
                <Award className="h-5 w-5 text-sozo-gold" />
              </div>
              <h3 className="text-lg font-bold text-sozo-blue mb-2">Level II: Ordination</h3>
              <p className="text-gray-600 text-sm">For active ministers with proven fruit, doctrinal soundness, and spiritual maturity.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 hover:border-sozo-gold transition-colors">
              <div className="w-10 h-10 bg-sozo-blue rounded-lg flex items-center justify-center mb-4">
                <Users className="h-5 w-5 text-sozo-gold" />
              </div>
              <h3 className="text-lg font-bold text-sozo-blue mb-2">Level III: Five-Fold Commissioning</h3>
              <p className="text-gray-600 text-sm">For apostolic and prophetic leaders, church planters, or movement builders commissioned into global ministry roles.</p>
            </div>
          </div>

          {/* Who Can Apply */}
          <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-4">Who Can Apply?</h2>
          <ul className="space-y-3 mb-10">
            {[
              "Graduates of our Diploma, Master's, or Doctoral Programs",
              'Verified ministers who have completed equivalent approved training elsewhere',
              'Active leaders in churches, chaplaincy, nonprofits, or itinerant ministries',
              'Those called to full-time, part-time, or marketplace ministry',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-sozo-gold shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          {/* Requirements */}
          <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-4">Licensing Requirements</h2>
          <ul className="space-y-3 mb-10 text-gray-700">
            {[
              'Submit a Ministry Licensing Application',
              'Provide evidence of theological training (e.g., diploma or transcripts)',
              'Write a personal statement of call and doctrinal alignment',
              'Complete an interview and character assessment',
              'Submit two letters of spiritual reference',
              'Complete our Ministerial Ethics & Accountability Module',
              "Agree to SOZO's Code of Conduct & Lifestyle Covenant",
            ].map((req) => (
              <li key={req} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                {req}
              </li>
            ))}
          </ul>

          {/* What You Receive */}
          <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-4">Your SOZO License Includes</h2>
          <ul className="space-y-3 mb-10 text-gray-700">
            {[
              'Official Certificate of Ministry License or Ordination',
              'Inclusion in the SOZO Ministerial Registry',
              'Legal authority to perform ministerial duties where applicable',
              'Apostolic covering, mentorship, and accountability',
              'Access to ministerial ID, ministry insurance partners, and more',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-sozo-gold shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Annual Renewal */}
          <div className="bg-gray-50 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold text-sozo-blue mb-3">Annual Renewal & Ongoing Support</h3>
            <p className="text-gray-700 mb-4">To maintain active licensing, ministers must:</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-sozo-gold rounded-full mt-1.5 shrink-0" /> Complete annual renewal paperwork</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-sozo-gold rounded-full mt-1.5 shrink-0" /> Submit a brief ministry activity report</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-sozo-gold rounded-full mt-1.5 shrink-0" /> Attend at least one SOZO Ministerial Summit or Regional Gathering annually</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-sozo-gold rounded-full mt-1.5 shrink-0" /> Maintain good standing with ethical and lifestyle standards</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/admissions/apply" className="bg-sozo-gold text-sozo-blue px-8 py-4 rounded-lg font-bold text-center hover:bg-sozo-gold-light transition-colors">
              Apply for Ministry Licensing
            </Link>
            <Link href="/contact#schedule" className="border-2 border-sozo-blue text-sozo-blue px-8 py-4 rounded-lg font-bold text-center hover:bg-sozo-blue hover:text-white transition-colors">
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
