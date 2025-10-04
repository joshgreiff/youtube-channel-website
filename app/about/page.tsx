import Link from 'next/link'
import { DollarSign, TrendingUp, Users, Award, BookOpen, Calendar } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hi, I'm Your Name
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Financial educator, Bitcoin advocate, and your guide to building wealth through smart work, 
                strategic saving, and sound investment principles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/coaching" className="btn-bitcoin text-lg px-8 py-4">
                  Book a Session
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="https://youtube.com/@yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Watch My Videos
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-bitcoin-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-gray-900 text-center">Your Name</h3>
                  <p className="text-gray-600 text-center">Financial Coach & Bitcoin Educator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Journey to Financial Freedom
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How I discovered the power of combining smart work, strategic saving, and Bitcoin to build wealth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">The Struggle</h3>
                  <p className="text-gray-600">
                    Like many people, I started my career living paycheck to paycheck, 
                    struggling with debt and feeling trapped in the traditional financial system.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">The Discovery</h3>
                  <p className="text-gray-600">
                    I discovered Bitcoin in 2018 and began studying its fundamentals. 
                    This led me to completely rethink my approach to money and wealth building.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">The Transformation</h3>
                  <p className="text-gray-600">
                    By combining smart work strategies, disciplined saving, and Bitcoin investment, 
                    I achieved financial freedom and now help others do the same.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Philosophy</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <DollarSign className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Work Smart, Not Just Hard</h4>
                    <p className="text-gray-600 text-sm">
                      Focus on high-value activities that maximize your earning potential and create multiple income streams.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-bitcoin-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Save Strategically</h4>
                    <p className="text-gray-600 text-sm">
                      Build emergency funds, eliminate debt, and create a solid foundation before taking investment risks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Invest in Knowledge</h4>
                    <p className="text-gray-600 text-sm">
                      Continuous learning about money, Bitcoin, and wealth-building strategies is the key to long-term success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Experience */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Credentials & Experience
            </h2>
            <p className="text-xl text-gray-600">
              Why you can trust me with your financial education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">5+ Years</h3>
              <p className="text-gray-600">Bitcoin Experience</p>
            </div>

            <div className="card text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Students Coached</p>
            </div>

            <div className="card text-center">
              <BookOpen className="h-12 w-12 text-bitcoin-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Educational Videos</p>
            </div>

            <div className="card text-center">
              <TrendingUp className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">4.9/5</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Teach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Teach
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive education across all aspects of financial success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <DollarSign className="h-16 w-16 text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Work & Income</h3>
              <ul className="text-gray-600 space-y-3">
                <li>• Salary negotiation strategies</li>
                <li>• Side hustle development</li>
                <li>• Passive income creation</li>
                <li>• Career advancement</li>
                <li>• Professional networking</li>
                <li>• Multiple income streams</li>
              </ul>
            </div>

            <div className="card">
              <TrendingUp className="h-16 w-16 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Saving & Budgeting</h3>
              <ul className="text-gray-600 space-y-3">
                <li>• Budgeting systems</li>
                <li>• Emergency fund strategies</li>
                <li>• Debt elimination</li>
                <li>• Tax optimization</li>
                <li>• Expense tracking</li>
                <li>• Financial planning</li>
              </ul>
            </div>

            <div className="card">
              <BookOpen className="h-16 w-16 text-bitcoin-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bitcoin & Investment</h3>
              <ul className="text-gray-600 space-y-3">
                <li>• Bitcoin fundamentals</li>
                <li>• Secure storage methods</li>
                <li>• Investment strategies</li>
                <li>• Market analysis</li>
                <li>• Risk management</li>
                <li>• Portfolio allocation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's work together to transform your financial future. 
            Book a coaching session and take the first step toward financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/coaching" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              <Calendar className="inline h-5 w-5 mr-2" />
              Book Your Session
            </Link>
            <Link href="/bitcoin" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Learn Bitcoin Basics
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
