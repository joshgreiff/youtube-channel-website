import Link from 'next/link'
import { Calendar, Clock, Users, CheckCircle, Star, ArrowRight, DollarSign, TrendingUp, Shield } from 'lucide-react'

export default function CoachingPage() {
  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Personal Financial Coaching
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get personalized 1-on-1 guidance to accelerate your financial journey. 
              Whether you&apos;re just starting or looking to optimize your existing strategy, 
              I&apos;ll help you create a clear path to financial freedom.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-primary-600 mr-1" />
                <span>500+ Students</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-bitcoin-500 mr-1" />
                <span>5+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Coaching Package
            </h2>
            <p className="text-xl text-gray-600">
              Flexible options to fit your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Single Session */}
            <div className="card text-center relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Single Session</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">
                $150
                <span className="text-lg text-gray-500 font-normal">/session</span>
              </div>
              <ul className="text-left text-gray-600 space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  60-minute 1-on-1 session
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Personalized financial assessment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Action plan with next steps
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Follow-up resources
                </li>
              </ul>
              <a
                href="https://calendly.com/yourusername/single-session"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Book Single Session
              </a>
            </div>

            {/* 3-Session Package */}
            <div className="card text-center relative border-2 border-primary-600">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3-Session Package</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">
                $400
                <span className="text-lg text-gray-500 font-normal">/package</span>
              </div>
              <div className="text-sm text-green-600 font-semibold mb-4">
                Save $50 (12% off)
              </div>
              <ul className="text-left text-gray-600 space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  3x 60-minute sessions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Comprehensive financial plan
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Progress tracking & adjustments
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Email support between sessions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Custom resource library
                </li>
              </ul>
              <a
                href="https://calendly.com/yourusername/3-session-package"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Book 3-Session Package
              </a>
            </div>

            {/* 6-Session Package */}
            <div className="card text-center relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6-Session Package</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">
                $750
                <span className="text-lg text-gray-500 font-normal">/package</span>
              </div>
              <div className="text-sm text-green-600 font-semibold mb-4">
                Save $150 (17% off)
              </div>
              <ul className="text-left text-gray-600 space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  6x 60-minute sessions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Complete financial transformation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Advanced Bitcoin strategies
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Priority email support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Lifetime access to resources
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  30-day follow-up check-in
                </li>
              </ul>
              <a
                href="https://calendly.com/yourusername/6-session-package"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Book 6-Session Package
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You&apos;ll Learn in Our Sessions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive coverage of work, saving, and Bitcoin strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <DollarSign className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Work & Income</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Salary negotiation strategies</li>
                <li>• Side hustle development</li>
                <li>• Passive income creation</li>
                <li>• Career advancement planning</li>
                <li>• Multiple income streams</li>
              </ul>
            </div>

            <div className="card">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Saving & Budgeting</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Effective budgeting systems</li>
                <li>• Emergency fund strategies</li>
                <li>• Debt elimination plans</li>
                <li>• Tax optimization</li>
                <li>• Investment allocation</li>
              </ul>
            </div>

            <div className="card">
              <TrendingUp className="h-12 w-12 text-bitcoin-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bitcoin & Crypto</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Bitcoin fundamentals</li>
                <li>• Secure storage methods</li>
                <li>• DCA strategies</li>
                <li>• Market analysis</li>
                <li>• Portfolio management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What My Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;The coaching sessions completely transformed my approach to money. I went from living paycheck to paycheck to having a solid emergency fund and Bitcoin portfolio in just 3 months.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Sarah M.</div>
              <div className="text-sm text-gray-500">Marketing Manager</div>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;I was skeptical about Bitcoin, but the education I received was invaluable. Now I understand the technology and have a clear strategy for long-term wealth building.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Mike R.</div>
              <div className="text-sm text-gray-500">Software Engineer</div>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;The personalized approach made all the difference. Instead of generic advice, I got a plan tailored specifically to my situation and goals. Highly recommended!&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Jennifer L.</div>
              <div className="text-sm text-gray-500">Teacher</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Financial Transformation?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Book your coaching session today and take the first step toward financial freedom. 
            Limited spots available each month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/yourusername/single-session"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              <Calendar className="inline h-5 w-5 mr-2" />
              Book Your Session Now
            </a>
            <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
