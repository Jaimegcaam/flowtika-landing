import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flowtika',
  description: 'Ai agents for automation',
  generator: 'jaime caamano',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
