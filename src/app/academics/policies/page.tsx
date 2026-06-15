import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Academic Policies',
  description: 'SOZO Global academic policies including grading, attendance, integrity standards, and student conduct.',
}

export default function PoliciesPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Academic Policies</h1>
          <p className="text-xl text-blue-100">Standards of Excellence & Integrity</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-4">Academic Integrity</h2>
            <p className="text-gray-700 leading-relaxed">
              SOZO Global upholds the highest standards of academic integrity. All students are
              expected to submit original work, properly cite sources, and maintain honesty in all
              academic assessments. Plagiarism, cheating, or misrepresentation will result in
              disciplinary action.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-4">Attendance & Participation</h2>
            <p className="text-gray-700 leading-relaxed">
              Regular attendance and active participation are essential to the SOZO learning experience.
              Students are expected to engage with all course materials, participate in discussions,
              and complete assignments by posted deadlines. Accommodations may be made for ministry
              travel or emergencies with prior notification.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-4">Grading Standards</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SOZO employs a standard letter grading system. Students must maintain a minimum GPA
              to remain in good academic standing and progress through their program.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-4">Code of Conduct</h2>
            <p className="text-gray-700 leading-relaxed">
              All students agree to abide by SOZO&apos;s Code of Conduct and Lifestyle Covenant, which
              reflects our commitment to Christ-like character, biblical ethics, and community respect.
              This includes maintaining a testimony consistent with biblical standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-sozo-blue mb-4">Transfer Credits</h2>
            <p className="text-gray-700 leading-relaxed">
              Transfer credits are evaluated on a case-by-case basis by the Admissions & Records
              office. Applicants may submit transcripts from accredited institutions for review.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-sm text-gray-600">
              For the complete student handbook and detailed policies, please contact the
              Admissions & Records office or access the full document through your Canvas portal.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
