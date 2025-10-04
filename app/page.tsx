import Link from 'next/link'
import { ArrowRight, DollarSign, TrendingUp, Shield, Users, BookOpen, Calendar, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Your
              <span className="text-primary-600"> Financial</span>
              <br />
              <span className="text-bitcoin-500">Future</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Learn the fundamentals of work, saving strategies, and Bitcoin from an experienced coach. 
              Transform your financial knowledge into actionable wealth-building strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/coaching" className="btn-bitcoin text-lg px-8 py-4">
                Book 1-on-1 Coaching
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/bitcoin" className="btn-secondary text-lg px-8 py-4">
                Learn Bitcoin Basics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="card">
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Students Coached</p>
            </div>
            <div className="card">
              <TrendingUp className="h-12 w-12 text-bitcoin-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5+</h3>
              <p className="text-gray-600">Years Bitcoin Experience</p>
            </div>
            <div className="card">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.9/5</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive education covering the three pillars of financial success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Work */}
            <div className="card text-center">
              <DollarSign className="h-16 w-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Work</h3>
              <p className="text-gray-600 mb-6">
                Learn how to maximize your earning potential, negotiate better salaries, 
                and build multiple income streams for financial security.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Career advancement strategies</li>
                <li>• Side hustle development</li>
                <li>• Passive income creation</li>
                <li>• Professional networking</li>
              </ul>
            </div>

            {/* Save */}
            <div className="card text-center">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Saving</h3>
              <p className="text-gray-600 mb-6">
                Master the art of saving money effectively, building emergency funds, 
                and creating a solid financial foundation for your future.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Budgeting and expense tracking</li>
                <li>• Emergency fund strategies</li>
                <li>• Debt elimination methods</li>
                <li>• Tax optimization</li>
              </ul>
            </div>

            {/* Bitcoin */}
            <div className="card text-center">
              <TrendingUp className="h-16 w-16 text-bitcoin-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bitcoin Mastery</h3>
              <p className="text-gray-600 mb-6">
                Understand Bitcoin fundamentals, best practices for buying and storing, 
                and how to integrate it into your long-term wealth strategy.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Bitcoin basics and technology</li>
                <li>• Secure storage methods</li>
                <li>• Investment strategies</li>
                <li>• Market analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get personalized 1-on-1 coaching tailored to your specific financial goals and situation. 
            Book a session today and start your journey to financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/coaching" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              <Calendar className="inline h-5 w-5 mr-2" />
              Book Your Session
            </Link>
            <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start your financial education journey with these free resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <BookOpen className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bitcoin Basics Guide</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive introduction to Bitcoin, covering everything from what it is to how to get started safely.
              </p>
              <Link href="/bitcoin" className="text-primary-600 hover:text-primary-700 font-semibold">
                Read Guide →
              </Link>
            </div>

            <div className="card">
              <DollarSign className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Saving Strategies</h3>
              <p className="text-gray-600 mb-4">
                Proven methods to increase your savings rate and build wealth systematically over time.
              </p>
              <Link href="/resources" className="text-primary-600 hover:text-primary-700 font-semibold">
                View Resources →
              </Link>
            </div>

            <div className="card">
              <TrendingUp className="h-12 w-12 text-bitcoin-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">YouTube Channel</h3>
              <p className="text-gray-600 mb-4">
                Weekly videos covering work, saving, and Bitcoin topics with actionable insights and strategies.
              </p>
              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Watch Videos →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
