import Link from 'next/link'
import { TrendingUp, Shield, DollarSign, BookOpen, AlertTriangle, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react'

export default function BitcoinPage() {
  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bitcoin Education Hub
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master Bitcoin fundamentals, best practices, and investment strategies. 
              Learn from an experienced educator who&apos;s been in the space for over 5 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/coaching" className="btn-bitcoin text-lg px-8 py-4">
                Get Personal Coaching
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                Watch YouTube Videos
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bitcoin Basics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bitcoin Fundamentals
            </h2>
            <p className="text-xl text-gray-600">
              Start here if you&apos;re new to Bitcoin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <BookOpen className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">What is Bitcoin?</h3>
              <p className="text-gray-600 mb-4">
                Understanding the basics of Bitcoin as digital money, its history, and why it was created.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Digital currency fundamentals</li>
                <li>• Decentralized network</li>
                <li>• Limited supply (21 million)</li>
                <li>• Peer-to-peer transactions</li>
              </ul>
            </div>

            <div className="card">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">How Bitcoin Works</h3>
              <p className="text-gray-600 mb-4">
                Learn about blockchain technology, mining, and the security features that make Bitcoin unique.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Blockchain technology</li>
                <li>• Mining and consensus</li>
                <li>• Cryptographic security</li>
                <li>• Transaction verification</li>
              </ul>
            </div>

            <div className="card">
              <TrendingUp className="h-12 w-12 text-bitcoin-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why Bitcoin Matters</h3>
              <p className="text-gray-600 mb-4">
                Understanding Bitcoin&apos;s value proposition and its role in the future of money and finance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Store of value properties</li>
                <li>• Inflation hedge</li>
                <li>• Financial sovereignty</li>
                <li>• Global accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Guide */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Getting Started with Bitcoin
            </h2>
            <p className="text-xl text-gray-600">
              A step-by-step guide to buying and storing Bitcoin safely
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Choose a Reputable Exchange</h3>
                    <p className="text-gray-600">
                      Start with established exchanges like Coinbase, Kraken, or Binance. 
                      Verify their security measures and regulatory compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Identity Verification</h3>
                    <p className="text-gray-600">
                      Most exchanges require KYC (Know Your Customer) verification. 
                      This is normal and helps protect against fraud.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Start with Small Amounts</h3>
                    <p className="text-gray-600">
                      Begin with an amount you can afford to lose. 
                      This allows you to learn without significant financial risk.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Set Up Secure Storage</h3>
                    <p className="text-gray-600">
                      Move your Bitcoin to a hardware wallet or secure software wallet. 
                      Never leave large amounts on exchanges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended Exchanges</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Coinbase</h4>
                    <p className="text-sm text-gray-600">Best for beginners</p>
                  </div>
                  <a
                    href="https://coinbase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    Visit →
                  </a>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Kraken</h4>
                    <p className="text-sm text-gray-600">Advanced features</p>
                  </div>
                  <a
                    href="https://kraken.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    Visit →
                  </a>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Binance</h4>
                    <p className="text-sm text-gray-600">Low fees</p>
                  </div>
                  <a
                    href="https://binance.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    Visit →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bitcoin Storage Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Keep your Bitcoin safe with the right storage method
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hardware Wallets</h3>
              <p className="text-gray-600 mb-6">
                The most secure option for storing Bitcoin. Your private keys never leave the device.
              </p>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li>• Ledger Nano S/X</li>
                <li>• Trezor Model T</li>
                <li>• Coldcard</li>
                <li>• Offline storage</li>
              </ul>
              <div className="text-sm font-semibold text-green-600">Best for: Large amounts</div>
            </div>

            <div className="card text-center">
              <DollarSign className="h-16 w-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Software Wallets</h3>
              <p className="text-gray-600 mb-6">
                Convenient and secure for smaller amounts. Choose non-custodial options.
              </p>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li>• Electrum</li>
                <li>• Exodus</li>
                <li>• BlueWallet</li>
                <li>• Mobile & desktop</li>
              </ul>
              <div className="text-sm font-semibold text-primary-600">Best for: Regular use</div>
            </div>

            <div className="card text-center">
              <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Exchange Storage</h3>
              <p className="text-gray-600 mb-6">
                Convenient but risky. Only use for small amounts and short-term storage.
              </p>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li>• Easy to use</li>
                <li>• Quick transactions</li>
                <li>• Higher risk</li>
                <li>• Not your keys</li>
              </ul>
              <div className="text-sm font-semibold text-yellow-600">Best for: Trading only</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bitcoin Investment Strategies
            </h2>
            <p className="text-xl text-gray-600">
              Proven approaches to building your Bitcoin portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dollar-Cost Averaging (DCA)</h3>
                <p className="text-gray-600 mb-4">
                  Invest a fixed amount regularly regardless of price. This reduces the impact of volatility and removes emotion from investing.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Reduces timing risk
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Builds discipline
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Works for any budget
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Value Averaging</h3>
                <p className="text-gray-600 mb-4">
                  Adjust your investment amount based on Bitcoin&apos;s performance. Buy more when prices are low, less when high.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Potentially better returns
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Requires more attention
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Higher complexity
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Portfolio Allocation</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Conservative (1-5%)</h4>
                  <p className="text-sm text-gray-600">
                    Small allocation for diversification. Good for risk-averse investors.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Moderate (5-15%)</h4>
                  <p className="text-sm text-gray-600">
                    Balanced approach. Most common recommendation for new Bitcoin investors.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Aggressive (15%+)</h4>
                  <p className="text-sm text-gray-600">
                    Higher allocation for those with strong conviction and risk tolerance.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> Only invest what you can afford to lose. 
                  Bitcoin is highly volatile and speculative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Bitcoin Mistakes to Avoid
            </h2>
            <p className="text-xl text-gray-600">
              Learn from others&apos; mistakes to protect your investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card border-l-4 border-red-500">
              <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">FOMO Buying</h3>
              <p className="text-gray-600">
                Buying Bitcoin when prices are at all-time highs due to fear of missing out. 
                This often leads to buying at the worst possible time.
              </p>
            </div>

            <div className="card border-l-4 border-red-500">
              <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Panic Selling</h3>
              <p className="text-gray-600">
                Selling during market downturns due to fear. This locks in losses and prevents 
                participation in potential recoveries.
              </p>
            </div>

            <div className="card border-l-4 border-red-500">
              <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Poor Security</h3>
              <p className="text-gray-600">
                Using weak passwords, not enabling 2FA, or leaving Bitcoin on exchanges. 
                Security should be your top priority.
              </p>
            </div>

            <div className="card border-l-4 border-red-500">
              <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Over-leveraging</h3>
              <p className="text-gray-600">
                Using borrowed money or margin to buy Bitcoin. This amplifies both gains and losses, 
                often leading to financial ruin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Bitcoin Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get personalized guidance on Bitcoin investing, storage, and strategy. 
            Book a coaching session to accelerate your learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/coaching" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              <DollarSign className="inline h-5 w-5 mr-2" />
              Book Bitcoin Coaching
            </Link>
            <a
              href="https://youtube.com/@yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Watch Free Videos
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
