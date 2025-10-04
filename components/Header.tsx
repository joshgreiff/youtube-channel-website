'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Youtube, DollarSign, TrendingUp } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <DollarSign className="h-8 w-8 text-primary-600" />
              <TrendingUp className="h-6 w-6 text-bitcoin-500" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Work, Save, Bitcoin
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="/coaching" className="text-gray-700 hover:text-primary-600 transition-colors">
              Coaching
            </Link>
            <Link href="/bitcoin" className="text-gray-700 hover:text-primary-600 transition-colors">
              Bitcoin Guide
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-primary-600 transition-colors">
              Resources
            </Link>
            <a
              href="https://youtube.com/@yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors"
            >
              <Youtube className="h-5 w-5" />
              <span>YouTube</span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/coaching" className="btn-primary">
              Book Coaching
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/coaching"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Coaching
              </Link>
              <Link
                href="/bitcoin"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Bitcoin Guide
              </Link>
              <Link
                href="/resources"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <Youtube className="h-5 w-5" />
                <span>YouTube</span>
              </a>
              <div className="px-3 py-2">
                <Link href="/coaching" className="btn-primary w-full text-center block" onClick={() => setIsMenuOpen(false)}>
                  Book Coaching
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
