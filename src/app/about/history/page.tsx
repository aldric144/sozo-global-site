import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'History of SOZO',
  description: 'The story of how SOZO Global School of the Supernatural & Biblical Studies was born from prophetic revelation and apostolic assignment.',
}

export default function HistoryPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">History of SOZO</h1>
          <p className="text-xl text-blue-100">The Birth of a Kingdom Movement</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            SOZO Global School of the Supernatural & Biblical Studies was born out of a deep burden
            and prophetic call to equip a global remnant for end-time Kingdom impact. What began as a
            vision in the heart of our founder, Dr. Aldric Marshall, has become a spiritually-charged
            academic institution dedicated to raising up apostolic, prophetic, and biblically grounded
            leaders who walk in supernatural power, cultural relevance, and unwavering truth.
          </p>

          <h2 className="text-2xl font-serif font-bold text-sozo-blue mt-12 mb-4">Foundational Revelation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The word &ldquo;SOZO&rdquo; is the Greek word used in the New Testament for &ldquo;salvation,&rdquo; &ldquo;healing,&rdquo;
            and &ldquo;deliverance.&rdquo; It reflects the school&apos;s central mandate: to see believers made whole
            and sent out—spirit, soul, and body—as Kingdom ambassadors.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The school&apos;s foundation was laid during years of apostolic work, leadership training,
            domestic violence advocacy, community engagement, and prophetic ministry. After ministering
            in diverse spheres—from church pulpits to United Nations forums—Dr. Marshall recognized a
            glaring need: a university-style Bible and ministry school that didn&apos;t strip the supernatural
            from its pedagogy, yet remained uncompromising in scholarly excellence.
          </p>

          <h2 className="text-2xl font-serif font-bold text-sozo-blue mt-12 mb-4">A Global Apostolic Movement Begins</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In 2025, SOZO Global was officially launched as a private faith-based school offering
            diploma, master&apos;s, and doctoral tracks in Supernatural Ministry, Leadership, Deliverance,
            Evangelism, Apostolic Architecture, Kingdom Economics, and more.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">What made SOZO different from the beginning:</p>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
              Canvas-powered university-level structure
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
              Course numbers, weekly assignments, scholarly texts, and Spirit-led activations
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
              Faculty composed of apostles, prophets, educators, chaplains, and global leaders
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
              A commitment to raise revivalists, reformers, and righteous rulers—not just graduates
            </li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-sozo-blue mt-12 mb-4">Innovating the Future of Kingdom Education</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            SOZO Global was among the first of its kind to blend advanced LMS technology (Canvas),
            apostolic pedagogy, interactive deliverance practicums, and supernatural discipleship
            with digital evangelism.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The institution established partnerships with chaplaincy organizations, city leaders, and
            victim advocacy networks, solidifying its impact beyond the church walls. SOZO continues to
            break molds by designing a system that looks like a modern Christian university, feels like
            a revival training center, and functions like a Kingdom think tank.
          </p>

          <h2 className="text-2xl font-serif font-bold text-sozo-blue mt-12 mb-4">A Living Legacy in Motion</h2>
          <p className="text-gray-700 leading-relaxed">
            Today, SOZO Global School of the Supernatural & Biblical Studies stands as a growing force
            in the world of Spirit-filled education—training five-fold leaders, Kingdom entrepreneurs,
            prophetic voices, and deliverance ministers across the globe. From its apostolic foundations
            to its academic innovation, SOZO continues to evolve—rooted in truth, led by the Spirit,
            and powered by divine assignment. We are not just educating minds—we are igniting mantles.
          </p>
        </div>
      </section>
    </div>
  )
}
