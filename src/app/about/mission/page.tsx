import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission & Vision',
  description: 'Discover the mission and vision of SOZO Global School — equipping Spirit-filled believers for global Kingdom impact.',
}

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Mission & Vision</h1>
          <p className="text-xl text-blue-100">Our God-given mandate and prophetic vision for global impact.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-sozo-blue mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            To equip, train, and release Spirit-filled believers through biblically grounded, Holy
            Spirit-activated, and apostolically aligned education. We exist to prepare reformers for
            ministry, marketplace, media, and missions—raising up a generation who will carry the
            Word, walk in power, and lead with compassion.
          </p>

          <h2 className="text-3xl font-serif font-bold text-sozo-blue mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We envision a global army of spiritually mature, biblically literate, and supernaturally
            activated believers who:
          </p>
          <ul className="space-y-4 text-gray-700 text-lg mb-10">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2.5 shrink-0" />
              Know the voice of God and obey it boldly
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2.5 shrink-0" />
              Heal the sick, cast out demons, and operate in prophetic precision
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2.5 shrink-0" />
              Carry revival into boardrooms, nations, and neighborhoods
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2.5 shrink-0" />
              Demonstrate Christ&apos;s love with wisdom, justice, and supernatural grace
            </li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-sozo-gold pl-6">
            This is a school for world-changers, mantle-bearers, and pioneers of the next move of God.
          </p>

          <h2 className="text-3xl font-serif font-bold text-sozo-blue mt-14 mb-6">Statement of Faith</h2>
          <div className="space-y-4 text-gray-700">
            <p>We believe in:</p>
            <ul className="space-y-3 pl-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                The Bible as the inspired, inerrant Word of God
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                One God eternally existing in three persons: Father, Son, and Holy Spirit
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                The deity, virgin birth, sinless life, atoning death, resurrection, and return of Jesus Christ
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                Salvation by grace through faith in Jesus Christ alone
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                The present-day ministry of the Holy Spirit, including gifts, signs, and wonders
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                The five-fold ministry gifts as described in Ephesians 4:11
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sozo-gold rounded-full mt-2 shrink-0" />
                The Great Commission and the mandate to disciple all nations
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
