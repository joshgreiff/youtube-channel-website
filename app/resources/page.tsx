import Link from 'next/link'
import { BookOpen, Download, ExternalLink, Play, FileText, DollarSign, TrendingUp, Shield } from 'lucide-react'

export default function ResourcesPage() {
  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Free Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access my collection of free guides, tools, and educational content to start your financial education journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600">
              Start with these essential guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <BookOpen className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bitcoin Basics Guide</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive introduction to Bitcoin covering fundamentals, security, and getting started safely.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">PDF • 25 pages</span>
                <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
            </div>

            <div className="card">
              <DollarSign className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budgeting Template</h3>
              <p className="text-gray-600 mb-4">
                A simple yet effective budgeting spreadsheet to track your income, expenses, and savings goals.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Excel • Template</span>
                <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
            </div>

            <div className="card">
              <Shield className="h-12 w-12 text-bitcoin-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security Checklist</h3>
              <p className="text-gray-600 mb-4">
                Essential security practices for protecting your Bitcoin and personal financial information.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">PDF • Checklist</span>
                <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Tutorials
            </h2>
            <p className="text-xl text-gray-600">
              Watch my most popular educational videos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                <Play className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bitcoin for Beginners</h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete introduction to Bitcoin for absolute beginners. Learn the basics in 15 minutes.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">15 min • Beginner</span>
                <a
                  href="https://youtube.com/watch?v=example1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Watch
                </a>
              </div>
            </div>

            <div className="card">
              <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                <Play className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">How to Buy Bitcoin Safely</h3>
              <p className="text-gray-600 text-sm mb-4">
                Step-by-step guide to buying your first Bitcoin using reputable exchanges.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">12 min • Beginner</span>
                <a
                  href="https://youtube.com/watch?v=example2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Watch
                </a>
              </div>
            </div>

            <div className="card">
              <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                <Play className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dollar-Cost Averaging Strategy</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn how to invest in Bitcoin systematically to reduce risk and build wealth over time.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">18 min • Intermediate</span>
                <a
                  href="https://youtube.com/watch?v=example3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Watch
                </a>
              </div>
            </div>

            <div className="card">
              <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                <Play className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hardware Wallet Setup</h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete tutorial on setting up and using hardware wallets for maximum security.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">22 min • Intermediate</span>
                <a
                  href="https://youtube.com/watch?v=example4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Watch
                </a>
              </div>
            </div>

            <div className="card">
              <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                <Play className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Building an Emergency Fund</h3>
              <p className="text-gray-600 text-sm mb-4">
                Essential strategies for building and maintaining an emergency fund for financial security.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">14 min • Beginner</span>
                <a
                  href="https://youtube.com/watch?v=example5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Watch
                </a>
              </div>
            </div>

            <div className="card">
              <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                <Play className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Side Hustle Ideas</h3>
              <p className="text-gray-600 text-sm mb-4">
                Proven side hustle strategies to increase your income and accelerate your wealth building.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">20 min • All Levels</span>
                <a
                  href="https://youtube.com/watch?v=example6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Watch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Calculators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tools & Calculators
            </h2>
            <p className="text-xl text-gray-600">
              Interactive tools to help with your financial planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <TrendingUp className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">DCA Calculator</h3>
              <p className="text-gray-600 mb-4">
                Calculate the potential returns of dollar-cost averaging into Bitcoin over time.
              </p>
              <button className="text-primary-600 hover:text-primary-700 font-semibold">
                Use Calculator →
              </button>
            </div>

            <div className="card">
              <DollarSign className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Fund Calculator</h3>
              <p className="text-gray-600 mb-4">
                Determine how much you need in your emergency fund based on your expenses and situation.
              </p>
              <button className="text-primary-600 hover:text-primary-700 font-semibold">
                Use Calculator →
              </button>
            </div>

            <div className="card">
              <Shield className="h-12 w-12 text-bitcoin-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio Allocation Tool</h3>
              <p className="text-gray-600 mb-4">
                Get personalized recommendations for your Bitcoin allocation based on your risk tolerance.
              </p>
              <button className="text-primary-600 hover:text-primary-700 font-semibold">
                Use Tool →
              </button>
            </div>

            <div className="card">
              <FileText className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Tracker</h3>
              <p className="text-gray-600 mb-4">
                Simple tool to track your monthly income and expenses to identify saving opportunities.
              </p>
              <button className="text-primary-600 hover:text-primary-700 font-semibold">
                Use Tracker →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recommended Reading
            </h2>
            <p className="text-xl text-gray-600">
              Essential books for your financial education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">The Bitcoin Standard</h3>
              <p className="text-gray-600 text-sm mb-4">
                By Saifedean Ammous. Essential reading for understanding Bitcoin's role in the future of money.
              </p>
              <a
                href="https://amazon.com/bitcoin-standard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Buy on Amazon
              </a>
            </div>

            <div className="card">
              <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rich Dad Poor Dad</h3>
              <p className="text-gray-600 text-sm mb-4">
                By Robert Kiyosaki. Classic book on changing your mindset about money and wealth building.
              </p>
              <a
                href="https://amazon.com/rich-dad-poor-dad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Buy on Amazon
              </a>
            </div>

            <div className="card">
              <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">The Millionaire Next Door</h3>
              <p className="text-gray-600 text-sm mb-4">
                By Thomas Stanley. Research-based insights into the habits and characteristics of millionaires.
              </p>
              <a
                href="https://amazon.com/millionaire-next-door"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Personalized Guidance?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            While these free resources are a great start, nothing beats personalized coaching 
            tailored to your specific situation and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/coaching" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Book Coaching Session
            </Link>
            <a
              href="https://youtube.com/@yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Subscribe to YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
