import type { Metadata } from 'next'
import { Yeseva_One, Manrope } from 'next/font/google'
import './globals.css'

const yesevaOne = Yeseva_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-yeseva-one',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'small talk',
  description: 'let\'s hit pause.',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon" />
      </head>
      <body className={`${yesevaOne.variable} ${manrope.variable} font-manrope bg-background text-text lowercase antialiased`}>
        {children}
      </body>
    </html>
  )
} 