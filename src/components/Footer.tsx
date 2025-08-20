import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg font-serif">S</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">SOZO Global</h3>
                <p className="text-sm text-blue-200">School of the Supernatural</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4">
              Equipping believers, empowering leaders, and transforming nations through 
              Spirit-led education and supernatural ministry training.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Academics</h4>
            <ul className="space-y-2">
              <li><Link href="/academics" className="text-blue-200 hover:text-white">All Programs</Link></li>
              <li><Link href="/certificates" className="text-blue-200 hover:text-white">Certificates</Link></li>
              <li><Link href="/academics/diploma" className="text-blue-200 hover:text-white">Diploma Track</Link></li>
              <li><Link href="/academics/masters" className="text-blue-200 hover:text-white">Master's Track</Link></li>
              <li><Link href="/academics/doctoral" className="text-blue-200 hover:text-white">Doctoral Track</Link></li>
              <li><Link href="/academics/chaplaincy" className="text-blue-200 hover:text-white">Chaplaincy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Student Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/admissions" className="text-blue-200 hover:text-white">Admissions</Link></li>
              <li><Link href="/student-life" className="text-blue-200 hover:text-white">Student Life</Link></li>
              <li><Link href="/resources" className="text-blue-200 hover:text-white">Online Learning</Link></li>
              <li><Link href="/resources#library" className="text-blue-200 hover:text-white">Library</Link></li>
              <li><Link href="/resources#events" className="text-blue-200 hover:text-white">Events</Link></li>
              <li><Link href="/about#mission" className="text-blue-200 hover:text-white">Mission and Vision</Link></li>
              <li><a href="https://canvas.sozoglobal.org" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">Student Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="text-blue-200">Global Headquarters</p>
                  <p className="text-sm text-blue-300">Worldwide Online Campus</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="text-blue-200">+1 (555) 123-SOZO</p>
                  <p className="text-sm text-blue-300">Mon-Fri 9AM-5PM EST</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="text-blue-200">info@sozoglobal.edu</p>
                  <p className="text-sm text-blue-300">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2025 SOZO Global School of the Supernatural and Biblical Studies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-blue-200 hover:text-white text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-blue-200 hover:text-white text-sm">Terms of Service</Link>
              <Link href="/accessibility" className="text-blue-200 hover:text-white text-sm">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
