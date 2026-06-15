import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Founder's Biography",
  description: 'Meet Dr. Aldric Marshall — apostolic leader, bestselling author, and visionary educator who founded SOZO Global.',
}

export default function FounderPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Founder&apos;s Biography</h1>
          <p className="text-xl text-blue-100">Dr. Aldric Marshall, Ph.D., Ed.D. (c)</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-2">Dr. Aldric Marshall</h2>
            <p className="text-sozo-gold font-medium mb-4">Founder & President</p>
            <p className="text-gray-700 leading-relaxed">
              Apostolic leader, bestselling author, and visionary educator, Dr. Marshall brings a
              wealth of experience in theology, counseling, and supernatural ministry. With advanced
              degrees in counseling and organizational leadership, and having spoken at the United
              Nations and trained law enforcement professionals, he leads SOZO with boldness,
              compassion, and Kingdom clarity.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-2">Charete Marshall</h2>
            <p className="text-sozo-gold font-medium mb-4">Co-Founder & Director of Women&apos;s Empowerment</p>
            <p className="text-gray-700 leading-relaxed">
              A powerful teacher and prophetic voice, Charete carries a unique anointing for healing,
              wholeness, and inner restoration. A cancer survivor and champion of women&apos;s ministries,
              she helps mentor students in identity, endurance, and faith.
            </p>
          </div>

          <blockquote className="border-l-4 border-sozo-gold pl-6 italic text-lg text-gray-700 my-10">
            &ldquo;We are not just educating minds—we are igniting mantles. SOZO was born out of a deep
            burden and prophetic call to equip a global remnant for end-time Kingdom impact.&rdquo;
            <span className="block mt-3 not-italic font-medium text-sozo-blue">— Dr. Aldric Marshall</span>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
