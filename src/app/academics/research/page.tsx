import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research & Innovation',
  description: 'SOZO Global research initiatives including biblical research labs, supernatural case studies, and faith-based innovation.',
}

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Research & Innovation</h1>
          <p className="text-xl text-blue-100">Where Revelation Meets Rigorous Scholarship</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            SOZO Global is committed to advancing Kingdom knowledge through Spirit-led research,
            scholarly inquiry, and practical innovation. Our research initiatives bridge the gap
            between supernatural ministry and academic rigor.
          </p>

          <div className="space-y-8">
            {[
              {
                title: 'Biblical Research Labs',
                desc: 'Deep exegetical study, hermeneutical innovation, and Spirit-led biblical scholarship that advances understanding of supernatural ministry in Scripture.',
              },
              {
                title: 'Supernatural Case Studies',
                desc: 'Documented case studies of healing, deliverance, prophetic ministry, and revival movements for scholarly analysis and best-practice development.',
              },
              {
                title: 'Center for Deliverance & Inner Healing Research',
                desc: 'A hub for excellence in deliverance and inner healing ministry — developing best-practice protocols, safety standards, and practitioner formation.',
              },
              {
                title: 'Faith & Technology Innovation Lab',
                desc: 'Exploring AI, digital tools, and emerging technologies for Kingdom purposes — creating solutions for ministry, education, and global impact.',
              },
              {
                title: 'Institute for Child Protection & Global Anti-Trafficking',
                desc: 'Research and advocacy for protecting the most vulnerable — equipping leaders with survivor-safe training, policy toolkits, and field protocols.',
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-sozo-gold pl-6">
                <h3 className="text-xl font-bold text-sozo-blue mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-serif font-bold text-sozo-blue mb-3">Doctoral Research</h3>
            <p className="text-gray-700">
              Students in the DSLGA doctoral program conduct original research contributing to the
              body of Kingdom knowledge. Dissertations address real-world ministry challenges with
              scholarly analysis and Spirit-led insight.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
