'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg border-b-2 border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xl font-serif">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-blue-900">SOZO Global</h1>
              <p className="text-sm text-gray-600">School of the Supernatural</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium">
              About Us
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-900 font-medium"
                onMouseEnter={() => setIsAcademicsOpen(true)}
                onMouseLeave={() => setIsAcademicsOpen(false)}
              >
                Academics
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isAcademicsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsAcademicsOpen(true)}
                  onMouseLeave={() => setIsAcademicsOpen(false)}
                >
                  <Link href="/academics" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                    All Programs
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  <Link href="/academics/diploma" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                    Diploma Track
                  </Link>
                  <Link href="/academics/masters" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                    Master's Track
                  </Link>
                  <Link href="/academics/doctoral" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                    Doctoral Track
                  </Link>
                  <Link href="/academics/chaplaincy" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                    Chaplaincy Certification
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  <Link href="/certificates" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                    Certificates (150+ Programs)
                  </Link>
                </div>
              )}
            </div>

            <Link href="/admissions" className="text-gray-700 hover:text-blue-900 font-medium">
              Admissions
            </Link>
            <Link href="/student-life" className="text-gray-700 hover:text-blue-900 font-medium">
              Student Life
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-900 font-medium">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium">
              Contact Us
            </Link>
            <a 
              href="https://canvas.sozoglobal.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 font-medium"
            >
              Student Portal
            </a>
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium">
                About Us
              </Link>
              <Link href="/academics" className="text-gray-700 hover:text-blue-900 font-medium">
                Academics
              </Link>
              <div className="pl-4 space-y-2">
                <Link href="/academics/diploma" className="block text-gray-600 hover:text-blue-900">
                  Diploma Track
                </Link>
                <Link href="/academics/masters" className="block text-gray-600 hover:text-blue-900">
                  Master's Track
                </Link>
                <Link href="/academics/doctoral" className="block text-gray-600 hover:text-blue-900">
                  Doctoral Track
                </Link>
                <Link href="/academics/chaplaincy" className="block text-gray-600 hover:text-blue-900">
                  Chaplaincy Certification
                </Link>
                <Link href="/certificates" className="block text-gray-600 hover:text-blue-900">
                  Certificates
                </Link>
              </div>
              <Link href="/admissions" className="text-gray-700 hover:text-blue-900 font-medium">
                Admissions
              </Link>
              <Link href="/student-life" className="text-gray-700 hover:text-blue-900 font-medium">
                Student Life
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-blue-900 font-medium">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium">
                Contact Us
              </Link>
              <a 
                href="https://canvas.sozoglobal.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 font-medium text-center"
              >
                Student Portal
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
