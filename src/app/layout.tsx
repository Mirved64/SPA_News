import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'News',
  description: 'Simple SPA News',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={inter.className}>{children}</body>
  </html>
)

export default RootLayout
