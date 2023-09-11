import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'This is my personal software portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${inter.className} max-w-7xl mx-auto`}>
          <NavBar />
          <main>
            {children}
          </main>
        </body>
    </html>
  )
}
