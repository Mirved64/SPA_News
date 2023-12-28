import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@lib/providers'
import { Header } from '@ui/header'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'News',
  description: 'Simple SPA News',
}
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <Providers>
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  </Providers>
)
export default RootLayout
