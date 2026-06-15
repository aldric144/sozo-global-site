import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-sozo-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.jpg" alt="SOZO Global" width={48} height={48} className="rounded-full" />
              <div>
                <h3 className="text-xl font-serif font-bold">SOZO Global</h3>
                <p className="text-sm text-blue-200">School of the Supernatural & Biblical Studies</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6 text-sm leading-relaxed">
              Empowering Nations. Advancing the Kingdom. A world-class institution equipping
              believers for supernatural ministry and global leadership.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-blue-200 hover:text-sozo-gold transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="text-blue-200 hover:text-sozo-gold transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="text-blue-200 hover:text-sozo-gold transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="text-blue-200 hover:text-sozo-gold transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sozo-gold">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/programs/diploma" className="text-blue-200 hover:text-white transition-colors">Diploma Program</Link></li>
              <li><Link href="/programs/masters" className="text-blue-200 hover:text-white transition-colors">Master&apos;s Program</Link></li>
              <li><Link href="/programs/doctoral" className="text-blue-200 hover:text-white transition-colors">Doctoral Program</Link></li>
              <li><Link href="/programs/chaplaincy" className="text-blue-200 hover:text-white transition-colors">Chaplaincy Certification</Link></li>
              <li><Link href="/programs/licensing" className="text-blue-200 hover:text-white transition-colors">Ministry Licensing</Link></li>
              <li><Link href="/programs/continuing-education" className="text-blue-200 hover:text-white transition-colors">Continuing Education</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sozo-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/admissions" className="text-blue-200 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/academics" className="text-blue-200 hover:text-white transition-colors">Academics</Link></li>
              <li><Link href="/student-life" className="text-blue-200 hover:text-white transition-colors">Student Life</Link></li>
              <li><Link href="/events" className="text-blue-200 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/blog" className="text-blue-200 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sozo-gold">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sozo-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Global Headquarters</p>
                  <p className="text-blue-200">Worldwide Online Campus</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-sozo-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-blue-200">Mon–Fri 9AM–5PM EST</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-sozo-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-blue-200">info@sozoglobal.school</p>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <Link
                href="/admissions/apply"
                className="block w-full text-center bg-sozo-gold text-sozo-blue px-4 py-2.5 rounded font-bold text-sm hover:bg-sozo-gold-light transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/contact#schedule"
                className="block w-full text-center border border-sozo-gold text-sozo-gold px-4 py-2.5 rounded font-bold text-sm hover:bg-sozo-gold hover:text-sozo-blue transition-colors"
              >
                Schedule a Discovery Call
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} SOZO Global School of the Supernatural & Biblical Studies. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-blue-200 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/accessibility" className="text-blue-200 hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
