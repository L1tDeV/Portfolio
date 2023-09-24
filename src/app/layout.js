import './globals.scss'
import Head from 'next/head'

export const metadata = {
  title: 'SmaF1',
  description: 'This site-portfolio is written in Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
