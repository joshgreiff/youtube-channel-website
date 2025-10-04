import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Work, Save, Bitcoin - Your Guide to Financial Freedom',
  description: 'Learn about work, saving strategies, and Bitcoin fundamentals. Get 1-on-1 coaching to master your financial journey.',
  keywords: 'bitcoin, cryptocurrency, financial coaching, saving, investment, work',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Work, Save, Bitcoin - Your Guide to Financial Freedom',
    description: 'Learn about work, saving strategies, and Bitcoin fundamentals. Get 1-on-1 coaching to master your financial journey.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
