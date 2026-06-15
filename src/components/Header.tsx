'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about', children: [
    { label: 'About SOZO Global', href: '/about' },
    { label: 'Mission & Vision', href: '/about/mission' },
    { label: 'History of SOZO', href: '/about/history' },
    { label: "Founder's Biography", href: '/about/founder' },
    { label: 'Faculty & Staff', href: '/about/faculty' },
    { label: 'Accreditation & Recognition', href: '/about/accreditation' },
  ]},
  { label: 'Programs', href: '/programs', children: [
    { label: 'All Programs', href: '/programs' },
    { label: 'Diploma Program', href: '/programs/diploma' },
    { label: "Master's Program", href: '/programs/masters' },
    { label: 'Doctoral Program', href: '/programs/doctoral' },
    { label: 'Chaplaincy Certification', href: '/programs/chaplaincy' },
    { label: 'Ministry Licensing & Ordination', href: '/programs/licensing' },
    { label: 'Continuing Education', href: '/programs/continuing-education' },
  ]},
  { label: 'Academics', href: '/academics', children: [
    { label: 'Academic Overview', href: '/academics' },
    { label: 'Academic Departments', href: '/academics/departments' },
    { label: 'Academic Calendar', href: '/academics/calendar' },
    { label: 'Academic Policies', href: '/academics/policies' },
    { label: 'Research & Innovation', href: '/academics/research' },
  ]},
  { label: 'Admissions', href: '/admissions', children: [
    { label: 'Admission Requirements', href: '/admissions' },
    { label: 'Admission Process', href: '/admissions/process' },
    { label: 'Tuition & Fees', href: '/admissions/tuition' },
    { label: 'Request Information', href: '/admissions/request-info' },
    { label: 'Apply Now', href: '/admissions/apply' },
  ]},
  { label: 'Student Life', href: '/student-life' },
  { label: 'Events', href: '/events' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar with CTA buttons */}
      <div className="bg-sozo-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
          <p className="text-sm hidden sm:block">Empowering Nations. Advancing the Kingdom.</p>
          <div className="flex items-center gap-3 ml-auto">
            <Link
              href="/admissions/apply"
              className="bg-sozo-gold text-sozo-blue px-4 py-1.5 rounded text-sm font-bold hover:bg-sozo-gold-light transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/contact#schedule"
              className="border border-sozo-gold text-sozo-gold px-4 py-1.5 rounded text-sm font-bold hover:bg-sozo-gold hover:text-sozo-blue transition-colors"
            >
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.jpg"
              alt="SOZO Global School of the Supernatural & Biblical Studies"
              width={56}
              height={56}
              className="rounded-full"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-lg font-serif font-bold text-sozo-blue leading-tight">SOZO Global</p>
              <p className="text-xs text-gray-600">School of the Supernatural & Biblical Studies</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-sozo-blue rounded-md hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown className="ml-1 h-3 w-3" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0 w-60 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-sozo-blue hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sozo-blue hover:bg-gray-50 rounded-md"
                  onClick={() => !item.children && setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 text-sm text-gray-600 hover:text-sozo-blue hover:bg-gray-50 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <Link
                href="/admissions/apply"
                className="block w-full text-center bg-sozo-gold text-sozo-blue px-4 py-3 rounded-lg font-bold hover:bg-sozo-gold-light transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
              <Link
                href="/contact#schedule"
                className="block w-full text-center border-2 border-sozo-blue text-sozo-blue px-4 py-3 rounded-lg font-bold hover:bg-sozo-blue hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
