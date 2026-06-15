import type { Metadata } from 'next'
import { departments } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Academic Departments',
  description: 'Explore the 12 core schools and departments at SOZO Global covering supernatural ministry, chaplaincy, leadership, and more.',
}

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Academic Departments</h1>
          <p className="text-xl text-blue-100">12 Core Schools for Comprehensive Kingdom Training</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {departments.map((dept, i) => (
              <div key={dept.name} className="border border-gray-200 rounded-xl p-6 hover:border-sozo-gold transition-colors">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-sozo-blue text-white font-bold rounded-full shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-sozo-blue mb-2">{dept.name}</h3>
                    <p className="text-gray-600">{dept.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
